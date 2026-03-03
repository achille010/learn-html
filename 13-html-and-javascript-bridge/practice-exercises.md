# Practice Exercises: HTML and JavaScript Bridge

Practice how to connect HTML structure with JavaScript behavior and optimize page performance.

## Quiz

1. Which tag is used to embed or link to JavaScript in an HTML document?
   - A) `<js>`
   - B) `<script>`
   - C) `<code`
   - D) `<behavior>`

2. What does DOM stand for?
   - A) Digital Object Model
   - B) Document Object Model
   - C) Data Object Management
   - D) Dynamic Oriental Markup

3. Which attribute allows you to run a JavaScript function when a user clicks an element?
   - A) `onclick`
   - B) `click`
   - C) `onpress`
   - D) `select`

4. Which script loading attribute is considered "Best Practice" because it executes scripts in order after the HTML is fully parsed?
   - A) `async`
   - B) `defer`
   - C) `load`
   - D) `wait`

## Coding Challenge: The Interactive Counter

Create an HTML file for a simple counter.

Requirements:
- Use an `<h1>` to display the number "0" with an `id` of "counter-display".
- Create two buttons: "Increase" and "Decrease". 
- Add `onclick` attributes to both buttons that call functions named `increaseCount()` and `decreaseCount()`.
- Add a `<script>` tag at the bottom (before `</body>`) that defines these functions (just describe the logic in a comment within the HTML if you aren't writing JS yet).
- Use the `defer` attribute on your script if it's an external file.

## Bonus Challenge

Research the `DOMContentLoaded` event. Why is it often safer to wrap your JavaScript code inside an event listener for `DOMContentLoaded`?

---
[Back to Bridge](./README.md)
