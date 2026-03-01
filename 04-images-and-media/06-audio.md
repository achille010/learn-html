# Audio

The `<audio>` tag allows you to embed sound files into your web pages.

## Basic Usage

```html
<audio controls>
    <source src="song.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

## Key Attributes
-   **controls**: Adds play, pause, and volume buttons.
-   **autoplay**: Starts the audio immediately (use with caution).
-   **loop**: Restarts the audio when it ends.

## Using Multiple Sources
To ensure compatibility across all browsers, you can provide multiple formats:

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
</audio>
```

---
[Back to Images and Media](./README.md) | [Next: Video](./07-video.md)
