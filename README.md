# ES Modules App Skeleton

Template project for modern vanilla ES modules apps with sane linting settings.

## Usage

```html
<script type="module">
import App from './app.js';

const app = new App({
  id: 'app',
  onChange: (result) => { console.log(result); },
});
</script>
```
