6. Answer the following questions clearly:
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById = getElementById returns a single value and it catch in id selector.
getElementsByClassName = getElementsByClassName returns a live HTMLCollection of all elements with that class.
querySelector / querySelectorAll = querySelector returns the first element that matches a CSS selector and querySelectorAll returns a static NodeList of all matching elements.
     
How do you create and insert a new element into the DOM?
Ans://  new element
let newDiv = document.createElement("div");

// Add content
newDiv.textContent = "Hello, I am new!";

//  the DOM
document.body.appendChild(newDiv);



What is Event Bubbling and how does it work?
Ans: Event bubbling is the process where an event starts at the target element and then moves upwards through its ancestors in the DOM.
Example: Clicking a <button> inside a <div> → the event fires on the button first, then the div, then the body, and so on.

What is Event Delegation in JavaScript? Why is it useful?
Ans:Event Delegation means attaching a single event listener to a parent element, and using it to handle events on its child elements.
It works because of event bubbling.
Benefits:
  You don’t need to attach listeners to every child element.
  It works even for dynamically added elements.
Ex:
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    alert("You clicked: " + e.target.textContent);
  }
});


What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() → Stops the default browser behavior .
     stopPropagation() → Stops the event from bubbling up  the DOM tree.
     
Ex:     
document.getElementById("myLink").addEventListener("click", (e) => {
  e.preventDefault();    // Prevents navigation
  e.stopPropagation();   // Stops bubbling
  alert("Link clicked but no navigation!");
});


