# Datalist

The `<datalist>` tag provides an "autocomplete" feature for `<input>` elements. Users will see a drop-down list of pre-defined options as they type.

## How to use it
Attach a `<datalist>` to an `<input>` by using the `list` attribute on the input and a matching `id` on the datalist.

```html
<label for="browser">Choose your browser from the list:</label>
<input list="browsers" name="browser" id="browser">

<datalist id="browsers">
  <option value="Edge">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
```

---
[Back to Forms](./README.md) | [Next: Form Accessibility](./10-form-accessibility.md)
