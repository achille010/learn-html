# Relative vs. Absolute URLs

Understanding the difference between relative and absolute paths is crucial for linking files correctly.

## Absolute URLs
An absolute URL contains the complete address of a resource, including the protocol (http/https).
**Use cases**: Linking to external websites.

```html
<a href="https://www.google.com">Google</a>
```

## Relative URLs
A relative URL points to a file in relation to the *current* page.
**Use cases**: Linking to other pages on your own site.

-   `page.html`: Linking to a file in the **same folder**.
-   `folder/page.html`: Linking to a file in a **subdirectory**.
-   `../page.html`: Linking to a file in the **parent folder**.

---
[Back to Links and Navigation](./README.md) | [Next: Opening Links in a New Tab](./03-opening-links-in-new-tab.md)
