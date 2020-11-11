# Codehawk CLI Example

This shows an example way to use the Codehawk CLI. In this example, we analyse the Next.js starter app.

1. `npm install`
2. `npm run codehawk`
3. You will get some output:

```markdown
Codehawk Static Analysis Results
Top 4 files

| File                           | # of Lines | Times Used/Depended On | Maintainability (higher is better) |
| ------------------------------ | ---------- | ---------------------- | ---------------------------------- |
| complex-utils.js               | 99         | 1                      | 50.76 (Could be better)            |
| typescript-sample.ts           | 11         | 1                      | 70.73 OK                           |
| index.js                       | 209        | 1                      | 89.94 OK                           |
| hello.js                       | 6          | 1                      | 91.93 OK                           |

```
