// Show the alert function
alert('Hello world!');

// Show the window object
console.log(window);

// Show the document object
console.dir(document);

// Function that fires on button click
function btnClick(){
    alert('The button has been clicked');
};


// .getElementByTagNames example
const list = document.getElementById('myList');
const numberOfLiTags = list.getElementsByTagName('li').length;
console.log(numberOfLiTags)