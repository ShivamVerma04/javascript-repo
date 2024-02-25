//singleton
// Object.create

//Object literals

const mySym = Symbol("key")

const jsuser = {
    name: "Spongebob",
    "full name": "Spongebob Squarepants",
    [mySym]: "myKey1",
    age: 18,
    location: "under the sea",
    email: "spongebob@squarepants.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

jsuser.email = "Spongebob@patrick.com"
// Object.freeze(jsuser)
jsuser.email = "Spongebob@crabby.com"

// console.log(jsuser.email)

jsuser.greeting = function(){
    console.log("Hello JS USer");
}

jsuser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());