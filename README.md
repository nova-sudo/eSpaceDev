# eSpaceDev

A mock Node.js service used to generate realistic Git activity for the
eSpace Dev Hub dashboard.

The code here is intentionally minimal — the point is the surrounding
workflow: branches, pull requests, merges, Jira ticket references.

## Jira linkage

Every branch is named after a Jira key (`ESD-101`, `ESD-102`, …) and every
PR title starts with that key. The dashboard uses a regex over merged PR
titles/branches to compute the "Jira linkage %" metric; 100% here means
every PR points at a tracked ticket.

## Stack

- Node.js 20
- Express for the HTTP shell
- Vitest for tests
