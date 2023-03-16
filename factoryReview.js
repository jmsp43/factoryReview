class Hamster {
  constructor(name){
    this.owner = ''
    this.name = name
    this.price = 15
  }
  wheelRun(){
    console.log('squeak squeak')
  }
  eatFood(){
    console.log('nibble nibble')
  }
  getPrice(){
    return this.price
  }
}

// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

class Person {
  constructor(name){
    this.name = name
    this.age = 0
    this.height = 0
    this.weight = 0
    this.mood = 0
    this.hamsters = []
    this.bankAccount = 0
  }
  getName(){
    return this.name
  }
  getAge(){
    return this.age
  }
  getWeight(){
    return this.weight
  }
  greet(){
    console.log(`I am ${this.name} hello`)
  }
  eat() {
    this.weight++
    this.mood++
  }
  exercise(){
    this.weight--
  }
  ageUp(){
    this.age++
    this.height++
    this.weight++
    this.mood--
    this.bankAccount+=10
  }
  buyHamster(hamster){
    this.hamsters.push(hamster)
    this.mood+=10
    this.bankAccount-=hamster.getPrice()
  }
}

// Instantiate a new Person named Timmy
let timmy = new Person('Timmy')

// Age Timmy five years
do { timmy.ageUp()} while (timmy.age < 5)
//console.log(timmy)

// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
let i = 0
do { timmy.eat(); i++ } while (i < 5)
//console.log(timmy)

// // Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
let j = 0
do { timmy.exercise(); j++ } while (j < 5)
//console.log(timmy)

// // Age Timmy 9 years
for(let m = 0; m < 9; m++){
    timmy.ageUp()
}
//console.log(timmy)

// // Create a hamster named "Gus"
let gus = new Hamster('Gus')

// // Have Timmy "buy" Gus
timmy.buyHamster(gus)
//console.log(timmy)

// // Set Gus's owner to the string "Timmy"
gus.owner = 'Timmy'
//console.log(timmy)

// Age Timmy 15 years
for(let n =0; n < 15; n++){
    timmy.ageUp()
}
//console.log(timmy)

// Have Timmy eat twice
let p = 0
do { timmy.eat(); p++ } while (p < 2)
//console.log(timmy)

// Have Timmy exercise twice
let q = 0
do { timmy.exercise(); q++ } while (q < 2)
//console.log(timmy)





// Chef Make Dinners
class Dinner {
        // Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }

}

class Chef {
    //chef is a dinner factory
    cook(app, ent, des) {
        return new Dinner(app, ent, des)
        // Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
    }
}
// Chef should be a factory of Dinner



// Have the Chef create 3 dinners, log the dinners
let jenna = new Chef();
console.log(jenna.cook('stuffed mushrooms', 'locrio', 'chocolate brigadeiro'))
console.log(jenna.cook('sticky wings', 'tofu scramble', 'passionfruit mousse'))
console.log(jenna.cook('shrimp salad', 'arroz con gandule', 'tres leches'))
