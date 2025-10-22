# ms-office-google-apps-universal-plugin-framework

A Universal framework to develop React based add-ins for both MS Office and its Google alternatives.

## Overview

This is a boilerplate / framework to create React based add-ins that can run on both Microsoft Office (Word, Excel, PowerPoint) and Google Workspace (Docs, Sheets, Slides) platforms with minimal code changes.

The project offers a simple API abstraction layer between the two platforms, allowing developers to write code once and deploy it on both ecosystems.

Currently MS Word and Google Docs are under development.

## Development

Follow `README.md` of `google/` and `office/` directories for platform specific development instructions.
After completing the instructions and having a `certs/` directory in `google/`, you can run the following commands from the root directory.

Install dependencies using:

```sh
npm install
```

Build the project using:

```sh
npm run build
```

Start dev server for both Office and Google using:

```sh
npm start
```

Format the codebase using:

```sh
npm run format
```

## References

The `google` and `office` directories in this repository are originally source-forked from the following repositories:

- [Office Add-in TaskPane React](https://github.com/OfficeDev/Office-Addin-TaskPane-React)
- [React Google Apps Script](https://github.com/enuchi/React-Google-Apps-Script/)

Post fork, both codebases have been changed to use the same React frontend and their branding assets have been replaced with neutral ones.

The `shared` directory now contains bulk of the shared code between the two platforms. Platform specific code is in `google` and `office` directories.
