# Daruma Backend
        
This is a source code for daruma projcet.

## Getting Started

This project use javascript as base language and npm for package manager. Make sure you have both of them on your system. ([nodejs](https://nodejs.org/en/)).

### Quick Start

1. Install project dependencies using npm or yarn (npm preferably).
    ```
    npm install
    ```
    _By default, this project will use mysql as database. To use another database service, install the correspondent driver_

2. Edit environment variable.
    Edit `.env.example` file according to your environment setup. Save the file as `.env`
    ```env
    PORT=3000
    DB_HOST=localhost
    DB_USER=test
    DB_PASS=test
    DB_NAME=test
    DB_PORT=5432
    ```
    
3. Run development server.
    This project using ts-node to run development server.
    ```
    npm start
    ```
    
### Linter
This project use costum lint rules. To review or make changes to rule you can touch `.eslintrc.json`. To run linter locally you can type this to your terminal.
```sh
npm run lint <FILE_NAME>
```
Always run linter on every file before you push.

### Nodemon
For a better developing experiences, we can use [nodemon](https://nodemon.io/) to watch change in file. Nodemon is included as development dependency.
Simply run development script on your terminal.
```
npm run develop
```
To review or make changes to nodemon rules, you can touch `nodemon.json`.

### Documentation
This project use [apidoc](http://apidocjs.com/) for documenting REST API. Apidoc is included as development dependency.
To generate documentation run generate documentation script on your terminal.
```
npm run generate-docs
```
Your documentation will be generated on `./docs/dist/` folder.
To add or modify documentation you can go to `./docs/src` folder and edit respective files. Please reffer to Apidoc documentation for creating a documentation.

### Build for Production
To make production build, we must compile typescript to javascript then run the server from them.
```
npm run build
```
WIP: Find production build best practices.
