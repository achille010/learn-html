# Template and Slot

These tags are primarily used inside Web Components to define recurring layouts.

## The `<template>` Tag
The content inside a `<template>` is not rendered by the browser when the page loads. It is meant to be cloned and used later with JavaScript.

```html
<template id="my-template">
  <div class="card">
    <h2><slot name="title">Default Title</slot></h2>
    <p><slot name="content">Default content goes here...</slot></p>
  </div>
</template>
```

## The `<slot>` Tag
The `<slot>` tag acts as a placeholder that you can fill with your own content when using the template.

---
[Back to Advanced Topics](./README.md) | [Next: HTML APIs Overview](./05-html-apis-overview.md)
