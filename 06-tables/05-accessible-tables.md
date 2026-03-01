# Accessible Tables

To ensure that non-visual users can understand your data, use these accessibility features.

## Table Captions
Every table should have a `<caption>` tag to give it a title.

```html
<table border="1">
    <caption>Monthly Savings Analysis</caption>
    ...
</table>
```

## Summary of Best Practices
1.  **Use `<th>` for headers**: This is the most basic requirement.
2.  **Use `scope`**: As learned earlier, this helps screen readers navigate complex grids.
3.  **Provide a summary**: You can use the `summary` attribute on the `<table>` tag, though it's less common today.
4.  **Keep it simple**: The more complex the spanning, the harder it is for a screen reader to interpret.

---
[Back to Tables](./README.md) | [Next: When NOT to use Tables](./06-when-not-to-use-tables.md)
