# Linking to Page Sections

You can create links that jump to a specific part of the *same* page or a specific part of a *different* page by using IDs.

## Step 1: Assign an ID
First, give the element you want to link to a unique `id`.

```html
<h2 id="contact-info">Contact Information</h2>
<p>Here is how to find us...</p>
```

## Step 2: Link to that ID
Use the `#` symbol followed by the ID in your `href`.

```html
<a href="#contact-info">Jump to Contact</a>
```

## Linking to a Section on Another Page
```html
<a href="about.html#team">Meet our Team</a>
```

---
[Back to Links and Navigation](./README.md) | [Next: Email and Phone Links](./05-email-and-phone-links.md)
