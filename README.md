# Gotcha Skills

This is the public source of truth for skills created and maintained by Gotcha.

A skill is a small set of written instructions that teaches an AI agent how to handle a recurring kind of work. Most skills are one `SKILL.md` file, sometimes supported by templates or examples.

## Available skills

| Skill | What it helps with |
| --- | --- |
| [Competitor Analysis](skills/gotcha-competitor-analysis/) | Compare a company with a competitor using public evidence and turn the findings into practical improvements. |
| [Lead Research](skills/gotcha-lead-research/) | Find and rank organisations that appear to fit a company, with evidence for timing and relevance. |
| [Market Exploration](skills/gotcha-market-exploration/) | Explore whether a new market or customer segment is worth testing. |
| [Personal Assistant Setup](skills/gotcha-personal-assistant-setup/) | Interview someone and build the first version of a local personal-assistant workspace. |
| [Purchase Research](skills/gotcha-purchase-research/) | Compare business purchases and prepare a decision brief. |
| [Week Preparation](skills/gotcha-week-preparation/) | Prepare the coming week from calendars, messages, notes, goals and commitments. |

## Install a skill

Open the folder of the skill you want, copy its GitHub URL and give that URL to your agent.

For example:

> Install this skill in my current project:  
> https://github.com/Gotcha-Certified/skills/tree/main/skills/gotcha-competitor-analysis

The agent reads the files and copies the skill into the right place. It is not a separate application running in the background.

You can ask the agent to explain the skill before installing it:

> Read this skill first. What will it ask you to do, what files does it contain and is there anything I should check before I install it?

## For websites and other Gotcha products

[`registry.json`](registry.json) is the machine-readable catalogue. Gotcha websites can use it to show the current skills without maintaining a second list.

Collections define which skills belong to a particular workshop or programme. The first collection is [Your First Personal Agent — 25 August 2026](collections/workshop-2026-08-25.json).

## Publishing rules

- `main` contains the latest public, stable version.
- Every skill keeps one permanent folder name. Existing URLs should not break.
- Changes are reviewed through pull requests once the initial library is established.
- A collection or release tag can pin the exact versions used by a workshop.
- The skill folder is authoritative. Articles, slides and websites should link here instead of keeping editable copies.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the structure and review process.

