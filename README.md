# Ronnie-Sophie

[![Build Status](https://travis-ci.org/ronniegeraghty/Ronnie-Sophie.svg?branch=master)](https://travis-ci.org/ronniegeraghty/Ronnie-Sophie) ![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/ronniegeraghty/Ronnie-Sophie) ![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/ronniegeraghty/Ronnie-Sophie?color=brightgreen) ![GitHub issues](https://img.shields.io/github/issues-raw/ronniegeraghty/Ronnie-Sophie?color=Red) ![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/ronniegeraghty/Ronnie-Sophie?color=yellow)

This is the repository for Ronnie and Sophie's practice website, where they test their coding and web development.

This porject uses a [React](https://reactjs.org/) front end and a [Travis-ci](https://travis-ci.org/) pipeline to deploy to [Firebase](https://firebase.google.com/) hosting. The website is hosted at:<br>
[ronnie-sophie.web.app](ronnie-sophie.web.app)<br>
[ronnie-sophie.firebaseapp.com](ronnie-sophie.firebaseapp.com)

## Installation

To run locally you will need to download [git](https://git-scm.com/downloads) and [node.js](https://nodejs.org/en/download/). Then execute the following commands:

```shell
git clone https://github.com/ronniegeraghty/Ronnie-Sophie.git
cd Ronnie-Sophie
npm install
```

Then you can run the app locally using the following command:

```shell
npm run start
```

## Contributing

To contribute you should either fork the respository or create a new branch then make a pull request when you are ready to have the code merged with the master branch. The code will then be reviewed and merged if it is acceptable. If not a comment to why the code cannot be mereged will be left on the pull request.

### File Structure

```file
project
│
└─── public
│   │   favicon.ico
│   │   index.html
│   │   manifest.json
│
└─── scripts
│   │   file021.txt
│   │   file022.txt
│
└─── src
│   └─── components
│   │   └─── "Component Name"
│   │   │   │   index.jsx
│   │   │   │   "component Name".module.css
│   │ App.css
│   │ App.jsx
│   │ App.test.js
│   │ index.css
│   │ index.jsx
│   │ serviceWorker.js
│ .firebaserc
│ .gitignore
│ .travis.yml
│ package-lock.json
│ package.json
│ README.md
│ yarn.lock
```
