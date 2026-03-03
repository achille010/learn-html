# Linking JavaScript

To add interactivity, you need to link your JavaScript files.

## The `<script>` Tag
Unlike the `<link>` tag, the `<script>` tag has a closing tag.

```html
<script src="script.js"></script>
```

## Where to put it?
-   **In the `<head>`**: Traditionally used here, but it can slow down page loading.
-   **Before the `</body>` tag**: The most common practice to ensure all HTML is loaded before the script runs.

---
[Back to Head and Metadata](./README.md) | [Practice Exercises](./practice-exercises.md) | [Next Module: Accessibility](../10-accessibility/README.md)
