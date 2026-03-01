# Focus Management

Focus management is about controlling which element is currently "active" and ready for interacton.

## The `tabindex` Attribute
You can change an element's play in the tab order using `tabindex`.

-   **`tabindex="0"`**: Makes any element reachable via the Tab key in its normal document order.
-   **`tabindex="-1"`**: Prevents an element from being reached via Tab, but still allows it to be focused using JavaScript.

```html
<!-- Making a non-interactive element focusable -->
<div tabindex="0">I am now focusable via keyboard!</div>
```

## Managing Focus
When a modal (pop-up window) opens, you should move the user's focus inside the modal and prevent them from tabbing away until the modal is closed.

---
[Back to Accessibility](./README.md) | [Next: Screen Reader Testing](./07-screen-reader-testing.md)
