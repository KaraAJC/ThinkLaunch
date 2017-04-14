# ThinkLaunch Academy Installfest
## Checklist:

### Command Line
The Command line is your direct connection to your computer. What many of us are used to is interfacing with your operating system's User Interface. 
The Command line allows you to "command" your computer to do things, one "line" at a time.

#### Access Your Command Line
- [ ] **Mac**: Search for “Terminal”
- [ ] **Windows**: Search for “Powershell”

#### Learn how to use your Command Line

##### Commands
- `pwd` = print working directory | _Where am I?_
- `cd <directory>` = Change Directory
  - `cd ~` = Change to the ROOT directory
  - `cd ..` = Change directory to the PARENT directory (_move one folder up_)
- `ls` (Mac & Windows Git Bash)= List |  `dir` (PC PowerShell) = Directory | _What's around me?_
  - `ls -a` list ALL files, including hidden system files
- `which <program>` (Mac & Windows Git Bash) | `where <program>` (PC Powershell) = command to check if a program exists 
- [ ] Complete the [command line tutorial](https://www.codecademy.com/learn/learn-the-command-line)

### Git
Git is a program for version control. Primarily used for Open Source Software development, git is initialized within a folder, 
called repositories, and whenever a file is created, updated, deleted, or changed in any other way, git keeps track. 
The git process lets you document your changes, and communicates with a remote version of your repository, living on publicly 
accessible sites like github, or bitbucket.

#### Install Git

 - [ ] Download directly - https://git-scm.com/downloads
 
  _NOTE:_
  - If you have problems with downloading directly:
    - install Homebrew: https://brew.sh/
    - then enter `brew install git` command
  - Git will require xcode
  - Git will ask for administrator password (won’t show characters or a count)

#### Learn about Git Workflow

- [ ] [Complete this git tutorial](https://try.github.io/levels/1/challenges/1)
- [ ] Designate a Dedicated Project Folder space on your desktop
  - HINT: `cd` to your desktop and `mkdir` to create a folder

### Node/NPM
NodeJS is what will help us run javascript programs from the terminal. 
NPM is a package manager that will let us grab libraries to work with and support our programs. 

#### Install Node
 - [ ] Download directly - https://nodejs.org

_NOTE:_
- Installing node will also install NPM.

### Code Editors
A Code editor is like Microsoft word. It's the program you use to create and edit your code files. You'll be opening your project 
repository in your code editor (either from the terminal, or by using the code editor's menu) and editing files.
Code editors are useful because they can provide help when writing your code, by highlighting syntax, autocompleting code, 
accessing code snippets, or reporting errors. Changes you make with a code editor are being tracked by git in the command line.

#### Install a Code Editor

- [ ] Download one of the below code editors, and read their documentation to ensure you know how to use it! 
Reccomended Editors for this course:

- Atom: [ATOM](https://atom.io/)
- Visual Studio Code: [CODE](https://code.visualstudio.com/)
- Brackets: [BRACKETS](http://brackets.io/)
- Sublime Text 3: [SUBL](https://www.sublimetext.com/)

### Chrome Browser
Browsers are great! Chrome browser is useful because they have **Chrome Dev Tools** Which we'll be using to DeBug and preview our code.

#### Install Latest Chrome browser

- [ ] Download directly - https://www.google.com/chrome/browser

### Github
#### Create a Github Account
- [ ] Celebrate, you're on Github! :tada:

#### Create a public repository 
- [ ] (name it whatever you want) - use this ["Hello World" tutorial](https://guides.github.com/activities/hello-world/)
- [ ] choose for a README.md file to be created.

- [ ] Clone down the repository 
  - use command line to navigate to the project folder you created and `git clone <repo link>` your repository within that folder. 
  - `cd <repo-name>` and note that your terminal command line shows (master)
  - run `git status` to show that you're in the right place

### Markdown
Markdown is a rich text Markup language, that is primarily used for documentation files, and can be used for static websites 
(using programs like Jekyll)

#### Learn How to write Markdown
- [ ] Complete Markdown tutorial

#### Create Markdown Files
- [ ] Create an `installfest.md` file
  - write 10 things you learned from installfest
  - be sure to use lists, headers, and code syntax

### Slack
Slack is used as a communication tool. Instead of long email threads, we'll be using slack to communicate. 
We have various channels like #help and #random, and will be sharing tips, resources, and helping you with any problems that may come up
while you do your homework. Please take some time to learn a bit about how to use slack by checking out [Slack Guides](https://get.slack.help/hc/en-us/articles/115004071768)

- [ ] Join the cohort on Slack
  - [ ] DM me your github account username


### Resources:
Learn how to use Command Line:

https://www.codecademy.com/learn/learn-the-command-line
https://learnpythonthehardway.org/book/appendix-a-cli/ex1.html

Learn how to use git: 

https://try.github.io/levels/1/challenges/1

Learn more about github:

https://help.github.com/articles/git-and-github-learning-resources/

Learn how to write markdown:

https://guides.github.com/features/mastering-markdown/
