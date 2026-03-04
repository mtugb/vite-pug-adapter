# vite-pug-adapter
A simple Vite plugin that serves Pug files directly without physical HTML files.

## Features
- No dirties. No physical HTML in your root.
- Simple usage. No configs.
- Serves Pug files to Vite as if they were html files.

## Installation
```bash
npm install -D vite-pug-adapter pug
```
```javascript
// vite.config.js
import vite_pug_adapter from 'vite-pug-adapter';

export default {
  plugins: [vite_pug_adapter]
};
```

## Minimal Example
Following is ready-to-run example.
Try it by using ``npm run dev`` after cloning it.

https://github.com/mtugb/-vite-pug-adapter-example1

## Caution
This **only** compiles Pug files in your root dir, then if you need to put Pug files in other places, such as ``/src``, you should use another module.

