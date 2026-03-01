# SVG in Depth

As we saw earlier, SVGs are powerful. Let's look at some advanced ways to use them in HTML.

## Styling with CSS
Unlike regular images, you can style parts of an SVG using CSS if the code is directly in your HTML.

```html
<svg class="icon">
  <circle cx="50" cy="50" r="40" />
</svg>

<style>
  .icon circle {
    fill: blue;
    transition: fill 0.3s ease;
  }
  .icon:hover circle {
    fill: red;
  }
</style>
```

## The `<use>` Tag
This tag allows you to define an icon once and reuse it multiple times on the same page.

```html
<svg style="display:none;">
    <symbol id="icon-home" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </symbol>
</svg>

<svg><use href="#icon-home"/></svg>
```

---
[Back to Advanced Topics](./README.md) | [Next: Web Components](./03-web-components.md)
