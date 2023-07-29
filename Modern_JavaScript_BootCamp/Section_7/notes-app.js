// console.log("testing the link to external JS")
// console.log("Updated")

// DOM = Document Object Model

// Query and remove
// const p = document.querySelector('p');
// p.remove();

// Query all and remove
const ps = document.querySelectorAll('p');
ps.forEach(function (p){
    // p.remove();
    // console.log(p.textContent);
    // p.textContent = '******';
})

/* 
p.remove removes all p tags from the query selector
p.textContent = console logging all p tags
p.textContent = changing all p tags to the string include
*/ 