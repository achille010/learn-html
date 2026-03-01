# Video

The `<video>` tag is used to embed video files. It works similarly to the `<audio>` tag.

## Basic Usage

```html
<video width="640" height="360" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
```

## The `poster` Attribute
You can show an image before the video starts playing by using the `poster` attribute.

```html
<video controls poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
</video>
```

---
[Back to Images and Media](./README.md) | [Next: YouTube and iFrames](./08-youtube-and-iframes.md)
