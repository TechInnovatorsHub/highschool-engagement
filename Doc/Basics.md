
# Web Development Basics

## HTML (HyperText Markup Language)

HTML is the standard markup language used to create and design the structure of web pages. It consists of a series of elements (called tags) which tell the browser how to display content.

---

### Common HTML Tags and Descriptions

| Tag | Description |
|-----|-------------|
| `<html>` | The root element of an HTML page |
| `<head>` | Contains meta-information about the document like title and linked stylesheets |
| `<title>` | Sets the title of the web page (appears in browser tab) |
| `<meta>` | Provides metadata such as character encoding, viewport settings, and SEO info |
| `<link>` | Links external resources like stylesheets |
| `<script>` | Embeds JavaScript |
| `<style>` | Embeds CSS inside the HTML |
| `<body>` | Contains the visible content of the webpage |
| `<h1>` to `<h6>` | Heading tags, from largest (`<h1>`) to smallest (`<h6>`) |
| `<p>` | Paragraph tag |
| `<a href="">` | Anchor tag used for hyperlinks |
| `<img src="" alt="">` | Embeds an image |
| `<ul>` / `<ol>` | Unordered/Ordered lists |
| `<li>` | List item |
| `<div>` | Generic container for layout and styling |
| `<span>` | Inline container, used for styling parts of text |
| `<form>` | Form container |
| `<input>` | Input fields in forms |
| `<button>` | Clickable button |
| `<br>` | Line break |
| `<hr>` | Horizontal rule (line separator) |
| `<table>` | Represents tabular data |
| `<tr>` | Table row |
| `<td>` | Table cell (data) |
| `<th>` | Table header |

---

## CSS (Cascading Style Sheets) Introduction

CSS is used to style HTML elements—defining layout, colors, fonts, spacing, and much more.

### Syntax Example

```css
selector {
  property: value;
}
```

### CSS Selectors

1. **Element Selector** – Targets all elements of a type:

    ```css
    p {
      color: blue;
    }
    ```

2. **ID Selector** – Targets a specific element with an ID:

    ```css
    #header {
      background-color: grey;
    }
    ```

3. **Class Selector** – Targets all elements with a class:

    ```css
    .highlight {
      font-weight: bold;
    }
    ```

4. **Universal Selector** – Targets all elements:

    ```css
    * {
      margin: 0;
      padding: 0;
    }
    ```

5. **Group Selector** – Targets multiple elements:

    ```css
    h1, h2, p {
      margin-bottom: 10px;
    }
    ```

6. **Descendant Selector** – Targets nested elements:

    ```css
    div p {
      color: red;
    }
    ```

---

## Basic JavaScript Events and Functionalities

JavaScript adds interactivity to web pages.

### Common Events

1. **onclick** – When an element is clicked.

    ```html
    <button onclick="alert('Hello!')">Click me</button>
    ```

2. **onmouseover** – When the mouse pointer moves over an element.
3. **onmouseout** – When the mouse pointer leaves an element.
4. **onchange** – When an input value changes.
5. **onsubmit** – When a form is submitted.
6. **onkeydown** – When a key is pressed.

### Basic JavaScript Functionalities

1. **Variables:**

    ```javascript
    let name = "John";
    const PI = 3.14;
    ```

2. **Functions:**

    ```javascript
    function greet() {
      alert("Welcome!");
    }
    ```

3. **Conditionals:**

    ```javascript
    if (age > 18) {
      console.log("Adult");
    } else {
      console.log("Minor");
    }
    ```

4. **Loops:**

    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
    ```

5. **DOM Manipulation:**

    ```javascript
    document.getElementById("myDiv").innerText = "Changed!";
    ```

---

> This guide gives a concise overview of HTML, CSS, and JavaScript basics to help beginners understand and build web pages.
