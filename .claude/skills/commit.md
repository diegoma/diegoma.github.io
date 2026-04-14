# Commit

Creates well-structured git commits for the current changes.

## Instructions

1. Run `git status` and `git diff` to understand what changed
2. Run `git log --oneline -5` to confirm the current branch name
3. Group changed files by theme/concern (e.g. UI, content, config, bug fix)
4. For each group, create a separate commit following the format below
5. Stage specific files by name — never use `git add .` or `git add -A`

## Commit message format

```
[branchname] Brief summary of what was done

- What was done, item 1
- What was done, item 2
- What was done, item 3
```

- Line 1: `[branchname]` followed by a short title that is itself a brief summary of what was done
- Line 2: blank
- Lines 3+: bullet points describing the specific changes

## Rules

- Commit messages must be in **English**
- Never use `--no-verify`
- Never amend existing commits — always create new ones
- If there are no changes, inform the user
