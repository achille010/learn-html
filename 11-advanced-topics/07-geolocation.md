# Geolocation

The HTML Geolocation API is used to locate the user's position.

## Privacy Warning
This API will **not** work unless the user explicitly gives permission to share their location.

## How to use it
You use the `navigator.geolocation` object in JavaScript to get the coordinates.

```javascript
navigator.geolocation.getCurrentPosition(function(position) {
  console.log("Latitude:", position.coords.latitude);
  console.log("Longitude:", position.coords.longitude);
}, function(error) {
  console.error("Error Code:", error.code, "Message:", error.message);
});
```

---
[Back to Advanced Topics](./README.md) | [Next: Local Storage Intro](./08-local-storage-intro.md)
