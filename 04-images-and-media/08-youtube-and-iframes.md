# YouTube and iFrames

An `<iframe>` (Inline Frame) is used to display a web page within a web page. This is the primary way to embed YouTube videos.

## Embedding YouTube

```html
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        frameborder="0" allowfullscreen>
</iframe>
```

## Key Considerations
1.  **Security**: Use the `sandbox` attribute to restrict what the iframe can do.
2.  **Responsiveness**: iFrames are not responsive by default and often require CSS hacks to look good on mobile.
3.  **Third-Party Content**: Only embed content from sources you trust.

---
[Back to Images and Media](./README.md) | [Next: SVG Basics](./09-svg-basics.md)
