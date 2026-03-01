# Textarea and Select

For input that doesn't fit in a single line, HTML provides the `<textarea>` and `<select>` elements.

## Textarea
Use this for messages, comments, or any long-form text.

```html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="50"></textarea>
```

## Select (Dropdown)
Use the `<select>` tag combined with `<option>` tags to create a menu.

```html
<label for="cars">Choose a car:</label>
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
</select>
```

---
[Back to Forms](./README.md) | [Next: Checkboxes and Radio Buttons](./05-checkboxes-and-radio-buttons.md)
