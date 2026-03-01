# Fieldset and Legend

When you have a large form, it's helpful to group related fields together.

## The Tags
-   `<fieldset>`: Groups related elements in a form.
-   `<legend>`: Defines a caption for the `<fieldset>` element.

## Example

```html
<fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname">
</fieldset>
```

---
[Back to Forms](./README.md) | [Next: Datalist](./09-datalist.md)
