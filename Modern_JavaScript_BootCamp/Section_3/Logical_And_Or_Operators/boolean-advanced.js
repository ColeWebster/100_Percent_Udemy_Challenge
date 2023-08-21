let isAccountLocked = false;
let userRole = 'admin'

if (isAccountLocked) {
    console.log("Account is locked!")
} else {
    console.log("Welcome")
}

if (isAccountLocked) {
    console.log("Account is locked!")
} else if(userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

// Challenege Area
let temp = 48;

if (temp <= 32) {
    console.log("Its freezing outside!")
} else if (temp >= 100) {
    console.log("It is hot outside!")
} else {
    console.log("Go for it! It is pretty nice out.")
}