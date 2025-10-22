# AGENTS.md

## General Instructions

- Agents must store their planning and all other artifacts in the `agents/` directory.
- Preferred stack is React, Typescript, and Biome.
- Agents must store their state and planning in the `agents/` directory.
- Sources under `google/` are built with Vite and managed with Yarn.
- Sources under `office/` are built with Webpack and managed with NPM.
- Sources under `shared/` are common code used by both Google and Office plugins.
- `npm run dev` at the root of the repository starts both development servers.
- `npm run build` at the root of the repository builds both Google and Office plugins.
- Google plugin is hosted on Google Apps Script and locally served with Vite on port 3050.
- Office plugin is served with Webpack Dev Server on port 3060.
- To install new shared packages, use `npm install <package-name>` in the root directory.
- To install new Google-specific packages, use `yarn add <package-name>` in the `google/` directory.
- To install new Office-specific packages, use `npm install <package-name>` in the `office/` directory.

