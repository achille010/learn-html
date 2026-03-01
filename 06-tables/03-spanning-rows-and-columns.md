# Spanning Rows and Columns

Sometimes a single cell needs to take up the space of multiple rows or columns.

## `colspan` (Column Span)
Extends a cell horizontally across multiple columns.

```html
<tr>
    <th colspan="2">Double Column Header</th>
</tr>
```

## `rowspan` (Row Span)
Extends a cell vertically across multiple rows.

```html
<tr>
    <td rowspan="2">This cell spans two rows</td>
    <td>Normal Cell</td>
</tr>
<tr>
    <td>Normal Cell</td>
</tr>
```

---
[Back to Tables](./README.md) | [Next: thead, tbody, tfoot](./04-thead-tbody-tfoot.md)
