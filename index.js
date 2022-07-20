
function validateCreditCard(cardNum) {
    if (checkIfAllNumbers(cardNum) === false) return `valid: ${false}, number: ${cardNum}, error: Not all digits are numbers`;
    if (checkSameDigits2(cardNum) === false) return `valid: ${false}, number: ${cardNum}, error: All the digits are the same digit`;;
    if (checkFinalDigit(cardNum) === false) return `valid: ${false}, number: ${cardNum}, error: Final digit is odd`;;
    if (checkSumDigits(cardNum) === false) return `valid: ${false}, number: ${cardNum}, error: Digits sum less than 16`;;
    if (checkDashesAndNumLenght(cardNum) === false) return `valid: ${false}, number: ${cardNum}, error: There are not 16 digits`;;

    return `valid: ${true}, number: ${cardNum}`;
};

function checkIfAllNumbers(cardNum) {
    const numbers = '0123456789-';

    for (let i = 0; i < cardNum.length; i++) {

        if (!numbers.includes(cardNum[i])) return false
        // console.log(cardNum[i]);
    } 

    return true
}

// console.log(checkIfAllNumbers('9999-7777-8888-0000')); 

function checkSameDigits(cardNum) {
    const numbers = '0123456789'

    for (let i = 0; i < numbers.length; i++) {
        
        let counter = 0;
        for (let j = 0; j < cardNum.length; j++) {
            if (cardNum[j] === numbers[i]) counter++
        }

        if (counter === 16) return false

    }
    return true
}
// console.log(checkSameDigits('9999-7777-8888-0000')); 

function checkSameDigits2(cardNum) {
    const numWithoutDashes = cardNum.replaceAll('-', '')
    for (let i = 0; i < numWithoutDashes.length-1; i++) {

        if (numWithoutDashes[i] !== numWithoutDashes[i+1]) return true
    }

    return false
}

// console.log(checkSameDigits2('9999-7777-8888-0000')); 

function checkFinalDigit(cardNum) {
    if (cardNum[cardNum.length - 1] % 2 === 0) {
        return true
    } else {
        return false
    }
}

// console.log(checkFinalDigit('9999-7777-8888-0000')); 

function checkSumDigits(cardNum) {
    const numWithoutDashes = cardNum.replaceAll('-', '')
    let sum = 0;
    for (let i = 0; i < numWithoutDashes.length; i++) {
        sum += Number(numWithoutDashes[i])
    }

    if (sum >= 16) {
        return true
    } else {
        return false
    }
}
// console.log(checkSumDigits('9999-7777-8888-0000')); 


function checkDashesAndNumLenght(cardNum) {
    if(cardNum.length === 16 ||(cardNum.charAt(4) === '-' && cardNum.charAt(9) === '-' && cardNum.charAt(14) === '-' && cardNum.length === 19)) {
        return true
    }
        return false
}


// console.log(checkSumDigits('11111111111'))

/**** tests *****/
console.log(validateCreditCard('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
console.log(validateCreditCard('6666-6666-6666-1666')); //{ valid: true, number: '6666-6666-6666-1666' }
console.log(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
console.log(validateCreditCard('4444-4444-4444-4444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
console.log(validateCreditCard('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }
console.log(validateCreditCard('1111222233334445'))
console.log(validateCreditCard('111122223333444'))
console.log(validateCreditCard('9867-5279-8756-248a'))
