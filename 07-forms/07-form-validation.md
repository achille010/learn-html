# Form Validation

HTML has built-in features to make sure users type the correct data before they can submit the form.

## Simple Validation Attributes
-   **required**: Makes a field mandatory.
-   **minlength / maxlength**: Limits the number of characters.
-   **min / max**: Limits the numeric range.
-   **pattern**: Uses a **regex** (Regular Expression) to check the format.

## Example

```html
<form>
    <label for="username">Username (5-10 chars):</label>
    <input type="text" id="username" name="username" required minlength="5" maxlength="10">
    <button type="submit">Register</button>
</form>
```

---
[Back to Forms](./README.md) | [Next: Fieldset and Legend](./08-fieldset-and-legend.md)
