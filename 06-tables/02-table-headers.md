# Table Headers

To make your data easy to read, you should use header cells for labels.

## The `<th>` Tag
Use `<th>` instead of `<td>` for header cells. By default, browsers display `<th>` text in **bold** and **centered**.

## Example

```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Job</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>25</td>
        <td>Designer</td>
    </tr>
</table>
```

## The `scope` Attribute
For better accessibility, you can specify if a header is for a row or a column:
-   `<th scope="col">`: Header for a column.
-   `<th scope="row">`: Header for a row.

---
[Back to Tables](./README.md) | [Next: Spanning Rows and Columns](./03-spanning-rows-and-columns.md)
