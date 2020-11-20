function reverseString(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Некорректные данные'
    } else {
        return str.split('').reverse().join('')
    }
 }
 
 module.exports = reverseString;

