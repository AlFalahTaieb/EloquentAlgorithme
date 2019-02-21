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