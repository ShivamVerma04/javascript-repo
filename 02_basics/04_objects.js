// const tinderUser = new Object() /Singleton object

const tinderUser = {} //Non Singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
      email: "some@gmail.com",
      fullname: {
        userFullName:{
            firstName: "Shivam",
            lastName: "Verma"
        }
      }
}

// console.log(regularUser.fullname.userFullName);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
const obj4 = {5: "c", 6:"d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

