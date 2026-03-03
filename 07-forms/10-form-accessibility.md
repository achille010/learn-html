# Form Accessibility

Making forms accessible is one of the most important tasks of a web developer. If a user can't fill out your form, they can't use your site.

## Checklist for Accessible Forms
1.  **Always use `<label>`**: Every input needs a label connected via the `for` attribute.
2.  **Use correct `type` attributes**: This helps with browser-side validation and mobile keyboards.
3.  **Group related fields with `<fieldset>`**: Helps screen readers understand context (like separating shipping and billing addresses).
4.  **Avoid using placeholder for labels**: Placeholders disappear when the user starts typing, which is bad for usability.
5.  **Provide clear error messages**: Ensure any validation errors are visible and readable by screen readers (often using ARIA attributes).

---
[Back to Forms](./README.md) | [Practice Exercises](./practice-exercises.md) | [Next Module: Semantic HTML](../08-semantic-html/README.md)
