// How do we assign a value to a variable?

//let variable = assigned value




// How do we change the value of a variable?

//let variable = new assigned value




// How do we assign an existing variable to a new variable?

//let new variable = old variable




// Remind me, what are declare, assign, and define?

//declare: let or const or var, no value assigned yet
//assign: variable = assigned value, = is the assignment
//define:declaring and assigning a variable at the same time




// What is pseudocoding and why should you do it?

//Writing out your logic in plain english. A way to plan out your code line by line.




// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

//at least 10% of the time you have to spend should be thinking through and planning out the problem by writing psuedocode




// Create a variable called firstVariable

//let firstVariable




// Assign it the value of the string "Hello World"

//firstVariable = "Hello World"




// Change the value of this variable to some number

//firstVariable = 9




// Store the value of firstVariablein a new variable called secondVariable

//let secondVariable = firstVariable





// Change the value of secondVariableto any string.

//secondVariable = "some string"





// What is the value of firstVariable?

//9



// Create a variable called yourNameand set it equal to your name as a string. 

//let yourName = 'Jenna'




//Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.

//let greetings = 'Hello, my name is '
//console.log(greetings+yourName)






// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');




// Declare a variable animal. Set it to be either "cow" or something else

//let animal = 'cow'

// Write code that will print out "mooooo" if the it is equal to cow

// if (animal === 'cow') {
//     console.log('mooooo')
// }

// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."

// if (animal != 'cow') {
//     console.log('Hey! you are not a cow')
// }

// Commit
//git init
//git add .
//git commit - m "first commit"


// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// let age = 15

// if (age >= 16) {
//     console.log('Here are the keys')
// } else {
//     console.log('Sorry too young')
// }





// Write a loop that will print out all the numbers from 0 to 10, inclusive
// for (let i = 0; i < 11; i++){
//     console.log(i)
// }



// Write a loop that will print out all the numbers from 10 up to and including 400
// for (let i = 10; i < 401; i++){
//     console.log(i)
// }



// Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (let i = 12; i < 4001; i+=3){
//     console.log(i)
// }




// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
// for (let i = 1; i < 101; i++){
//     console.log(i)
//     if (i % 2 == 0) {
//         console.log(`${i} is an even number`)
//     }
// }
//dont know how to make that print next to each other



// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

// for (let i = 1; i < 101; i++){
//     if (i % 5 == 0 && i % 3 != 0) {
//         console.log(`I found a ${i}. High five!`)
//     }
//     else if (i % 3 == 0 && i % 5 != 0) {
//         console.log(`I found a ${i}. Three's a crowd.`)
//     }
//     else if (i % 3 == 0 && i % 5 == 0) {
//         console.log(`I found a ${i}. Three's a crowd so high five!`)
//     }
    
// }




// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

let bank_account = 0
// for (i = 0; i < 11; i++){
//     bank_account += i
// }
//console.log(bank_account)
for (i = 1; i < 101; i++){
    bank_account += i*2
}
//console.log(bank_account)




// What are the things in an array called?
//elements

// Do Arrays guarantee those things will be in order?
//in order of when they were placed in an array, yes. otherwise no


// What real-life thing could you model with an array?
//2d: a seating chart, contact list
//3d:store data for image processing



// Create an array that contains three quotes and store it in a variable called quotes

let quotes = ['these', 'are', 'quotes']



// Given the following array 
// const randomThings = [1, 10, "Hello", true]

// // How do you access the 1st element in the array?
// console.log(randomThings[0])

// // Change the value of "Hello"to "World"
// randomThings[2] = 'World'


// // Check the value of the array to make sure it updated the array. How? Why, yes! 
// console.log(randomThings);




// Given the following array 
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// // What would you write to access the 3rd element of the array?
// console.log(ourClass[2])


// // Change the value of "Github" to "Octocat"
// ourClass[4] = 'Octocat'

// // Add a new element, "Cloud City" to the array
// ourClass.push('Cloud City')

// console.log(ourClass)



// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 
// const myArray = [5, 10, 500, 20]

// // Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// myArray.push('Aegon')
// myArray.push('boutta remove')

// // Remove the 5from the beginning of the array.
// myArray.shift()
// // Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift('Bob Marley')
// // Remove the string of your choice from the end of the array.
// myArray.pop()
// // Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
// //it did mutate (aka change the original array) myArray bc it reversed the order of the elements within. did not atumatically return anything
// myArray.reverse()
//console.log(myArray)



// Create a variable that contains an integer.
// let num = 5

// Write an if ... elsestatement that:

// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.

// if (num < 100) {
//     console.log('lil num')
// }
// else if (num >= 100) {
//     console.log('big num')
// }


// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

// if (num < 5) {
//     console.log('lil num')
// }
// else if (num > 10) {
//     console.log('big num')
// }
// else {
//     console.log('monkey')
// }


const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//   What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
//console.log(`Kris is rocking that ${kristynsCloset[2]} today`)



// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
//splice(index you want it in, # items to delete to put it there, what you're putting in)
kristynsCloset.splice(-1, 0, 'raybans')
//console.log(kristynsCloset)

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = 'stained yellow hat'
//console.log(kristynsCloset)

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
//console.log(thomsCloset[0][0])


// In the same way, access one item from Thom's pants array.
//console.log(thomsCloset[1][1])

