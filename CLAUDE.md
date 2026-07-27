# Gotcha Skills

This repository is the public source of truth for skills created and maintained by Gotcha.

## Structure

- `README.md` explains the library and links every public skill.
- `CONTEXT.md` defines the shared language used in this repository.
- `skills/` contains one folder per skill.

Each skill folder must contain:

- `SKILL.md` with YAML front matter.
- `agents/openai.yaml`.
- Only the supporting files the skill actually needs.

## Working rules

- Keep every skill public and safe to inspect.
- Give every skill one stable lowercase folder name.
- Keep existing skill URLs working.
- Add every skill to the table in `README.md`.
- Write for a capable agent. Explain outcomes, boundaries, judgment and failure modes without turning the skill into a brittle script.
- Ask users only for information that changes the work.
- Distinguish observations, interpretations and assumptions.
- Do not add registries, generated catalogues, build systems or release machinery unless the repository actually needs them.
- Test a skill on a realistic example before publishing it.

