function fizzBuzz(n) {
    for (let i = 1; i < n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('fizzbuzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(30)


function countVowels(string) {
    let counter = 0;
    for (let i = 0 ; i < string.length ; i++){
    const currentLetter = string[i];
        if (currentLetter === 'a'
        || currentLetter === 'i'
        || currentLetter === 'o'
        || currentLetter === 'u'
        || currentLetter === 'e'){
            counter++;
        }
    }
    return counter;
}

console.log(countVowels('hello'))
console.log(countVowels('word'))
console.log(countVowels('train'))
console.log(countVowels('txt'))
console.log(countVowels('31225'))