### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---
Answer to the question no 1:
Ans:'getElementById' select a element by id name, 'getElementsByClassName' select all elements bty specific class name , 'querySelector' select the first elements matched class, 'querySelectorAll' select all elements that match class. basically id is used one times and unique id name but class use one to many times. This sclector are all perform for daynamice an element, change, cut, join, etc.

Answer to the question no 2:
Ans: First, we create the element using document.createElement() then we create a div, or tags, or elements what ever we want we make it by usising html, css, etc. Then we place the element where we want.

Answer to the question no 3:
Ans: When an event (like a click) happens on an element, that event doesn’t just stay on that element it starts at the target element and then “bubbles up” to its parent, then the parent’s parent, until it reatches the document (the top of the DOM tree). its works The click event first trirgers on the button (the target).Then it bubbles up to the parent div.Then it bubbles up again to the body.Finally, it can reach document and even window.

Answer to the question no 4:
Ans: Event Delegation is a technique in JavaScript where instead of attaching an event listener to multiple child elements, we  attach a single event listener to a parent element, and let events bubble up from the children to the parent.The parent then checks which child triggered the event and handles it. Its very usefull beacuse performance is so goods, daynamic elements, clean code.

Answer to the question no 5:
Ans:preventDefault() stops the default action of an element from happening and stopPropagation() stops the event from bubbling (or capturing) further up or down the DOM tree.