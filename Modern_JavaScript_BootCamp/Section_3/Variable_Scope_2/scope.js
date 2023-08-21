// Global (name)
    // Local (name)
        // Local 
    //  LocaL 

let name = 'Cole'

if (true) {
    let name = 'Mike'

    if (true) {
        name = "Zach"
        console.log(name)
    }
}
// Known as variable shadowing. Hiding the parent value scope. Why Mike will print

if (true) {
    console.log(name)
}
// Prints Cole because the scope of the global variable is being accessed with no shadowing.

// If the variable 'name' is never defined globally and these blocks run, its called a leaked variable and would print Zach twice