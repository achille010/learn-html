# Practice Exercises: HTML and CSS Bridge

Practice the connection between HTML structure and CSS styling.

## Quiz

1. Which attribute is used to apply styles directly to an individual HTML element?
   - A) `class`
   - B) `id`
   - C) `style`
   - D) `css`

2. What is the difference between a `class` and an `id`?
   - A) There is no difference.
   - B) A `class` can be used on multiple elements, while an `id` must be unique to a single element on the page.
   - C) `id`s are for styling, `class`es are for JavaScript.
   - D) Classes start with a `#`, IDs start with a `.`.

3. Which CSS selector would you use to style an element with the class "btn"?
   - A) `btn { ... }`
   - B) `#btn { ... }`
   - C) `.btn { ... }`
   - D) `*btn { ... }`

4. How do you define a custom data attribute in HTML?
   - A) `custom-attribute="value"`
   - B) `data-customname="value"`
   - C) `x-attribute="value"`
   - D) `meta-data="value"`

## Coding Challenge: The Styled Profile

Create an HTML file for a user profile.

Requirements:
- Use an `<h1>` for the user's name with a unique `id`.
- Use a `<div>` as a container for the profile information with a `class` named "profile-card".
- Inside the card, add a `<p>` tag for the bio.
- Add an `<img>` with a `class` named "avatar".
- Add a custom data attribute named `data-user-type` to the profile-card and set its value to "admin".
- Describe (in a comment) how you would select the "profile-card" in CSS and change its background color.

## Bonus Challenge

Research "CSS Specificity". If an element has both an `id` and a `class`, and both try to set the `color`, which one wins?

---
[Back to Bridge](./README.md)
