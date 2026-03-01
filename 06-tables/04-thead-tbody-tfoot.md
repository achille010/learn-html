# thead, tbody, tfoot

For larger tables, it's best to group your rows into three sections: Header, Body, and Footer.

## The Tags
-   `<thead>`: The header section.
-   `<tbody>`: The main content of the table.
-   `<tfoot>`: The summary or footer of the table.

## Example

```html
<table border="1">
    <thead>
        <tr>
            <th>Month</th>
            <th>Savings</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>January</td>
            <td>$100</td>
        </tr>
        <tr>
            <td>February</td>
            <td>$80</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>$180</td>
        </tr>
    </tfoot>
</table>
```

---
[Back to Tables](./README.md) | [Next: Accessible Tables](./05-accessible-tables.md)
