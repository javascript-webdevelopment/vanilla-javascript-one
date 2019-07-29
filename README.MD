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


### Console Dir

`console.dir()` - this will display an interactive list of the properties from the specified object.

```javascript
console.dir(window); // result: a list of window props and values
```

## Window Object

The `window object` is the object that represents an open window in the browser. We can use this object to interact with our browser window and get any data from it that we need or any make any changes that we need. It's import to note the the `window object` is the global object that our code will live in, inside a broswer environment.

We can access the object by referencing `window`.

```javascript
console.log(window); // result: logs the window object
```

## DOM

DOM is the acronym we use for `Document Object Model`. The DOM is an object representation or blueprint for our web pages structure and content. We can interact with the DOM to manipulate our web page to change how our HTML elements are being displayed, how they are interacted with, change content, etc.

It's easy to think of the DOM as a tree. Each element that exists on the DOM is known as a `node`. We can target these nodes with Javascript to create functionality within our page.

![DOM TREE](images/domtree.png)

## Interacting With The DOM

We can interact with the DOM by accessing the `document` object. The document object represents the DOM tree and it is used as an entry point to interacting the the DOM. The DOM tree includes elements such as `<body>`, `<input>`, `button`, and many others. Using the `document` object, we can add event listeners and capture node values.

### Accessing Elements

There are many built in methods from the `document` object that we can use to access specific elements from the DOM.

`.getElementById` - This method will return an element that has the a matching id to the one we pass in as an argument.

```html
<button id="myBtn">My Button</button>
```
```javascript
const myBtn = document.getElementById(`btn`);
```

`.getElementByTagNames` - This method will return a collection of the element's child elements with a specifide tagname as a NodeList object. The NodeList object is a collection of nodes. These nodes can be accessed by index numbers starting at 0. Just like an array.

> tip: you can use the `.length` property to determine how many child nodes there are
>tip: the '*' parameter value will return all child nodes

```html
<ul id="myList">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
```

```javascript
const list = document.getElementById('myList');

const numberOfLiTags = list.getElementsByTagName('li')

console.log(numberOfLiTags); //result: an HTMLcollection containing the `li` tags
```

`.querySelector` - this returns the first element in our document that matches the specified selector. Here we can use selecters to find an element just like CSS.

```html
<ul id="myList" class="list">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
```

```javascript
// element
const myList = document.querySelector('ul');

// id
const myList = document.querySelector('#myList');

// class
const myList = document.querySelector('.myList');
```

`.querySelectorAll` - this works just like querySelector, however this will return a NodeList with all of the matching elements with the specified selector.

```html
<ul id="myList" class="list">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
```

```javascript
const listItems = document.querySelector('li');
```

### Node Properties

Each node has a set of properties that we can interact with to perform certain actions.

`innerText` - This will return all of the text content inside of an element and avoid returning any html elements.

```html
<ul id="myList">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
```

```javascript
const myList = document.getElementById('myList');

console.log(myList.innerText);
```

`innerHTML` - The innerHTML property sets or returns the HTML content (inner HTML) of an element.

```html
<ul id="myList">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
```

```javascript
const myList = document.getElementById('myList');

console.log(myList.innerHTML);
```

`className` - this will get or set the value for the elements class

```html
<div class="divOne" id="divOne">
</div>
```

```javascript
const divOne = document.getElementById('divOne');

console.log(divOne.className);
```

`classList` - this is the object that we can use to remove or add classes to an element

```html
<ul class="list" id="myList">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
```

```javascript
const myList = document.getElementById('myList');

// Add A Class
myList.classList.add('show');

// Remove A Class
myList.classList.remove('show');

// Toggle A Class
myList.classList.toggle('show');
```

We can also use `.toggle()` and this will determine if the class already exists, if it does remove it, if not then add it

`style` - this is the object we can use to adjust a style property on an element

```html
<ul class="list" id="myList">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
```

```javascript
const myList = document.getElementById('myList');

myList.style.background = 'red';
```

`value` - on input elements we can use the value property to access what has been typed into the input box

```html
<input type="text" id="myInput">
```

```javascript
const myInput = document.getElementById('myInput');
console.log(myInput.value)
```

### Events and Event Handlers

Events are 'things' that happen in our html file. We can add event handlers to our html elements to start some logic when a specific event happens.

Syntax:
```html
<tagname event="js to happen">content</tagname>
```

We first have the event attribute, this could such events as `onclick`, `onmouseover`, `onmouseleave`, etc. After we will put our javascript logic inside of quotes.


Better Example:
```html
<button onclick="submit()">Submit</button>
```

```javascript
function submit(){
    alert('Post has been submitted!');
}
```

### Add Event Listener

We can use `.addEventListener()` to add a specific event to an element and a provide it an event handler function to fire when the event occurs for the element.

```html
<button id="myButton">Submit</button>
```

```javascript
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function(){
    console.log('button was clicked')
})
```

Notice how we first capture the element then add the event listener. The first argument to the event listener function is the event, this will always be a string. Then we have the event handler function that will execute when the event happens.