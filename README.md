# ES Modules App Skeleton

Template project for modern vanilla ES modules apps with sane linting settings.

## Demo

[Demo page](https://example.com/demo) - can be found under `demo/index.html`

## Installation

```bash
npm install --save app
```

## Usage

Here is a basic HTML setup which should cover most needs:

```html
<script type="module">
import App from './app.js';

const app = new App({
  id: 'app',
  onChange: (result) => { console.log(result); },
});
</script>
```
