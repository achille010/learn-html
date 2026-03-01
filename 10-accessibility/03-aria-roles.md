# ARIA Roles

**ARIA** stands for **Accessible Rich Internet Applications**. It is a set of attributes that you can add to your HTML elements to provide extra meaning to screen readers.

## When to use ARIA
You should only use ARIA when there is **no native HTML tag** that fits your needs.
> [!IMPORTANT]
> The first rule of ARIA is: **Don't use ARIA if you can use native HTML.**

## Common Roles

```html
<!-- Helping the browser understand a custom widget -->
<div role="alert">Your changes have been saved!</div>

<!-- Marking a navigation landmark -->
<div role="navigation">...</div>
```

---
[Back to Accessibility](./README.md) | [Next: ARIA Labels and Descriptions](./04-aria-labels-and-descriptions.md)
