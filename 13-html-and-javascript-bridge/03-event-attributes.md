# Event Attributes

Event attributes are a way to "listen" for user interactions and respond with JavaScript.

## Common Events
-   **onclick**: Occurs when an element is clicked.
-   **onmouseover**: Occurs when the mouse pointer is moved onto an element.
-   **onkeydown**: Occurs when a user presses a key.
-   **onload**: Occurs when the page (or an image) has finished loading.

## Example

```html
<button onclick="alert('Button clicked!')">Click Me!</button>

<input type="text" onchange="console.log('Input changed!')">
```

> [!NOTE]
> Modern practice is to use `addEventListener` in JavaScript instead of writing inline `onclick` attributes.

---
[Back to Bridge](./README.md) | [Next: Async and Defer](./04-async-and-defer.md)
