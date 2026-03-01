# Async and Defer

The `async` and `defer` attributes tell the browser how to load and execute your JavaScript files without blocking the rendering of your HTML.

## Comparison

| Attribute | Behavior | Order |
| :--- | :--- | :--- |
| **Normal** | Stops HTML parsing, loads script, executes, then continues HTML. | Sequential |
| **async** | Loads script in background, then stops HTML to execute. | "First come, first served" |
| **defer** | Loads script in background, then executes **only after** HTML is finished. | Follows HTML order |

## When to use what?
-   **Normal**: Small scripts that must run immediately.
-   **async**: Independent scripts (like ads or analytics) that don't depend on other code.
-   **defer**: **Best Practice** for most applications. It ensures your scripts run in the right order and don't slow down the page.

---
[Back to Bridge](./README.md) | [Next Module: Projects](../14-projects/README.md)
