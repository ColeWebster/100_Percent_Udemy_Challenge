let temp = 65;

// Logical AND operator
// True is both sides are true, False otherwise
if (temp >= 60 && temp <= 90) {
    console.log("It is really nice out!")
}

// Logical OR operator
// True if at least one side is true. False otherwise
if (temp <= 0 || temp >= 115) {
    console.log("It is dangerous to go outside")
}

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan === true && isGuestTwoVegan === true) {
    console.log("Here is the vegan menu")
} else if (isGuestOneVegan === true || isGuestTwoVegan != false) {
    console.log("Here are some vegan options on the menu")
} else {
    console.log("Here is the full menu")
}