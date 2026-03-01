# Canvas Element

The `<canvas>` tag is used to draw graphics on the fly via scripting (usually JavaScript).

## Basic Usage

```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
    Your browser does not support the canvas tag.
</canvas>
```

## How to draw
To draw on the canvas, you must use JavaScript.

```javascript
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);
```

## Use Cases
-   **Gaming**: Most 2D browser games use canvas.
-   **Data Visualization**: Complex charts and graphs.
-   **Image Manipulation**: Filters and crops.

---
[Back to Advanced Topics](./README.md) | [Next: SVG in Depth](./02-svg-in-depth.md)
