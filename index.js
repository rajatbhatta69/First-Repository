// const now = new Date();
// console.log(now.toLocaleTimeString())

// let array1 = ["Rajat", "Bishesh"]
// let array2 = ["Rijan", "Rajat"]
// const newArray = array1.concat(array2)
// console.log(newArray)


// const student = {
//     name: "Rajat Bhatta",
//     age: 17,
//     address: "Raniban"
// }

// const {name: studentName} = student;
// console.log(`The name is ${studentName}`)


// map = new Map()
// map.set('name', 'Rajat')
// map.set('Grade', 12)
// // console.log(map.get('name'))

// for (const [key, value] of map) {
//     console.log(key, value)
    
// }



// const myObject = {
//     'Name': 'Rajat Bhatta'
// }

// for (const [key, value] of myObject) {
//     console.log(key)
    
// }

// const myObject = {
//     'Name': 'Rajat Bhatta',
//     'Grade': 12,
//     'Section': 'MB2'
// }

// for (const key in myObject) {
//     console.log(`The ${key} is ${myObject[key]}`)
    
// }


// const arr = ['Rajat', 'Bishesh', 'Rijan']
// arr.forEach( function(item){
    // console.log(item)
// })

// const arr = ['Rajat', 'Bishesh', 'Rijan']

// function printMe(item){
//     console.log(item);
// }

// arr.forEach(printMe)


// const arr = [
//     {
//         studentName: 'Rajat Bhatta',
//         studentId: '31729'
//     },
//     {
//         studentName: 'Saksham Manandhar',
//         studentId: '31729'
//     },
//     {
//         studentName: 'Appeal Paudel',
//         studentId: '31729'
//     }
// ]

// arr.forEach(function (item, index){
//     console.log(`Data No. ${index + 1}`)
//     for (const key in item) {
//         console.log(`${key} : ${item[key]}`)
//     }
// })


//books: Array that stores the books detail obtained from the database
// const books = [
//     {
//         name: 'Book 1',
//         genre: 'Fiction',
//         price: 'Rs 2000'
//     },
//     {
//         name: 'Book 2',
//         genre: 'Romantic',
//         price: 'Rs 3000'
//     },
//     {
//         name: 'Book 3',
//         genre: 'Sci-Fi',
//         price: 'Rs 2300'
//     },
//     {
//         name: 'Book 4',
//         genre: 'Fiction',
//         price: 'Rs 1000'
//     }
// ]

// //userBooks: Array of books that the user wants
// const userBooks = []


// books.forEach( function(bookObject, index){ //bookObject: Object thats extracted from the 'books' array
//     //for (const key in bookObject) {
//         if (bookObject.genre === "Fiction"){
//             //console.log(`${key}: ${bookObject[key]}`)
//             userBooks.push(bookObject);

//         }
//   //  }
// } )

// console.log(userBooks)

// const books = [
//     {
//         name: 'Book 1',
//         genre: 'Fiction',
//         price: 'Rs 2000'
//     },
//     {
//         name: 'Book 2',
//         genre: 'Romantic',
//         price: 'Rs 3000'
//     },
//     {
//         name: 'Book 3',
//         genre: 'Sci-Fi',
//         price: 'Rs 2300'
//     },
//     {
//         name: 'Book 4',
//         genre: 'Fiction',
//         price: 'Rs 1000'
//     }
// ]

// const userBooks = books.map( function(book){
//     if (book.genre === "Fiction"){
//         return book;
//     }
// }).filter( (book) => book )

// console.log(userBooks)


// const arr = [1, 2, 3, 4, 5]

// const sum = arr.reduce(function(accumulator, currentValue){
//     console.log(accumulator)
//     return accumulator + currentValue;

// }, 0)

// console.log(`Sum is: ${sum}`)

const courses = [
    {
        name: 'JS course',
        price: 2999
    },
    {
        name: 'Python course',
        price: 4999
    },
    {
        name: 'Java course',
        price: 299
    }
]

const priceArray = []
courses.forEach(function(course){
    priceArray.push(course.price)
})

const totalPrice = priceArray.reduce(function(sum, currentPrice){
    return sum+currentPrice;
}, 0)

console.log(`Totak Price of all the courses is: ${totalPrice}`)