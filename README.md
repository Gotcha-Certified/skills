# Gotcha Skills

This is the public source of truth for skills created and maintained by Gotcha.

A skill is a small set of written instructions that teaches an AI agent how to handle a recurring kind of work. Most skills are one `SKILL.md` file, sometimes supported by templates or examples.

## Available skills

| Skill | What it helps with |
| --- | --- |
| [Competitor Analysis](skills/gotcha-competitor-analysis/) | Compare a company with a competitor using public evidence and turn the findings into practical improvements. |
| [Interview Me](skills/interview-me/) | Relentlessly interview someone about a plan until its decisions and dependencies are clear. |
| [Interview Me with Docs](skills/interview-me-with-docs/) | Run the same interview while preserving terminology, decisions and open questions in the project documentation. |
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

That is all a skill is: written instructions, plus any supporting files it needs.
