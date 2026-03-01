# Service Workers Intro

A **Service Worker** is a script that your browser runs in the background, separate from a web page.

## Key Features
1.  **Offline Support**: They can cache assets so your site works without an internet connection.
2.  **Push Notifications**: They allow your site to send notifications even when the browser is closed.
3.  **Background Sync**: They can defer actions until the user has a stable internet connection.

## How to Register
You register a service worker using JavaScript in your main HTML file.

```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('ServiceWorker registration successful!');
  });
}
```

---
[Back to Advanced Topics](./README.md) | [Next: Progressive Enhancement](./10-progressive-enhancement.md)
