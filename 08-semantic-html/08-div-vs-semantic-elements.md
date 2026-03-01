# Div vs. Semantic Elements

While semantic elements are better, the `<div>` tag still has its place in modern web development.

## When to use `<div>`
Use a `<div>` when you need a container for **styling purposes only**. If the container doesn't add any meaning to the content, a `<div>` is the right choice.

## When to use Semantic Elements
If the container describes what the content **is** (a header, a navigation block, an article), always use the semantic tag.

## Comparison

```html
<!-- BAD: Using div for everything -->
<div id="nav">...</div>
<div id="main-content">...</div>

<!-- GOOD: Using semantic tags -->
<nav>...</nav>
<main>...</main>
```

---
[Back to Semantic HTML](./README.md) | [Next: SEO Benefits of Semantic HTML](./09-seo-benefits-of-semantic-html.md)
