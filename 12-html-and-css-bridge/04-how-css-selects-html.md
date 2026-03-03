# How CSS Selects HTML

CSS (Cascading Style Sheets) uses "selectors" to pick which HTML elements to style.

## Basic Selectors

1.  **Tag Selector**: Styles all elements of a certain type.
    ```css
    p { color: red; }
    ```
2.  **Class Selector**: Styles all elements with a specific class. (Starts with a `.`)
    ```css
    .highlight { background-color: yellow; }
    ```
3.  **ID Selector**: Styles the unique element with a specific ID. (Starts with a `#`)
    ```css
    #main-header { font-size: 32px; }
    ```

## Combined Selectors
You can combine selectors for more precision.
```css
article h2 { color: blue; } /* Selects H2 tags inside Articles */
```

---
[Back to Bridge](./README.md) | [Practice Exercises](./practice-exercises.md) | [Next Module: HTML and JavaScript Bridge](../13-html-and-javascript-bridge/README.md)
