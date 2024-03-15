//if
const isUserLoggedIn = true
const temperature = 55

// if ( temperature === 41){
// console.log("less then 50");
// }else{
//     console.log("Temperature is greater than 50")
// }

// console.log("Execute")
// <, >, <=, >=, ==, !=, ===

const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user ki power hai: ${power}`);
// }
// console.log(`user ki power hai: ${power}`);

const balance = 650

// if (balance > 500) console.log("test"), console.log("test 2")

// if (balance < 500){
//     console.log("less then 500");
// }else if(balance < 750){
//     console.log("less then 750");
// }else if(balance < 900){
//     console.log("less then 900");
// }else {
//     console.log("More then 900");
// }

 const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}