// Access one item from Thom's accessories array.
//console.log(thomsCloset[2][0])

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
//console.log(`Thom is looking fierce in a ${thomsCloset[0][1]}, ${thomsCloset[1][2]}, and a ${thomsCloset[2][1]}!`)

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = 'Footie pjs'



//Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

function printCool(name) {
    console.log(`${name} is cool`)
}
//printCool('Jenna')



//Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

let calculateCube = function (num) {
    console.log(num*num*num)
}
//calculateCube(5)



//Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.


function isVowel(letter) {
    letter = letter.toLowerCase()
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
        return true
    } else return false
}

//console.log(isVowel('p'))




//Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// let getTwoLengths = function (str1, str2) {
//     let lengths = []
//     let length1 = 0
//     let length2 = 0
//     for (let i = 0; i < str1.length; i++){
//         length1++
//     }
//     for (let j = 0; j < str2.length; j++){
//         length2++
//     }
//     lengths.push(length1)
//     lengths.push(length2)
//     return lengths
// }

//console.log(getTwoLengths('this is a string', 'this is also a string'))




//Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

function getMultipleLengths(arrStrings) {
    let lengths = []
    for (let i = 0; i < arrStrings.length; i++) {
        let length = 0
        for (let j = 0; j < arrStrings[i].length; j++) {
            length++
        }
        lengths.push(length)
    }
    
    return lengths
}
//console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))

/* Daniel's code:
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

function getMultipleLengths(arr){
    return arr.map(function(str){
        return str.length;
    });
}
*/


// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.


let maxOfThree = function (num1, num2, num3) {
    // if (num1 > num2 && num1 > num3) {
    //     console.log(num1)
    // }
    // else if (num2 > num1 && num2 > num3) {
    //     console.log(num2)
    // }
    // else if (num3 > num1 && num3 > num2) {
    //     console.log(num3)
    // }
    // else if (num3 === num1 && num3 === num2) {
    //     console.log(num3)
    // }


    //both of these avenues work, the following is just more efficient
    return Math.max(num1, num2, num3)

}
//console.log(maxOfThree(2,3,2))



//Write a function printLongestWord that accepts a single argument, an array of strings.The method should return the longest word in the array.In case of a tie, the method should return the word that appears first in the array.

function printLongestWord(arr) {
    let longestLength = 0
    let newCount = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newCount++
            if (newCount > longestLength) {
                longestLength = newCount
                
            }
        }
        newCount = 0
    }
    for (let k = 0; k < arr.length; k++) {
        if (arr[k].length === longestLength) {
            return arr[k]
        }
    }
}
//console.log(printLongestWord(["princessa", "Diane", "a", "Max", "big", "Todd", "princess", 'peanut butter']))



// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

let user = {
    name: 'Jenna',
    email:'123abc@aol.com',
    age: 24,
    purchased: []
}



// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

//user.email = 'sesamestreet@yahoo.com'
//user.age++

//console.log(user)


//Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

user.location = 'carajoland'
//console.log(user)


// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.

user.purchased.push('carbohydrates')

// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
user.purchased.push('peace of mind')

// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push('maraschino cherries')

// Console.log just the "Merino jodhpurs" from the purchasedarray.
//console.log(user.purchased[2])


// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)

user.friend = {
    name: 'Nat',
    age: 24,
    location: 'NYC',
    purchased: []
}


// Console.log just the friend's name
//console.log(user.friend.name)

// Console.log just the friend's location
//console.log(user.friend.location)

// CHANGE the friend's age to 55
user.friend.age == 55

// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push('The Ring')

// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push('A chai latte')

// Console.log just "A latte" from the friend's purchasedarray.
//console.log(user.friend.purchased[1])




//Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
//user.purchased.forEach(item => console.log(item))


//Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
//user.friend.purchased.forEach(item => console.log(item))



// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.
// function updateUser() {
//     user.age++
//     user.name = user.name.toUpperCase()
// }
// updateUser()
// console.log(user)


// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.

//console.log(user)

function oldAndLoud(person) {
    person.age++
    person.name = person.name.toUpperCase()
    console.log(person)
}
//oldAndLoud(user)




// Define an object called cat1 that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed

let cat1 = {
    name: 'Frieza', 
    breed: 'fluffy', 
    age: 7, 
}
// console.log(cat1.age)
// console.log(cat1.breed)


// Define an object called cat2that also contains the properties:

// name
// breed
// age (a number)


let cat2 = {
    name: 'Zeno', 
    breed: 'smooth', 
    age: 2, 
}


// Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.
// let cats = function (cat, anotherCat) {
//     console.log(cat, anotherCat)
// }
// Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
//cats(cat1, cat2)


// Make it so the combineCatsfunction will return a combination of the two incoming cats
let combineCats = function (cat, anotherCat) {
    // let cat3 = {
    //     name: cat.name + anotherCat.name,
    //     breed: cat.breed + '-' + anotherCat.breed,
    //     age: 1,
    // }
    let cat3 = {}
    cat3.name = cat1.name + cat2.name
    cat3.breed = cat2.breed + '-' + cat2.breed
    cat3.age = 1
    console.log(cat3)
}
//combineCats(cat1, cat2)

// The result should be an object wherein the

// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between





// If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:

// catCombinatorcan use itself as its own argument.

// Take a second to stew on that . . .

// What is the result of:

// Whoa . . .

// The above console.log is two levels deep of combineCats.
//console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.

//console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)))));




