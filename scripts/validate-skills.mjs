import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const skillsRoot = path.join(root, "skills");
const registryPath = path.join(root, "registry.json");
const errors = [];

function fail(message) {
  errors.push(message);
}

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    fail(`${path.relative(root, file)} is not valid JSON: ${error.message}`);
    return null;
  }
}

function frontMatter(markdown, file) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    fail(`${file} has no YAML front matter.`);
    return {};
  }

  const values = {};
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
    values[key] = value;
  }
  return values;
}

function checkRelativeLinks(markdown, skillDir, skillId) {
  for (const match of markdown.matchAll(/\[[^\]]*]\(([^)]+)\)/g)) {
    const target = match[1].trim().replace(/^<|>$/g, "");
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    const localTarget = path.resolve(skillDir, target.split("#", 1)[0]);
    if (!fs.existsSync(localTarget)) {
      fail(`${skillId}/SKILL.md links to missing file: ${target}`);
    }
  }
}

const registry = readJson(registryPath);
const registrySkills = new Map((registry?.skills || []).map((skill) => [skill.id, skill]));

const skillIds = fs
  .readdirSync(skillsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

for (const skillId of skillIds) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(skillId)) {
    fail(`${skillId} is not a stable lowercase skill ID.`);
  }

  const skillDir = path.join(skillsRoot, skillId);
  const skillFile = path.join(skillDir, "SKILL.md");
  const openAiFile = path.join(skillDir, "agents", "openai.yaml");

  if (!fs.existsSync(skillFile)) {
    fail(`${skillId} is missing SKILL.md.`);
    continue;
  }
  if (!fs.existsSync(openAiFile)) {
    fail(`${skillId} is missing agents/openai.yaml.`);
  }

  const markdown = fs.readFileSync(skillFile, "utf8");
  const metadata = frontMatter(markdown, `${skillId}/SKILL.md`);
  if (metadata.name !== skillId) {
    fail(`${skillId}/SKILL.md has name "${metadata.name || ""}" instead of "${skillId}".`);
  }
  if (!metadata.description) {
    fail(`${skillId}/SKILL.md has no description.`);
  }
  checkRelativeLinks(markdown, skillDir, skillId);

  const entry = registrySkills.get(skillId);
  if (!entry) {
    fail(`${skillId} is missing from registry.json.`);
  } else if (entry.path !== `skills/${skillId}`) {
    fail(`${skillId} has the wrong registry path: ${entry.path}`);
  }
}

for (const skillId of registrySkills.keys()) {
  if (!skillIds.includes(skillId)) {
    fail(`registry.json contains missing skill: ${skillId}`);
  }
}

for (const file of fs.readdirSync(path.join(root, "collections"))) {
  if (!file.endsWith(".json")) continue;
  const collection = readJson(path.join(root, "collections", file));
  for (const skillId of collection?.skills || []) {
    if (!registrySkills.has(skillId)) {
      fail(`${file} contains unknown skill: ${skillId}`);
    }
  }
}

if (errors.length) {
  console.error(`Skill validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${skillIds.length} skills and ${registrySkills.size} registry entries.`);

