const userEmail = "h@hitesh.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}

// falsy values

// false,0,-0, BigInt, "", null, undefined, NaN

// truthy values

// "0", "false", " ", [], {}, funtion(){}

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more than 80");