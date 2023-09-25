# Note-Taker

## Description

My application called Note Taker that can be used to write and save notes. This application is using an Express.js back end and will save and retrieve note data from a JSON file.

## Table of Contents 

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Installation](#installation)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [Questions](#questions)

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Mock-Up

The following images show the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./images/demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./images/demo-02.png)

## Installation

1. For installation onto local machine, download the zip file and copy it to a directory of your choice or clone to a directory of your choice using your terminal. 
2. Open the file in VS Code or any editor you prefer.
3. Open the terminal in VS Code and make sure you’re in the correct directory.
4. Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.
5. Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.
6. Ensure express is installed [Express package](https://www.npmjs.com/package/express). Run `npm i express` to install dependency in local project directory.
7. Ensure nodemon is installed [Nodemon package](https://www.npmjs.com/package/nodemon). Run `npm i nodemon` to install dependency in local project directory. Nodemon helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
8. Ensure uniqid is installed [Uniqid package](https://www.npmjs.com/package/uniqid). Run `npm i uniqid` to install dependency in local project directory. Uniqid created a uniq ID for each note.

## Technologies

* [nodejs](https://nodejs.org/en/)
* [express.js](https://expressjs.com/)
* [Heroku](https://heroku.com) for live deployment

## Contributing

Any Contribution is more than welcome!

## Questions

If you have any question, Email me at: yana.mishina.92@gmail.com

Find me on GitHub: [Ymishyna](https://github.com/Ymishyna)