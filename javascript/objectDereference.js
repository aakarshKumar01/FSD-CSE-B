const obj = {
    Name : "Aakarsh Kumar",
    Branch : "CSE",
    "Rool" : 2
}

// const {Name , Branch, Rool} = obj
// console.log(Name)
// console.log(Branch)
// console.log(Rool)


const {Name,...rest} = obj

console.log(Name)
console.log(rest)

// if we want to copy all the element of one array into another array

const arr1 = [1,2]
const arr2 = [3,4,5]

const newArr = [...arr1,...arr2]
console.log(newArr)