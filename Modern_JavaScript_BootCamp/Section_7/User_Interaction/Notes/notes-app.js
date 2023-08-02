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
document.querySelector('button').addEventListener('click', function(e) {
    e.target.textContent = 'The button was clicked'
});