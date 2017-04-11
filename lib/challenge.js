'use strict'

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively
const doubleBasePalindromeSum = function (base1, base2, upperLimit) {
  for (let i = 1; i < upperLimit; i++) {
    const hexNum = dec2bin(+i)
    let totalSum = 0
    const base2True = palindrome(hexNum)
    const base10True = palindrome(i)
    if (base2True === true && base10True === true) {
      totalSum += (i + i)
    }
    return totalSum
  }
}

function dec2bin (dec) {
  return (dec >>> 0).toString(2)
}

function palindrome (inValue) {
  const re = /[\W_]/g
  const lowRegStr = inValue.toLowerCase().replace(re, '')
  const reverseStr = lowRegStr.split('').reverse().join('')
  return reverseStr === lowRegStr
}

module.exports = {
  doubleBasePalindromeSum,
  dec2bin,
  palindrome
}
