//Write a loop that makes seven calls to console.log to output the following triangle

let x = 0
let y = '#'
res = ''
while (x < 9) {
    x++
    res += y
    console.log(res)
}

/*
expected result 
#
##
###
####
#####
######
#######
*/


// FizzBuzz Algorithm

let y = 3
let x = 5
let z = 0

while (z < 100) {
    z++
    if (z % 3 == 0 && z % 5 == 0) {
        console.log('FizzBuzz')
    } else if (z % 5 == 0) {
        console.log('Buzz')
    } else if (z % 3 == 0) {
        console.log('Fizz')
    }
    else console.log(z)
}


// ChessBoard

let size = window.prompt('Enter la taille')
res = ""
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        res += (i + j) % 2 ? '#' : ' '
    }
    res += "\n"
}
console.log(res)

// Min Recursive ( minimum between two given value)

min = (a, b) => {
    if (a < b) {
        return b
    } else {
        return a
    }
}
console.log(min(0, 5))

// Recursion See if a given number is fisible by two or not 

isEven = (a) => {
    if (a == 0) {
        return true
    } else if (a == 1) {
        return false
    } else if (a < 0) {
        return isEven(-a)
    } else return isEven(a - 2)
}
console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))


//Bean Counting count Number of B on a string PAGE 56 

countChar = (a, b) => {
    let comp = 0

    for (const lettre of a) {
        if (lettre == b) {
            comp++
        }
    }
    console.log(`il y'a ${comp} ${b}`)
}


countBs = (a) => {
    return countChar(a, "B");
}

console.log(countBs('BOBOBOOB')) // 4B 

console.log(countChar('CeCi est un C ', 'C')) // 3C

//Chapter 4Data Structures: Objects and Arrays


// The sum of a Range
// Function that take two arguments start and end and returns an array containing all the numbers from start to end

range = (a, b, i = a < b ? 1 : -1) => {
    let arr = []
    for (let j = a; j < b + 1; j + i) {
        arr.push(j)
    }
    return arr
}

console.log(range(2, 5))

//sum function that takes an array of numbers and returns the sum of these numbers. 

sum = (numbers) => {
    let arrayLentgh = (numbers.length)
    let sum = 0
    for (let i = 0; i < arrayLentgh; i++) {
        sum += numbers[i]
    }
    return sum
}

console.log(sum([1, 2, 3, 4, 5, 6, 7]))

// Merge the two function 


console.log(sum(range(7, 89)))



//Reversing an array
reverseArray = (numbers) => {
    let output = []
    for (let i = numbers.length - 1; i >= 0; i--) {
        output.push(numbers[i])
    }
    return output
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]))


// Array To List

arrayToList = (numbers) => {

    let obj = null
    for (let i = numbers.length - 1; i >= 0; i--) {
        obj = { value: numbers[i], rest: obj }
    }
    return obj
}

console.log(arrayToList([1, 2, 3, 4, 5, 6, 7, 8, 9]))


listToaray = (numbers) => {
    let array = []

    for (let i = numbers; i; i = i.rest) {
        array.push(i.value)
    }
    return array
}

preapend = (value, numbers) => {
    return { value, rest: numbers }
}

nth = (list, n) => {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

//Deep Compare

//Compare between two object 

let obj = { here: { is: 'Nana' }, object: 2 }
let obj1 = { here: { is: 'Nana' }, object: 2 }
deepEqual = (obj) => {
    array = []
    array1 = []
    const finalArray = []
    for (let value of Object.values(obj)) {
        array.push(value)
    }
    for (let value of Object.values(obj1)) {
        array1.push(value)
    }
    console.log(array)
    console.log(array1)
    console.log(JSON.stringify(array) === JSON.stringify(array1))
}




deepEqual(obj, obj1)

//Higher-Order Functions Page 82

plusGrand = (n) => {
    return m => m > n;
}

plusGrand7 = plusGrand(7)

console.log(plusGrand7(5))

console.log(plusGrand7(7))


console.log(plusGrand7(9))

console.log(plusGrand7(14))

// Function reduce 

reduce = (array, c, s) => {
    let current = s
    for (let element of array) {
        current = c(current, element)
    }
    return current
}

console.log(reduce([1, 2, 3, 4, 5, 6, 7, 8, 9], (a, b) => a + b, 0))



reduceArray = (array) => {
    let array1 = []
    for (let element of array) {
        array1.push(array[element])
    }
    return array1
}


loop = (start, test, update) => {
    for (let value = start; test(value); value = update(value)) {
        console.log(value);
    }
}

loop(7, n => n > 0, n => n - 1);

//This one returns true when the given function returns true for every element in the array

EveryArr = (array, test) => {
    for (let element of array) {
        if (array[element] > test) {
            return true
        } return false
    }
}

//The Secret Life of Objects

let taieb = {}
taieb.speak = (line) => {
    console.log(`tyb aime'${line}'`)
}
taieb.speak('eya')

let Run = function (distance) {
    console.log(`Mr ${this.name} is coming to the end of a very long road, After more than ${distance}.`)
}

let Runner = { name: 'Forest Gump', Run }

Runner.Run('15,000 miles')


// With Arrow Function we can't use this

let Run = (distance) => {
    console.log(`Mr ${Runner.name} is coming to the end of a very long road, After more than ${distance}.`)
}

let Runner = { name: 'Forest Gump', Run }

Runner.Run('15,000 miles')


// MAPS

let Abbility = new Map()
Abbility.set('Mercy', 'Healing')
Abbility.set('Ana', 'Support/Sniper')
Abbility.set('Reinhardt', 'Tank')


console.log(`Ana is ${Abbility.get('Ana')}`) // Ana is Support/Sniper


//Class Getter & Setter 

ArrayHeal =  ['Ana', 'Mercy']
ArrayTank = ['Rein', 'Winston', 'Orisa']
ArrayDc = ['Windowmaker', 'Trace', 'Sombra']

class Heros {

    constructor(heroClass) {
        this.heroClass = heroClass
    }

    get Champion() {
        if (ArrayHeal.includes(this.heroClass)) {
            return console.log(`Ìt's a Healer`)
        } else if (ArrayTank.includes(this.heroClass)) {
            return console.log('This is a Tank')
        } else if (ArrayDc.includes(this.heroClass)) return console.log('This is a DC ')
    }

}

let Test = new Heros('Ana')

console.log(Test.Champion)