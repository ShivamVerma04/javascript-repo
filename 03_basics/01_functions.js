

function sayMyName(){
    console.log("S");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("m");
    console.log(" ");
    console.log("V");
    console.log("e");
    console.log("r");
    console.log("m");
    console.log("a");
}

// sayMyName()
// function addTwoNumber(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}


const result = addTwoNumber(3, 7)

// console.log("Result:", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`
}
// console.log(loginUserMessage("Shivam"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Shivam",
    price: 99
}

function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})