# Semantic HTML and a11y

The absolute easiest way to make your site accessible is to use the correct HTML tags.

## Automatic Benefits
When you use a semantic tag, the browser and screen reader automatically get:
-   **Role**: They know what the element is (a button, a link, a list).
-   **State**: They know if a checkbox is checked or a menu is expanded.
-   **Keyboard Support**: Tags like `<button>` and `<a>` are naturally reachable via the Tab key.

## Comparison

```html
<!-- BAD: Screen reader sees a clickable box but doesn't know what it is -->
<div onclick="submit()">Submit</div>

<!-- GOOD: Screen reader knows exactly what to do -->
<button onclick="submit()">Submit</button>
```

---
[Back to Accessibility](./README.md) | [Next: ARIA Roles](./03-aria-roles.md)
