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

if (temp > 55) {
    console.log("Its hot outside")
} else if(temp < 45) {
    console.log("Its freezing outside")
} else {
    console.log("Go for it! It is pretty nice!")
}
