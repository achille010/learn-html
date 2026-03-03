# Practice Exercises: Tables

Practice building structured, accessible tables for data representation.

## Quiz

1. Which tag is used as the container for an entire row in a table?
   - A) `<table>`
   - B) `<td>`
   - C) `<tr>`
   - D) `<th>`

2. What is the difference between `<td>` and `<th>`?
   - A) `<td>` is for data cells, while `<th>` is for header cells (bold and centered by default).
   - B) `<th>` is only for the first row.
   - C) `<td>` used for images, `<th>` for text.
   - D) There is no difference.

3. Which attribute allows a single table cell to span across multiple columns?
   - A) `rowspan`
   - B) `colspan`
   - C) `span`
   - D) `width`

4. Why should you avoid using tables for page layouts?
   - A) Tables are too slow to load.
   - B) Tables are not accessible to screen readers and difficult to make responsive.
   - C) CSS cannot style tables.
   - D) Browsers are deprecating the `<table>` tag.

## Coding Challenge: Creating a Schedule

Create an HTML table that represents a weekly class schedule.

Requirements:
- Use `<thead>`, `<tbody>`, and `<tfoot>`.
- The first row (`<thead>`) should have headers for "Time", "Monday", "Tuesday", "Wednesday", "Thursday", and "Friday".
- Use `rowspan` if a class lasts for two time slots.
- Use `colspan` if a specific event (like "Lunch") spans multiple days.
- Add a `<caption>` to describe the table.

## Bonus Challenge

Research the `scope` attribute for `<th>` tags. How does it improve accessibility for complex tables?

---
[Back to Tables](./README.md)
