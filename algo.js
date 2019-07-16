import { checkServerIdentity } from "tls";

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

ArrayHeal = ['Ana', 'Mercy']
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

// Rebot Project

const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
]

buildGraph = (edges) => {
    let graph = Object.create(null)
    addEdge = (from, to) => {
        if (graph[from] == null) {
            graph[from] = [to]
        } else {
            graph[from].push(to)
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to)
        addEdge(to, from)
    }
    return graph
}

const roadGraph = buildGraph(roads);

// Password salting 
rot13 = (str) => {
    // Split str into a character array
    return str.split('')
        // Iterate over each character in the array
        .map.call(str, function (char) {
            // Convert char to a character code
            x = char.charCodeAt(0);
            // Checks if character lies between A-Z
            if (x < 65 || x > 90) {
                return String.fromCharCode(x); // Return un-converted character
            }
            //N = ASCII 78, if the character code is less than 78, shift forward 13 places
            else if (x < 78) {
                return String.fromCharCode(x + 13);
            }
            // Otherwise shift the character 13 places backward
            return String.fromCharCode(x - 13);
        }).join(''); // Rejoin the array into a string
}


//Foreach
const ul = document.querySelector('.numbers')
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let html = ``
numbers.forEach(element => {
    console.log(element + 1)
})

ul.innerHTML = html



//lengthOfLongestSubstring ( https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/)

lengthOfLongestSubstring = (s) => {
    let charsMap = {}
    let start = 0
    let maxLength = 0

    for (let i = 0; i < s.length; i++) {
        const endChar = s[i]
        if (charsMap[endChar] >= start) {
            start = charsMap[endChar]++
        }
        charsMap[endChar] = i
        maxLength = Math.max(maxLength, i - start + 1)
    }
    return maxLength
}

//longestPalindrome ( https://leetcode.com/problems/longest-palindrome/ )

longestPalindrome = (s) => {

    let startInd = 0
    let maxLength = 1

    checkServerIdentity = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            const currentPalLentgh = r - l + 1
            if (currentPalLentgh > maxLength) {
                maxLength = currentPalLentgh
                startInd = l
            }
            l -= 1
            r += 1
        }
    }
    for (let i = 0; i < s.length; i++) {
        checkServerIdentity(i - 1, i + 1)
        checkServerIdentity(i, i + 1)



    }
    return s.slice(startInd, startInd + maxLength)
}
longestPalindrome('abccccdd') //cccc



// Valid Parentheses https://leetcode.com/problems/valid-parentheses/
isValid = (s) => {
    let acceptedChar = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let charStack = []

    //To Validate Input 
    if (s === null || s === undefined)
        return false
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            charStack.push(s[i]);
        }
        else {
            if (charStack[charStack.length - 1] === acceptedChar[s[i]]) {
                charStack.pop();
            }
            else return false;
        }
    }
    return charStack.length === 0 ? true : false;
}
isValid("()") // true
isValid("()[]{}") // ftrue
isValid("([)]") // false

//groupAnagrams(strs) https://leetcode.com/problems/group-anagrams/


groupAnagrams = (strs) => {

    let grouped = {}
    for (let i = 0; i < strs.length; i++) {
        const word = strs[i]
        const key = word.split('').sort().join('')
        if (!grouped[key]) {
            grouped[key] = []
        }
        grouped[key].push(word)
    }
    return Object.values(grouped)

}
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])




//Valid Palindrome https://leetcode.com/problems/valid-palindrome/
isPalindrome = (s) => {
    let newString = s.replace(/[^A-Z0-9]/ig, "").toLowerCase()
    let reversedNewString = newString.split("").reverse().join("").toLowerCase()
    return newString === reversedNewString ? true : false
}

isPalindrome('A man, a plan, a canal: Panama')


// Two Sum https://leetcode.com/problems/two-sum/
twoSum = (nums, target) => {
    array = []
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > target) {
            nums.splice(i, 1)
        }
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                array.push(i) && array.push(j)
            }

        }

    }
    console.log(array)
}

// twoSum([2, 7, 11, 12, 13, 15, 19, 32], 15)
// twoSum([2,3,4],6)
twoSum([0, 4, 3, 0], 0)


//findMedianSortedArrays https://leetcode.com/problems/median-of-two-sorted-arrays/submissions/


findMedianSortedArrays = (num1, num2) => {
    let arrayCombined = num1.concat(num2)
    arrayCombined.sort((a, b) => {
        return a - b
    })

    const median = arrayCombined.length / 2,
        result = arrayCombined.length % 2

    if (result > 0) {
        return arrayCombined[Math.floor(arrayCombined.length / 2)]
    } else {
        return (arrayCombined[median] + arrayCombined[median - 1]) / 2
    }
}
findMedianSortedArrays([1, 3], [2, 4])
// Reverse Integer https://leetcode.com/problems/reverse-integer/


let reverse = function (x) {
    const max = 2 ** 31 - 1,
        min = -1 * 2 ** 31,


        reverseX = x
            .toString()
            .split('')
            .reverse()
            .join(''),
        TestingX = reverseX.slice(0, -1)
    if (x.toString().slice(-1) == '0') {
        x.toString().slice(0, -1)
    }
    console.log(TestingX)
    console.log(reverseX)
    if (reverseX.slice(-1) === '-' && TestingX < max && x > min) {
        return parseInt(reverseX) * -1
    } else if (reverseX < max && x > min) {


        return parseInt(reverseX)
    } else return 0
}

reverse(-1563847412)

// OR


let reverse = function (x) {
    let finalInt;
    if (parseInt(x) < 0) {
        finalInt = parseInt(x.toString().split('').reverse().join('').toString()) * -1
    } else {
        finalInt = parseInt(x.toString().split('').reverse().join('').toString())
    }
    return (Math.abs(Math.pow(2, 31) - 1) < finalInt) ? 0 : finalInt
}

reverse(-150)

let reverse = function (x) {
    x = x.toString().split("")
    x = x[0] == "-" ? -Number(x.slice(1).reverse().join("")) : Number(x.reverse().join(""))
    return x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1 ? 0 : x
}
// String to Integer (atoi) https://leetcode.com/problems/string-to-integer-atoi/ **Med**

/** THIS SOLUTOION I NEED TO FIND A WAY TO FIX THE ',' PROBLEM :'( */

let myAtoi = function (x) {
    finalX = x.replace(/\D/g, '')
    let finalInt
    console.log(x)
    if (isNaN(x.charAt(0)) && x.charAt(0) != '-') {
        return 0
    }

    else if (parseInt(x) < 0) {
        finalInt = parseInt(finalX.toString().split('').join('').toString()) * -1
    } else {
        finalInt = parseInt(finalX.toString().split('').join('').toString())
    }
    return (Math.abs(Math.pow(2, 31) - 1) < finalInt) ? 0 : finalInt
}

myAtoi('4bc89 s')

// Solution Working

let myAtoi = function (x) {
    const MIN = Math.pow(-2, 31)
    const MAX = Math.pow(2, 31) - 1
    x = parseInt(x)
    if (isNaN(x)) return 0
    else if (x < MIN) return MIN
    else if (x > MAX) return MAX
    else return x
}

// Check if a nmber is a Palindrome https://leetcode.com/problems/palindrome-number/submissions/
let numberPalindrome = function(x) {
    // console.log(x.toString().length==1)
    reversedX=parseInt(x.toString().split('').reverse().join('').toString())
    if(x.toString().length==1){
        return true
    }
      else if (x.toString().charAt(0) == '-' || x.toString().slice(-1)==0 ) {
        return false
    } return x==reversedX ? true : false  
}
numberPalindrome(1)