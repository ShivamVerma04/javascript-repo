const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to this website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }


// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ({username: "shivam"})


console.log(addTwo(3, 4));
