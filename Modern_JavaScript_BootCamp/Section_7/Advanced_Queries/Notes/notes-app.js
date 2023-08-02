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

// Add an Event Handler
document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'The button was clicked'
});

document.querySelector('#remove-all').addEventListener('click', function() {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove();
    })
})

// . for a class and # for an id when selecting.
