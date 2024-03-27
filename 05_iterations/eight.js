const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce ( (acc, currval) => acc+currval, 0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "jscourse",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "swift",
        price: 1599
    },
    {
        itemName: "dsa",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) =>acc + item.price, 0)

console.log(priceToPay);