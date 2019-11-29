# ELSI-SAT

## Setup
### Get yarn
- [yarnpkg.com](https://yarnpkg.com/en/)

### Install Dependencies
```bash
# Installs all dependencies for the project.
yarn install
```

## Development
### Serve
```bash
# Compiles and hot-reloads for development.
yarn serve
```

### Build
```bash
# Compiles and minifies for production.
yarn build
```

### Test
```bash
# Runs tests defined in package.json.
yarn test
```

### Lint
```bash
# Lints and fixes files
yarn lint
```

## Electron

- ELSI-SAT is using [github.com/electron-userland/electron-builder](https://github.com/electron-userland/electron-builder)
 	+ Documentation at [electron.build](https://www.electron.build/multi-platform-build)

### Serve
```bash
yarn electron:serve
```

### Build
```bash
# Build.
yarn electron:build
```

### Multi Platform Build

- `--win`
- `--mac`
- `--linux`

```bash
# Build for a specific plattform.
yarn electron:build --win
```
