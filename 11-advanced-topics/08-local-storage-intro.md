# Local Storage Intro

HTML5 introduced "web storage," which allows web applications to store data locally within the user's browser.

## Two Types of Storage
1.  **localStorage**: Stores data with **no expiration date**. The data will persist even if the browser is closed and reopened.
2.  **sessionStorage**: Stores data for **one session only**. The data is deleted when the user closes the tab.

## Basic Usage

```javascript
// Save data
localStorage.setItem("username", "Achille");

// Read data
var user = localStorage.getItem("username");

// Remove data
localStorage.removeItem("username");
```

---
[Back to Advanced Topics](./README.md) | [Next: Service Workers Intro](./09-service-workers-intro.md)
