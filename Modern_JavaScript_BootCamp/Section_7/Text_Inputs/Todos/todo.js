const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

/*
const ps = document.querySelectorAll('p');
ps.forEach(function (p){
    // p.remove();
    // console.log(p.textContent);
    p.textContent = '******';
})

const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new JavaScript element';
document.querySelector('body').appendChild(newParagraph);
*/

// You have 2 todos left (p element)
const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary);

// Add a p element above (use text value)
todos.forEach(function (todo) {
    const p = document.createElement('p');
    p.textContent = todo.text
    document.querySelector('body').appendChild(p);
})

document.querySelector('button').addEventListener('click', function(e){
    console.log("The button was clicked")
})

// document.querySelector('#search-text').addEventListener('change' , function(e) {
//     console.log(e.target.value);
// })

document.querySelector('#search-text').addEventListener('input' , function(e) {
     console.log(e.target.value);
})
// 'input' vs 'change' = input is tracking the changes made while typing and the change tracks when you are done in that specific area

document.querySelector('#new-todo').addEventListener('input', function(f) {
    console.log(f.target.value);
})