# README

# Vite config for JEST

A basic configuration for Vite projects with Jest.

### Install libs

```bash
npm i -D @babel/preset-env @babel/preset-react jest jest-environment-jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom
```

**Babel:** for code compile 
**Jest:** for tests 
**@testing-library:** for react tests

If using typescript:

```bash
npm i -D ts-jest ts-node @types/jest
```

For CSS imports:

```bash
npm i -D identity-obj-proxy
```

### Config files

`babel.config.js:`  File with babel configuration;

`jest.config.js:`  File for jest setup, with environment and code coverage;

`package.json:`  Script to run testes;