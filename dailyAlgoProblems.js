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
let numberPalindrome = function (x) {
    // console.log(x.toString().length==1)
    reversedX = parseInt(x.toString().split('').reverse().join('').toString())
    if (x.toString().length == 1) {
        return true
    }
    else if (x.toString().charAt(0) == '-' || x.toString().slice(-1) == 0) {
        return false
    } return x == reversedX ? true : false
}
numberPalindrome(1)


//12. Integer to Roman https://leetcode.com/problems/integer-to-roman/
intToRoman = (num) => {
    const hash = [
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['', 'M', 'MM', 'MMM']
    ]

    let result = ''
    let i = 0
    while (num > 0) {
        console.log(result)

        result = hash[i++][num % 10] + result

        num = Math.floor(num / 10)
    }

    return result
}
intToRoman(1778)



//Roman To Integer https://leetcode.com/problems/roman-to-integer/

let romanToInt = function (s) {
    let list = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    }
    let arr = s.split('')
    console.log(arr)
    let result = 0
    for (let i = 0, len = arr.length; i < len; i++) {
        let num = list[arr[i]]
        console.log(num)
        let nextNum = list[arr[i + 1]]
        if (nextNum !== num && nextNum > num) {
            result -= num
            continue
        }
        result += num
    }
    return result
}
romanToInt(VIIC)


// longestCommonPrefix https://leetcode.com/problems/longest-common-prefix/


longestCommonPrefix = (strs) => {
    if (!strs.length) return '';
    for (let i = 0; i < strs[0].length; i++) {
        for (let str of strs) {
            if (str[i] !== strs[0][i]) {
                return str.slice(0, i);
            }
        }
    }
    return strs[0]
}
longestCommonPrefix(['Salut', 'Salaud', 'Salade'])


// 15. 3Sum  https://leetcode.com/problems/3sum/
threeSum = (nums) => {


    let target = 0
    let array = []
    if (!nums.length) return ''

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === target) {
                    array.push(i) && array.push(j) && array.push(k)
                }
            }

        }
    }

    return array.slice(2)
}
threeSum([-2, 2, 3, 4, 5, -1, -1])


// 1108. Defanging an IP Address https://leetcode.com/problems/defanging-an-ip-address/
defangIPaddr = (address) => {

    str = address.replace(/[.]/g, '[.]');


    return str
}
defangIPaddr("1.1.1.1")
//771. Jewels and Stones https://leetcode.com/problems/jewels-and-stones/

numJewelsInStones = (J, S) => {
    const jewels = new Set(J)
    console.log(jewels)
    return S.split('').reduce((res, s) => res + jewels.has(s), 0)
}

numJewelsInStones('Aa', "aAAbbbb")



// 938. Range Sum of BST 
let rangeSumBST = function (root, L, R) {
    let newArray = []
    let finalResult = 0
    if (root == null) return 0
    for (i = 0; i < root.length; i++) {
        if (root[i] >= L && root[i] <= R) {
            newArray.push(root[i])
        }
    }
    for (j = 0; j < newArray.length; j++) {
        finalResult += newArray[j]
    }
    return finalResult
}
rangeSumBST([10, 5, 15, 3, 7, 0, 18],
    7,
    15)



/** **************Accepted ANSWER **********
 * 
 * 
 * var rangeSumBST = function(root, L, R) {
let sum = 0;
if(root == null) {
    return 0;
}
if(L <= root.val && root.val <= R) {
  console.log(root.val)
    sum = root.val;
}
 
if(L <= root.val || R <= root.val) {
   sum += rangeSumBST(root.left, L, R);
} 
if(root.val <= L || root.val <= R){
   sum += rangeSumBST(root.right, L, R);
}
return sum    
};

rangeSumBST([10,5,15,3,7,0,18],
7,
15)
*  
*
*/



//709. To Lower Case https://leetcode.com/problems/to-lower-case/

let toLowerCase = function (str) {

    return str.toLowerCase()
}
toLowerCase('Love')


// wordToMorse 

let wordToMorse = function (words) {
    let list = {
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z"
    }
    let result = ''
    let arr = words.split('')
    list1 = Object.assign({}, ...Object.entries(list).map(([a, b]) => ({ [b]: a })))

    for (let i = 0, len = arr.length; i < len; i++) {
        let letter = list1[arr[i]]
        console.log(letter)
        result += letter
    }
    return result
}
wordToMorse('zen')



//804. Unique Morse Code Words https://leetcode.com/problems/unique-morse-code-words/
let uniqueMorseRepresentations = function (words) {

    let morseSet = new Set;
    let morse = "";
    function decode(elem) {
        var code = {
            "a": ".-",
            "b": "-...",
            "c": "-.-.",
            "d": "-..",
            "e": ".",
            "f": "..-.",
            "g": "--.",
            "h": "....",
            "i": "..",
            "j": ".---",
            "k": "-.-",
            "l": ".-..",
            "m": "--",
            "n": "-.",
            "o": "---",
            "p": ".--.",
            "q": "--.-",
            "r": ".-.",
            "s": "...",
            "t": "-",
            "u": "..-",
            "v": "...-",
            "w": ".--",
            "x": "-..-",
            "y": "-.--",
            "z": "--.."
        }
        return (code[elem]);
    }

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            morse += decode(words[i][j])
        }
        morseSet.add(morse)

        morse = ""
    }
    return morseSet.size
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])


