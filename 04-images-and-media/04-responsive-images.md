# Responsive Images

Different devices have different screen sizes and resolutions. Serving a massive image to a small phone is a waste of data.

## Using `srcset`
The `srcset` attribute allows you to provide a list of images at different sizes.

```html
<img src="small.jpg" 
     srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w" 
     sizes="(max-width: 600px) 480px, 800px"
     alt="A beautiful landscape">
```

## How it works
The browser looks at the `srcset` and the current screen size, then chooses the best image automatically. This makes your site much faster on mobile devices!

---
[Back to Images and Media](./README.md) | [Next: Figure and Figcaption](./05-figure-and-figcaption.md)
