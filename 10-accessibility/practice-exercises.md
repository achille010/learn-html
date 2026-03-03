# Practice Exercises: Accessibility

Test your knowledge of web accessibility (a11y) and the standards that make the web usable for everyone.

## Quiz

1. What does the acronym "ARIA" stand for?
   - A) Accessible Rich Internet Applications
   - B) Advanced Responsive Interface Architecture
   - C) Automated Reading Information Alert
   - D) Accessible Resource Interaction API

2. Which of the following is the most important "POUR" principle?
   - A) Perceivable
   - B) Operable
   - C) Understandable
   - D) Robust
   - E) All of them are equally important and interdependent.

3. Which attribute should you use to provide a hidden text label for an icon-only button that screen readers will announce?
   - A) `aria-hidden="true"`
   - B) `alt="button"`
   - C) `aria-label="Description of action"`
   - D) `title="Hover text"`

4. What is the standard target level for web accessibility conformance for most organizations and local laws?
   - A) Level A
   - B) Level AA
   - C) Level AAA
   - D) Level B

## Coding Challenge: Auditing and Fixing a Page

Imagine you have the following HTML (don't write this, just analyze it):
```html
<div class="header">Welcome to my site</div>
<div class="search-btn" onclick="search()">Search</div>
<img src="logo.png">
```

**Task**: Rewrite this segment in your exercise file to be fully accessible.
Requirements:
- Use semantic tags instead of `div`s.
- Make the search button keyboard-operable (not just a `div` with a click handler).
- Add an `alt` attribute to the image.
- Add an `aria-label` to the button if the text "Search" wasn't already there.

## Bonus Challenge

Research the `aria-live` attribute. How can you use it to announce dynamic content changes (like a notification or a timer) to screen reader users?

---
[Back to Accessibility](./README.md)