//832. Flipping an Image https://leetcode.com/problems/flipping-an-image/
let flipAndInvertImage = function (A) {
    let reversed = A.map((currArray, index) => {
        return currArray.reverse()
    })
    for (var i = 0; i < reversed.length; i++) {
        for (var j = 0; j < reversed[i].length; j++) {
            if (reversed[i][j] === 1) {
                reversed[i][j] = 0
            } else {
                reversed[i][j] = 1
            }
        }
    }
    return reversed
}
flipAndInvertImage([[0, 1, 1], [1, 0, 1], [0, 0, 0]])


//905. Sort Array By Parity https://leetcode.com/problems/sort-array-by-parity/
let sortArrayByParity = function (array) {
    array.sort(function (a, b) {
        return a % 2 - b % 2
    })
    return array
}

sortArrayByParity([3, 1, 2, 4])


//961. N-Repeated Element in Size 2N Array  https://leetcode.com/problems/n-repeated-element-in-size-2n-array/


let repeatedNTimes = function (array) {
    let freq = {}
    for (let i = 0; i < array.length; i++) {
        let character = array[i]
        if (freq[character]) {
            freq[character]++
        } else {
            freq[character] = 1
        }
    }
    return Object.keys(freq).reduce((a, b) => freq[a] > freq[b] ? a : b)
}

repeatedNTimes([1, 2, 3, 3, 3, 4, 5, 3, 5, 5, 5, 3])

//977. Squares of a Sorted Array https://leetcode.com/problems/squares-of-a-sorted-array/
let sortedSquares = function (array) {
    let result = []
    for (i = 0; i < array.length; i++) {
        result.push(array[i] * array[i])
    }
    result.sort((a, b) => a - b)
    return result
}

sortedSquares([-4, -1, 0, 3, 10])


// 657. Robot Return to Origin https://leetcode.com/problems/robot-return-to-origin/
/**
 * @param {string} moves
 * @return {boolean}
 */
let judgeCircle = function (moves) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'U') {
            y = y - 1 // y-=y
        } else if (moves[i] === 'D') {
            y = y + 1 //y+=y
        } else if (moves[i] === 'L') {
            x = x + 1 //x+=x
        } else if (moves[i] === 'R') {
            x = x - 1 // x-=x
        }
    }
    return x == 0 && y == 0;
}


judgeCircle("RLUURDDDLU")


//728. Self Dividing Numbers https://leetcode.com/problems/self-dividing-numbers/


let selfDividingNumbers = function (l, r) {
    checkDiv = (num) => {
        num = num.toString().split('')
        return num
    }


    divNum = (num) => {
        let finalResult = []
        result = checkDiv(num)
        for (i = 0; i < result.length; i++) {
            if (num % result[i] == 0) {
                finalResult.push(result[i])
            }
        }
        return finalResult.join('') == num
    }
    let array = []

    for (let i = l; i <= r; i++) {
        if (divNum(i) !== false) {
            array.push(i)
        }

    }
    return array

}
selfDividingNumbers(1, 22)



//617. Merge Two Binary Trees https://leetcode.com/problems/merge-two-binary-trees/submissions/


let mergeTrees = function (t1, t2) {
    if (t1 && t2) {
        const newNode = new TreeNode(t1.val + t2.val)
        newNode.left = mergeTrees(t1.left, t2.left)
        newNode.right = mergeTrees(t1.right, t2.right)
        return newNode
    }
    return t1 || t2

}

mergeTrees([1, 3, 2, 5][2, 1, 3, null, 4, null, 7])


//461. Hamming Distance https://leetcode.com/problems/hamming-distance/

/**THIS SOLUTION NEED A REWORK */

let hammingDistance = function (x, y) {
    if (!(0 < x, y < 2147483648)) {
        return undefined
    }
    console.log(x ^ y)
    let res = 0
    let array1 = x.toString(2).toString().split('')
    let array2 = y.toString(2).toString().split('')
    console.table(array1)
    console.table(array2)
    while (array1.length < 4) {
        array1.unshift('0')
    }
    while (array2.length < 4) {
        array2.unshift('0')
    }

    array1.forEach((a, i) => {
        console.log(a == array2[i])
        if (a !== array2[i]) {
            res = res + 1
        }
    })

    return res
}

hammingDistance(680142203, 1111953568)


/**CORRECT ONE  */
//Check XOR OPP  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_binaires#(XOR_binaire)
let hammingDistance = (x, y)=> {
    let res = (x ^ y).toString(2).split('').filter(num => num === "1").length
  
  return res
  }
  
  hammingDistance(1,4)