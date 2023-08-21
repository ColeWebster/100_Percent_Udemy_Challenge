// console.log("testing the link to external JS")
// console.log("Updated")
const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]
// DOM = Document Object Model

// Query and remove
// const p = document.querySelector('p');
// p.remove();

// Query all and remove
const ps = document.querySelectorAll('p');
ps.forEach(function (p){
    // p.remove();
    // console.log(p.textContent);
    p.textContent = '******';
})

/* 
p.remove removes all p tags from the query selector
p.textContent = console logging all p tags
p.textContent = changing all p tags to the string include
*/ 

// Add a new Element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new JavaScript element';
document.querySelector('body').appendChild(newParagraph);