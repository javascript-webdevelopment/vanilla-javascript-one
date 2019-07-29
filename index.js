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

// .getElementById example
const headerOne = document.getElementById('headerOne');
console.dir(headerOne)



// property examples
const myList = document.getElementById('myList');

// innerText
console.log(myList.innerText)

// innerHTML
console.log(myList.innerHTML)

// className
const divOne = document.getElementById('divOne');
console.log(divOne.className);

// classList
// Add A Class
myList.classList.add('show');
// Remove A Class
myList.classList.remove('show');
// Toggle A Class
myList.classList.toggle('show');

// .getElementByTagNames example
const list = document.getElementById('myList');
const numberOfLiTags = list.getElementsByTagName('li');
console.dir(numberOfLiTags);

// .getElemetByTagNames loop example
for (let i = 0; i < numberOfLiTags.length; i++){
    console.dir(numberOfLiTags[i])
};

// change color of every other element
for (let i = 0; i < numberOfLiTags.length; i++){
    if(i % 2 === 0){
        numberOfLiTags[i].style.color = 'blue'
    };
};