# Labels

You should **never** have an input without a `<label>`.

## Why use Labels?
1.  **Accessibility**: Screen readers tell the user what each input is for.
2.  **Usability**: Clicking the label will focus the input field.

## How to use them
You connect a label to an input by matching the `for` attribute of the label with the `id` of the input.

```html
<label for="user-email">Email:</label>
<input type="email" id="user-email" name="email">
```

---
[Back to Forms](./README.md) | [Next: Textarea and Select](./04-textarea-and-select.md)
