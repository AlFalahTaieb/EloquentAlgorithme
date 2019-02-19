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