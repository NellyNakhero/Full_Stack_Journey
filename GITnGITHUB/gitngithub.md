# GIT AND GITHUB ESSENTIALS

<br/>

## GIT COMMANDS

| Git Command(s)                                 | What it does                                                                                                                | Sample Response                                             |
|------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| git --version                                  | Checks git version that's been installed                                                                                    | `git version 2.39.2`                                        |
| git config --global user.name "enter_username" | Configures globally the username to be used while executing git commands                                                    |                                                             |
| git config --global user.email "enter_email"   | Configures globally the email to be used while executing git commands                                                       |                                                             |
| git config --global ui.color auto              | Enables commandline coloring output                                                                                         |                                                             |
| git config -l                                  | Lists all the git configs set up                                                                                            |                                                             |
| git init .                                     | Converts the current non-git directory into a git repository                                                                | `Initialized empty Git repository in path/to/folder ./git/` |
| git add path/to/file                           | Moves files from working directory to staging area                                                                          |                                                             |
| git status                                     | Shows the current state of changes in both working directory and staging area                                               | ![git_status](/coding/devOps/images/tenant_id_8.jpeg)       |
| git rm --cached path/to/file                   | Removes files in the entered path from staging area                                                                         | `rm file.name`                                              |
| git commit -m "some useful message"            | Marks a logical conclusion of files being worked on with a message stamp on                                                 | ![git_commit](/coding/devOps/images/tenant_id_8.jpeg)       |
| git log                                        | Lists commit history                                                                                                        | ![git_commit](/coding/devOps/images/tenant_id_8.jpeg)       |
| git commit --amend -m "useful message amended" | Amends th latest git commit message                                                                                         | ![git_commit](/coding/devOps/images/tenant_id_8.jpeg)       |
| git push -u origin branch_name OR git push     | Moves files from local machine staging area to be hosted on github repository                                               | ![git_commit](/coding/devOps/images/tenant_id_8.jpeg)       |
| git pull                                       | Brings the changes from github and makes a copy on local machine                                                            | ![git_commit](/coding/devOps/images/tenant_id_8.jpeg)       |
| git checkout -b branch-name                    | Create a new branch from current branch and checks out to the new branch                                                    | `Switched to new branch xyz`                                |
| git branch                                     | Gives a list of all local branches(excluding remote branches) including the one currently checked out(one with asterics)    | `* main`                                                    |
| git pull (--rebase OR -r) origin main          | Pulls changes from origin branch into the local copy while appending the new changes made on local on top of pulled changes | ![git_commit](/coding/devOps/images/tenant_id_8.jpeg)       |
| git  rebase --continue                         | Continues the process or rebasing a branch after conflicts are resolved                                                     | ![git_commit](/coding/devOps/images/tenant_id_8.jpeg)       |
| git --version                                  | Check github version thats been installed                                                                                   | `git version 2.39.2`                                        |
| git --version                                  | Check github version thats been installed                                                                                   | `git version 2.39.2`                                        |
| git --version                                  | Check github version thats been installed                                                                                   | `git version 2.39.2`                                        |
|                                                |                                                                                                                             |                                                             |
