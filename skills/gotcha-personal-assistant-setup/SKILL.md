---
name: gotcha-personal-assistant-setup
description: Interview a person by voice and build the first version of a local personal-assistant workspace for the Gotcha workshop. Use when someone asks to set up, start, create, rebuild, or improve their workshop personal assistant in the current local project folder.
---

# Gotcha Personal Assistant Setup

Build a useful first version in about ten minutes. The person works by talking to the assistant. The files are the assistant's memory, not a note system the person must maintain.

Use [assets/AGENTS-template.md](assets/AGENTS-template.md) as the starting point for `AGENTS.md`. Adapt every placeholder and remove anything that does not help this person.

## 1. Check the project

Confirm that the current local project folder is the folder that should become the personal assistant.

If it already contains files:

- Inspect them before changing anything.
- Preserve `Baseline.md`.
- Do not overwrite existing instructions, context, notes, or actions.
- Explain any conflict before continuing.

Briefly explain:

> I will interview you and use your answers to build the first version of your personal assistant. You will use it by talking to it; you do not need to manage the files yourself.

Set the boundary once:

> Share only information you are allowed and comfortable to let the assistant read and remember. You can skip any question.

Do not repeat generic privacy warnings unless the person introduces a new sensitive source or boundary.

## 2. Interview in short rounds

Ask four to six numbered questions at a time. Make every round easy to answer in one spoken response. Rough dictation is fine.

Confirm only transcription mistakes that could change a name, company, date, number, responsibility, boundary, or commitment.

### Round 1: person, organisation, and outcomes

Discover:

- Name, role, and organisation.
- What the organisation does and for whom.
- The organisation's main goals for the coming year.
- What the person is responsible for.
- What they are trying to improve or change.
- What work they want the assistant to take off their plate.

### Round 2: people and working style

Discover:

- The closest colleagues and what each person is responsible for.
- Important customers, partners, or other relationships only when they matter to daily work.
- How the person makes decisions and what a good answer looks like to them.
- Communication and writing preferences.
- Recurring frustrations, failure modes, and work that often gets forgotten.
- Which actions the assistant may prepare independently and which actions require approval.

### Round 3: sources and optional personal context

Discover:

- Which documents, folders, websites, email, calendars, or other sources may be used.
- Which company rules or information boundaries matter.
- Which sources are missing today.
- Optional personal context that genuinely improves support.

Do not try to document the person's whole life. The assistant should keep learning through normal work.

## 3. Confirm the first version

When the important questions are answered, show a compact summary:

- Who the person is.
- What their organisation does.
- Their main goals and responsibilities.
- Important colleagues and roles.
- How the assistant should work.
- Authority and privacy boundaries.
- Known sources and gaps.
- What will be created.

Ask the person to correct important mistakes and approve the setup before writing files.

Do not make them approve a long technical architecture.

## 4. Build the workspace

After approval, create:

```text
AGENTS.md
Actions.md
Now.md
Inbox/
Context/
  Person.md
  Work.md
```

Create only these day-one files unless the interview reveals a clear immediate need for another file.

### `AGENTS.md`

Adapt the bundled template. Include:

- The assistant's purpose.
- The desired working relationship.
- What it may do independently.
- What requires approval.
- How it uses and updates memory.
- Where it finds person and work context.
- Relevant source and privacy rules.
- Known failure modes.

Never leave placeholders behind.

### `Context/Person.md`

Store factual context about the person:

- Identity and roles.
- Responsibilities and current goals.
- Working and communication preferences.
- Useful personal context the person chose to share.

Do not put instructions here.

### `Context/Work.md`

Store:

- What the organisation does and for whom.
- Current company goals and constraints.
- The person's responsibilities inside the organisation.
- Direct colleagues, their roles, and why they matter.
- Important recurring work.
- Known sources and information gaps.

### `Now.md`

Create a short first view with no more than three current outcomes, key risks or constraints, important waiting items, and work the assistant can help with.

### `Actions.md`

Use these sections:

- Person
- Assistant
- Waiting on others
- Parked
- Recently completed

Add only actions that were actually stated or clearly agreed. Do not invent commitments.

### `Inbox/`

Create the folder as a temporary home for new material that still needs to be understood or filed.

## 5. Verify and hand over

Re-read every created or changed file.

Check:

- Names, roles, dates, numbers, goals, and responsibilities match the interview.
- `AGENTS.md` points to paths that exist.
- No placeholder or invented personal fact remains.
- `Now.md` and `Actions.md` are short and based on real information.
- The person can use the assistant through conversation without managing files.
- `Baseline.md` and other existing files were preserved.

Show the person what was created in plain language. Invite one final correction.

Do not start a new long task. End with:

> Your first version is ready. Return to the workshop and inspect the files with the instructor. Your assistant can keep improving them as you use it.
