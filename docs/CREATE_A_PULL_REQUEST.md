<!-- @format -->

## How to create a Pull Request

Before you can start to work on the project, you need

1. Always work on a feature branch that you create out of the `main` branch of the project.

```bash
$ git checkout -b my_branch_name
```

Note: the `-b` flag on the `checkout` command does 2 things: 1. creates a new branch, and 2. switches to that branch.

2. Do your thing. Add implementation code. When you have at least one commit, go ahead and create a **Work In Progress** pull request by adding a WIP label to the PR. **This is an important step in a open source project so please don't forget to do that.**

3. Continue to do your thing... Note that every time you commit and push to your own repository (your fork), the PR will be updated with those commits. There is no reason to close the PR and open a new one when you make changes. Add a description to the PR based on the template!

4. Once you think that your PR is ready for final review by your peers, make sure that you request a review from me, (Tassilo).

5. I (Tassilo) will approve and merge your code if it is okay. If not, I will probably request changes to be made. If you do not agree with my suggestions/requests, please address the comments on the PR itself, not in Slack or email, etc.

6. Happy to have you on board, it's gonna be greaat!
