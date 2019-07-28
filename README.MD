# Vanilla Javascript One

In this lesson, we go over how to interact with the DOM using javascript.

## Adding Javascript To HTML

There are two ways we can go about adding javascript to our HTML file.

### Same File
 We can add javascript to our same HTML file by using the `<script>` tag. Anything in between the script tag will be read as javascript. It's best practice to put this script tag at the bottom of our body tag.

```html
<body>
    <header>
        <h1>Header Title</h1>
    </header>

    <!-- Put the script tag at the bottom of the body tag -->
    <script>
        const name = 'Tayte'

        console.log(name); // result: 'Tayte'
    </script>
</body>
```

### External File

We can also create another `.js` file to house all of our javascript. We just need to create another file that ends with the extension `.js` so our editors will know it is a javascript file. We will still be including a `<style>` tag, however we will not be putting our scripts inside of the tag. We will use the `src` attribute to connect the files. For the value of the `src` attribute, we will provide the path to the file.

Html File:
```html
<body>
    <header>
        <h1>Header Title</h1>
    </header>

    <!-- Put the script tag at the bottom of the body tag -->
    <script src="script.js"></script>
</body>
```

Javascript File:
```javascript
    const name = 'Tayte'

    console.log(name); // result: 'Tayte'
```

## Displaying Information

In javascript there are a couple built in functions that we can use to display information to us while in the development process.

### Console Log

`console.log()` - This is the function we can use to log data to our dev console to help make developing a little easier to see exactly what data we have.

```javascript
const myName = 'Tayte';

console.log(myName) // result: 'Tayte'
```
### Alert

`alert()` - This is the function we can use in web browsers to display a popup message or an alert to the user

```javascript
const myName = 'Tayte'

alert(myName) // result: a popup message in the browser would appear displaying the string of 'Tayte'
```

## Window Object



## DOM

DOM is the acronym we use for `Document Object Model`. The DOM is an object representation or blueprint for our web pages structure and content. We can interact with the DOM to manipulate our web page to change how our HTML elements are being displayed, how they are interacted with, change content, etc.

It's easy to think of the DOM as a tree. Each element that exists on the DOM is known as a `node`. We can target these nodes with Javascript to create functionality within our page.

![DOM TREE](images/domtree.png)