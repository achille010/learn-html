# Checkboxes and Radio Buttons

These are used when you want the user to pick from a list of options.

## Checkboxes
Allow the user to select **multiple** options.

```html
<input type="checkbox" id="fruit1" name="fruit" value="apple">
<label for="fruit1"> I like apples</label><br>
<input type="checkbox" id="fruit2" name="fruit" value="banana">
<label for="fruit2"> I like bananas</label>
```

## Radio Buttons
Allow the user to select **only one** option from a group. To group them, give them the **same `name`**.

```html
<p>Gender:</p>
<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label><br>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label>
```

---
[Back to Forms](./README.md) | [Next: Buttons](./06-buttons.md)
