# Gotcha Skills

A Gotcha skill is a small set of written instructions that teaches an AI agent how to handle a recurring kind of work.

## Language

**Skill**  
The complete reusable instruction set. A skill may include templates or examples, but it is not a separate application.

**Skill folder**  
The permanent public folder under `skills/`. Its name is also the skill's ID and should not change after publication.

**Install**  
Let an agent read and copy the skill files into the place where it loads skills. Installing a skill does not start a background program.

**Public skill**  
A skill that is ready for people outside Gotcha to inspect and use. Every skill in this repository is public.

## Relationship

- The repository contains many **Skill folders**.
- A **Skill folder** contains one **Skill**.
- People can inspect a **Public skill** before asking an agent to **Install** it.

