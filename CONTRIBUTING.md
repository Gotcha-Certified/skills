# Contributing

## Add a skill

Create one folder under `skills/` using a stable lowercase name with hyphens:

```text
skills/
  gotcha-example-skill/
    SKILL.md
    agents/
      openai.yaml
    assets/
      optional-template.md
```

Every skill needs:

- A `SKILL.md` file.
- YAML front matter with a `name` and `description`.
- A folder name that exactly matches the front-matter name.
- A description that explains both what the skill does and when an agent should use it.
- An `agents/openai.yaml` file with the user-facing name, description and default prompt.

Put supporting templates, examples and reference files in `assets/` or `references/`. Do not hide essential instructions in the repository README.

## Write for a capable agent

Explain the outcome, important boundaries, useful judgment and known failure modes. Do not turn the skill into a brittle click-by-click script when the agent can choose a better route.

Keep questions easy to answer. Ask only for information that changes the work.

Separate:

- What was directly observed.
- What the agent inferred.
- What still needs data or human judgment.

## Review safety and quality

Before publishing:

- Read every instruction as if an agent will follow it literally.
- Check that the skill does not request unnecessary access or sensitive information.
- Check every linked file.
- Remove placeholders and invented facts.
- Test the skill on a realistic example.
- Run `node scripts/validate-skills.mjs`.
- Update `registry.json`.
- Update any collection that should include the skill.

## Change an existing skill

Keep its folder name stable. If behaviour changes materially, update the version in `registry.json` and add a short note to the pull request explaining what users will notice.

Do not edit workshop copies and the public repository separately. Make the change here first, then update any pinned workshop collection or local snapshot.

