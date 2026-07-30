---
name: interview-me-with-docs
description: A relentless interview that asks every frontier question at once, round by round, while updating documentation as decisions crystallise.
disable-model-invocation: true
---

<what-to-do>

Interview the user relentlessly until you reach a shared understanding. Map this as a **design tree**: every decision branches into the decisions that hang off it.

Work the tree in **rounds**. The **frontier** is every decision whose prerequisites are already settled — the questions you can ask *now* without guessing at answers you haven't heard yet. Ask the whole frontier in one round: number each question and give your recommended answer. Then wait for the user's answers before the next round.

Each round the user answers reshapes the tree — settled decisions push the frontier outward and unblock questions that depended on them. Recompute the frontier and ask the next round. A question whose answer depends on another question still open in this round belongs to a *later* round, not this one.

Finding *facts* is your job, never the user's. When a frontier question needs a fact from the environment (files, documents, tools, connected sources, etc.), dispatch a sub-agent to find it — don't ask the user for anything you could look up yourself. Don't block on it: a running exploration is an unsettled prerequisite, so only the questions downstream of it wait for the sub-agent to report — ask the rest of the frontier now. The *decisions* are the user's — put each to them and wait.

The session is done when the frontier is empty: every branch of the design tree visited, nothing left silently assumed. Do not act on it until the user confirms you have reached a shared understanding.

</what-to-do>

<supporting-info>

## Context awareness

During exploration, also look for existing documentation. Use the project's existing documentation convention when one is clear. If no suitable document exists, create one lazily when there is something worth recording.

## During the session

### Challenge against the existing language

When the user uses a term that conflicts with the existing language in the documentation, call it out immediately. "Your documentation defines 'customer' as X, but you seem to mean Y — which is it?"

### Sharpen fuzzy language

When the user uses vague or overloaded terms, propose a precise canonical term. "You're saying 'account' — do you mean the Customer or the User? Those are different things."

### Discuss concrete scenarios

When relationships are being discussed, stress-test them with specific scenarios. Invent scenarios that probe edge cases and force the user to be precise about the boundaries between concepts.

### Cross-reference with the available sources

When the user states how something works, check whether the available files, documents, tools, or connected sources agree. If you find a contradiction, surface it.

### Update the documentation inline

When a term or decision is resolved, update the documentation right there. Don't batch these up — capture them as they happen.

Keep the documentation focused on the topic. Include the current understanding, resolved terminology, decisions and why they were made, evidence, assumptions, open questions, and the next step. Preserve changes to earlier assumptions instead of silently replacing their history.

### Record major decisions sparingly

Only create a separate decision record when all three are true:

1. **Hard to reverse** — the cost of changing your mind later is meaningful
2. **Surprising without context** — a future reader will wonder "why did they do it this way?"
3. **The result of a real trade-off** — there were genuine alternatives and you picked one for specific reasons

If any of the three is missing, keep the decision in the main document.

</supporting-info>
