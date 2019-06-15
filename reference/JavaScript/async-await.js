// let getName = async () => {
//     try {
//         // undefined.a;
//         // throw new Error("There is no name for this.");

//         return 'Name'
//     } catch (error) {
//         console.log("Error from async", error);
//     }
// }

// ==

let getName = () => {
    return new Promise((resolve, reject) => {
        
        // if(unWanted) {
        //     reject(`This is error message and ${unWanted} happend`)
        // } reject is used for error handling

        setTimeout(() => {
            resolve("Name") // Use when there is no problem.
        }, 5000)
    })
}

// 

let greeting = async () => {
    let name = await getName(); // name save the result of Promise getName();
    return `Hi ${name}`; // -> Then you can its data easily and syncronously
}

// setTimeout works with Promise

// resolve -> Error handler, Reject - Return value

// console.log(getName);// Get Name is a async function that saves the data 'Name', [AsyncFunction: getName]

greeting()
    .then(data => {
        // undefined.b; 
        console.log(data)
    })
    .catch(e => console.error("Error from Promise", e));

let getInformation = async (id) => {
                           let targetNumber = await getNumber(id);
    let resp = await getResult(targetNumber);

    return (`a is ${resp.a} b is ${resp.b}` ); // return here is important 
}

// Decide what to do finally when using async function at the end

getInformation(1)
.then(result => console.log(result))
.catch(error => console.log(error)); // Error handling just once at the last line of Promise

// You can use asynchrnous functions syncrhonously and use its results in sequence easily

// You can use async fucntion with error handling if-throw-else-return or try catch


let getInformation = async (id) => {
    let targetNumber = numbers.find(number => number.id === id);

    if (!targetNumber) {
        throw new Error(`There is no data for ${id}`)
    } else {
        return targetNumber;
    }
}


Callback -> Promise -> Async // Less code, More efficient and effective

let getSalary =  async (targetNumber) => {
     let salaryDB = salaries.find(salary => salry.id === targetNumber);

     if(!salryDB) {
         throw new Error(`There is not data for ${targetNumber}`)
     } else {
         return {
             Object
         };
     }
}



// When you use async -> You don't have to use return new Promise((resolve ,reject) => {
//     if-reject, else-resolve statements
// })
// reject - throw, return - resolve
// Using async and optionally await(to save resulst of other promise) keyword you can make and use async function more effectively then using promise and callback function]
