# Drag and Drop

The HTML Drag and Drop API allows you to make elements draggable and create drop zones.

## The `draggable` Attribute
To make any element draggable, set the `draggable` attribute to `true`.

```html
<p id="drag1" draggable="true" ondragstart="drag(event)">Drag me!</p>
```

## Key Events
To make drag and drop work, you need to handle several events:
1.  **ondragstart**: Occurs when the user starts dragging.
2.  **ondragover**: Occurs when a draggable element is being dragged over a drop target.
3.  **ondrop**: Occurs when the user releases the mouse over the drop target.

---
[Back to Advanced Topics](./README.md) | [Next: Geolocation](./07-geolocation.md)
