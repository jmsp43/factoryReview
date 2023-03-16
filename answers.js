//Write a for loop that will log the numbers 1 through 20.

// for (let i = 1; i < 21; i++){
//     console.log(i)
// }

//Write a for loop that will log only the even numbers in 0 through 200.

// for (let i = 0; i < 201; i++){
//     if (i % 2 === 0 && i != 0) {
//         console.log(i)
//     }
// }

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// for (let i = 0; i < 101; i++){
//     if (i % 15 === 0) { //lowest common multiple fo 5 and 3
//         console.log('FizzBuzz')
//     }
//     else if (i % 3 === 0) {
//         console.log('Fizz')
//     }
//     else if (i % 5 === 0) {
//         console.log('Buzz')
//     } else console.log(i)
// }

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// Give D'Art a second hometown by adding "Hawkins"
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] = 5001;
//console.log(plantee)
wolfy[3] = "Gotham City";
dart.unshift("Hawkins");
//console.log(dart)
wolfy.splice(0, 1, "Gameboy");
//console.log(wolfy)

// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.

const ninjas = ["Donatello", "Michael Angelo", "Leonardo", "Rafael"];

// for (ninja of ninjas){
//     console.log(ninja.toLowerCase())
// }

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

// Console log: the index of Titanic
//console.log(favMovies.indexOf('Titanic'))

// Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
// Note: if you have to add to the array, feel free to add any movie you'd like

// use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
//sorts alphabetically but does not mutate original array
//console.log(favMovies.sort())
//console.log(favMovies)

// Use the method pop
//console.log(favMovies.pop())

// push"Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy");

// Reverse the array
//console.log(favMovies.reverse())
//NOT reverse alphabetical, just reverse of whatever order they were in to begin with

// Use the shiftmethod
//console.log(favMovies.shift()) //removes first element

// unshift- what does it return?
// console.log(favMovies.unshift('Hateful Eight')) // new # of indexes is returned

// splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
//favMovies.splice(favMovies.indexOf('Django Unchained'), 1, 'Avatar')
//console.log(favMovies)

// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
//console.log(favMovies)
console.log(favMovies.slice(Math.floor((favMovies.unshift() / 2)), -1))
//favMovies.unshift returns how many indexes there are so i divided that by 2 and then placed all that in the start position of my slice method
//console.log(favMovies) //did not permannently change array

// store the value of your slicein a variable, console.log it - Thought question: what is going on here?
// let secondHalfFavMovies = favMovies.slice((favMovies.unshift() / 2), -1)
//console.log(secondHalfFavMovies)

// console.log your final results
// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// console.log(favMovies.indexOf('Django Unchained'))
// console.log(favMovies)

// Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
// Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1, 1);
//console.log(whereIsWaldo)
// Change "Neff" to "No One"
whereIsWaldo[1][2] = "No One";
//console.log(whereIsWaldo)
// Access and console.log "Waldo"

// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

let catPhrases = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];
// for (let i = 0; i < 21; i++){
//     console.log('Love me, pet me! HSSSSSS!')
//     let randomPhrase = catPhrases[Math.floor(Math.random() * catPhrases.length)]
//     if (i % 2 === 0) {
//         console.log(randomPhrase)
//     }
// }

//Find the median number in the following numsarray, then console.log that number.
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];
const sortedNums = nums.sort();
//console.log(sortedNums)
let median = sortedNums[Math.floor(sortedNums.length / 2)];
//console.log(median)

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

//   Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

const kristynsShoe = kristynsCloset.shift()
thomsCloset[2].push(kristynsShoe)
//console.log(thomsCloset)


// Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

let kOutfit = `${kristynsCloset[1]} with ${thomsCloset[0][2]} and ${kristynsCloset[4]}`
let tOutfit = `${kristynsCloset[3]} with ${thomsCloset[2][1]} and ${kristynsCloset[0]}`
//console.log('Kristyn is wearing '+kOutfit + '. Thom is wearing ' + tOutfit)


// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
//kristynsCloset.forEach((item) => console.log("WHIRR: Now washing " + item ))

// Inventory
// Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.
let thomShirts = thomsCloset[0]
let thomPants = thomsCloset[1]
let thomAccessories = thomsCloset[2]
// console.log(`Inventory of shirts: ${thomShirts}`)
// console.log(`Inventory of pants: ${thomPants}`)
// console.log(`Inventory of accessories: ${thomAccessories}`)




const runningSum = function(nums) {
    let sum = 0
    let runningSums = []
    for (let i = 0; i < nums.length; i++){
        sum += nums[i]
        runningSums.push(sum)
    }
    console.log(runningSums)
}
let numbers =
[1, 2, 3, 4]
//runningSum(numbers)