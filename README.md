# vite-pug-adapter
A simple Vite plugin that serves Pug files directly without physical HTML files.

## Features
- No dirties. No physical HTML in your root.
- Simple usage. No configs.
- Serve Pug files to Vite as if they were html files.

## Installation
```bash
npm install -D vite-pug-adapter pug
```
```vite.config.js
//vite.config.js
// vite.config.js
import vite_pug_adapter from 'vite-pug-adapter';

export default {
  plugins: [vite_pug_adapter]
};
```

## Caution
This **only** compiles Pug files in your root dir, then if you need to put Pug files in other places such as /src, you should use anothor module.

