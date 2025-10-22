# Biome Formatting Setup Plan

## Overview
Added Biome formatting to the MS Office Google Apps Universal Plugin Framework repository, following the AGENTS.md guidelines.

## Completed Tasks

### 1. Installed Biome
- Added `@biomejs/biome` as a shared dev dependency in the root `package.json`
- This follows the AGENTS.md instruction to install shared packages with `npm install <package-name>` in the root directory

### 2. Created Biome Configuration
- Created `biome.json` in the root directory with comprehensive configuration
- Configuration includes:
  - Recommended linter rules with some adjustments for React/TypeScript
  - Formatter settings optimized for the project (2-space indentation, 100 line width)
  - File inclusion/exclusion patterns for the monorepo structure
  - Support for JS, JSX, TS, TSX, JSON, CSS, SCSS, LESS, and HTML files

### 3. Added Biome Scripts
- Added the following scripts to root `package.json`:
  - `format`: Format all files with Biome
  - `format:check`: Check formatting without modifying files
  - `lint`: Lint and fix issues automatically
  - `lint:check`: Check linting without fixing
  - `check`: Run both formatting and linting with auto-fix
  - `check:ci`: Run both formatting and linting checks (for CI)

### 4. Repository Structure Compliance
- All artifacts stored in `agents/` directory as required
- Followed the monorepo structure with shared tooling in root
- Maintained separation between Google (Yarn) and Office (NPM) package management

## Configuration Details

### Biome Rules
- Enabled recommended rules with sensible overrides
- Disabled excessive cognitive complexity checks
- Set unused variables to error level
- Warned on `any` types and exhaustive dependencies

### Formatter Settings
- 2-space indentation
- Single quotes for JS/TS
- Double quotes for JSX attributes
- Trailing commas for ES5 compatibility
- 100 character line width

### File Patterns
- Includes: JS, JSX, TS, TSX, JSON, CSS, SCSS, LESS, HTML
- Ignores: node_modules, dist, build, coverage, and common build directories

## Usage

Run the following commands from the repository root:

```bash
# Format all files
npm run format

# Check formatting (CI)
npm run format:check

# Lint and fix
npm run lint

# Check linting (CI)
npm run lint:check

# Full check with auto-fix
npm run check

# Full check without fixes (CI)
npm run check:ci
```

## Integration with Build Process

The Biome setup is now ready to be integrated into the existing build pipeline. The `npm run build` command can be extended to include `npm run check:ci` for pre-build validation if desired.
