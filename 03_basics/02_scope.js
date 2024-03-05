let a = 10
const b = 20
var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "shivam"

    function two(){
        const website = "youtube"
        console.log(username);
    }    
    // console.log(website);
    two()
}
// one()

if(true) {
    const username = "shivam"
    if(username === "shivam"){
        const website = " youtube"
        // console.log (username + website);
    }
    // console.log(website);
}
// console.log(username);

// =================intresting===============
console.log(addone(5));
function addone(num){
    return num + 1
}



const addTwo = function add(num){
    return num + 1
}
addTwo(8)