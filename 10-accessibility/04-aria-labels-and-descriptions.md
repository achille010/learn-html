# ARIA Labels and Descriptions

Sometimes an element doesn't have visible text (like an icon button). These attributes provide the missing context for screen readers.

## `aria-label`
Use this for a short, descriptive label.

```html
<button aria-label="Close menu">&times;</button>
```

## `aria-labelledby`
Use this to link an element to another element that contains the label text.

```html
<h2 id="billing-title">Billing Address</h2>
<div role="group" aria-labelledby="billing-title">
    <!-- Billing fields -->
</div>
```

## `aria-describedby`
Use this for longer descriptions or instructions.

```html
<label for="password">Password:</label>
<input type="password" id="password" aria-describedby="password-rules">
<p id="password-rules">Must be at least 8 characters long.</p>
```

---
[Back to Accessibility](./README.md) | [Next: Keyboard Navigation](./05-keyboard-navigation.md)
