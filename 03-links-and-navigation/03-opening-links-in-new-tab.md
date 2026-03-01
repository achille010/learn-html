# Opening Links in a New Tab

By default, links open in the current tab. To change this, use the `target` attribute.

## Using `target="_blank"`
To open a link in a new tab, use `target="_blank"`.

```html
<a href="https://github.com" target="_blank">View GitHub Profile</a>
```

## Security Note
For security reasons, when using `_blank`, you should also add `rel="noopener noreferrer"`. This prevents the new page from accessing the window that opened it.

```html
<a href="https://github.com" target="_blank" rel="noopener noreferrer">View GitHub Profile</a>
```

---
[Back to Links and Navigation](./README.md) | [Next: Linking to Page Sections](./04-linking-to-page-sections.md)
