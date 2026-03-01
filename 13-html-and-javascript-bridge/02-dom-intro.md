# DOM Intro

The **DOM** stands for **Document Object Model**. It is a tree-like representation of your HTML page.

## How it works
When the browser loads your HTML, it creates a DOM. JavaScript can then "talk" to the DOM to change content, styles, or even add new elements!

## Example Tree Structure
```
Window
└── Document
    └── <html>
        ├── <head>
        │   └── <title>My Site</title>
        └── <body>
            ├── <header>...</header>
            └── <main>...</main>
```

## Selecting Elements in JS
```javascript
const myHeader = document.querySelector("h1");
myHeader.textContent = "New Title Changed by JS!";
```

---
[Back to Bridge](./README.md) | [Next: Event Attributes](./03-event-attributes.md)
