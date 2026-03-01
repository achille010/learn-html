# Form Basics

The `<form>` tag acts as a container for all your input fields.

## Key Attributes
-   **action**: The URL where the form data will be sent (usually a server).
-   **method**: How the data is sent.
    -   `GET`: Data is appended to the URL (good for searches).
    -   `POST`: Data is sent in the body of the request (good for sensitive info like passwords).

## Basic Example

```html
<form action="/submit-form" method="POST">
    <!-- Input fields will go here -->
    <button type="submit">Send</button>
</form>
```

---
[Back to Forms](./README.md) | [Next: Input Types](./02-input-types.md)
