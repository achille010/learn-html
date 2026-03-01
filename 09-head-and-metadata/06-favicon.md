# Favicon

A **favicon** is the small icon that appears in the browser tab next to your page title.

## How to add one
Use the `<link>` tag within the `<head>`.

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

## Modern Best Practice
While `.ico` is the traditional format, modern browsers also support `.png` and `.svg`.

```html
<link rel="icon" type="image/png" href="/img/favicon-32x32.png">
```

> [!TIP]
> Use a square image with a clear, simple design so it's readable at very small sizes (usually 16x16 or 32x32 pixels).

---
[Back to Head and Metadata](./README.md) | [Next: Linking CSS](./07-linking-css.md)
