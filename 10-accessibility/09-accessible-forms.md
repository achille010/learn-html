# Accessible Forms (Deep Dive)

We touched on this in early modules, but form accessibility is so important it deserves a deep dive.

## Key Attributes to Remember

```html
<!-- Marking a field as required for screen readers -->
<input type="text" aria-required="true">

<!-- Indicating an error to the user -->
<input type="text" aria-invalid="true" aria-describedby="error-msg">
<p id="error-msg">This field is required.</p>
```

## Error Message Best Practices
1.  **Don't just use red text**: Use an icon or descriptive text like "Error:".
2.  **Inform the user immediately**: If possible, show the error as the user leaves the field.
3.  **Ensure suggestions are clear**: If a field fails, tell the user *how* to fix it.

---
[Back to Accessibility](./README.md) | [Next: WCAG Overview](./10-wcag-overview.md)
