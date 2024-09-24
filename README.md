# TelegramBot

## Overview

The **CommentApp** project is a simple web-based application designed to take fetch comments from an api and also alolow users to add and delete comments.

## Directory Structure

The project is organized into several key directories:

```plaintext
+---public
|       favicon.ico
|       index.html
|       logo192.png
|       logo512.png
|       manifest.json
|       robots.txt
|
\---src
    |   App.css
    |   App.jsx
    |   App.test.js
    |   index.css
    |   index.js
    |   logo.svg
    |   reportWebVitals.js
    |   setupTests.js
    |
    +---components
    |       CommentList.jsx
    |       CommentModal.jsx
    |       Header.jsx
    |   reportWebVitals.js
    |   setupTests.js
    |
    +---components
    |       CommentList.jsx
    |       CommentModal.jsx
    |       Header.jsx
    |   setupTests.js
    |
    +---components
    |       CommentList.jsx
    |       CommentModal.jsx
    |       Header.jsx
    |
    +---components
    |       CommentList.jsx
    |       CommentModal.jsx
    |       Header.jsx
    +---components
    |       CommentList.jsx
    |       CommentModal.jsx
    |       Header.jsx
    |       CommentList.jsx
    |       CommentModal.jsx
    |       Header.jsx
    |       CommentModal.jsx
    |       Header.jsx
    |
    |       Header.jsx
    |
    |
    +---constants
    |       url.js
    |
    +---hooks
    |       useComment.js
    |       useCommentActions.js
    |
    +---service
    |       api.js
    |
    +---store
    |   +---app
    |   |       store.js
    |   |
    |   +---baseQueries
    |   |       axiosBaseQuery.js
    |   |
    |   \---services
    |           coments.js
    |
    \---utils
            utils.js
```
## `package.json` Overview
- Project Name: comment-app
- Version: 0.1.0
- Type: Module

## Scripts
- `start`: Runs the development server.
- `build`: Compiles TypeScript and builds the project for production.
- `lint`: Runs ESLint to analyze and fix code issues.


## Dependencies
- React & ReactDOM: Core libraries for building the user interface.
- @emotion/react & @emotion/styled: For CSS-in-JS styling solutions.
- @mui/material: Material-UI components for building responsive interfaces.
- Redux & Redux Toolkit: For state management.
- React Router DOM: For handling client-side routing.
-Jest: For writing test cases.

## DevDependencies
- ESLint: Linter to maintain code quality.

## Installation and Setup
To install and set up the project, follow these steps:
1. Clone the repository:
   ```
   git clone https://github.com/EAmpofo/commentApp
   cd commentApp
   ```
2. Install dependencies:
   ```
    npm install
   ```
3. Run the development server:
   ```
    npm start
   ```
4. Run test:
   ```
    npm test
   ```
5. Build the project:
   ```
    npm run build
   ```
## Project Architecture
- **Components**: Reusable UI components.
- **Store**: Centralized state management using Redux.
- **Utils**: Utility functions, type definitions, and styles.

## How it works
https://comment-app-sandy.vercel.app/


