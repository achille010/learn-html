# Data Attributes

Data attributes allow you to store extra information on standard, semantic HTML elements without using non-standard attributes.

## Syntax
A data attribute must start with `data-` followed by at least one lowercase character.

```html
<div id="user" data-id="123" data-role="admin">
    Achille
</div>
```

## How to use them
-   **In CSS**: You can target elements based on their data attributes.
-   **In JS**: You can access them easily using the `dataset` property.

```javascript
const user = document.getElementById("user");
console.log(user.dataset.role); // Output: "admin"
```

---
[Back to Bridge](./README.md) | [Next: How CSS Selects HTML](./04-how-css-selects-html.md)
