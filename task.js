
// function calculateSale(price) {
//     if (price > 500 && price <= 800) {
//         return 3;
//     } else if (price > 800) {
//         return 5;
//     }
//     return 0;
// }
// function calculatePriceSales(price) {
//     const sale = calculateSale(price);
//     return  price - ((price/100)*sale);
// }
// console.log(calculatePriceSales( 300))
// console.log(calculatePriceSales( 700))
// console.log(calculatePriceSales( 1000))
//
// const userPrice = +prompt('enter your price:');
// if (isNaN(userPrice)){
//     alert('enter valid price')
// } else {
//     alert(`accepted: ${userPrice}, your price with discount is: ${calculatePriceSales(userPrice)}`)
// }



// function pow(x, n) {
//     return alert(x**n)
// }
// let x = prompt('enter value of x');
// let n = prompt('enter value of n')
// pow(x,n)


// function min(a, b) {
//     if (a < b) {
//         return alert (a);
//     } else {
//         return alert(b);
//     }
// }
// min(2, 5);
// min(3, -1);
// min(1,1)


// const number = prompt('Введите число между 0 и 3', '');
//
// switch (number) {
//     case '0':
//         alert('Вы ввели число 0');
//         break;
//     case '1':
//         alert('Вы ввели число 1');
//         break;
//     case '2':
//     case '3':
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }


// const browser = prompt('enter you browser type');
//     if (browser === 'Edge') {
//         alert("You've got the Edge!");
//     } else if (browser === 'Chrome'
//         || browser === 'Firefox'
//         || browser === 'Safari'
//         || browser === 'Opera') {
//         alert('Okay we support these browsers too');
//     } else {
//         alert('We hope that this page looks ok!');
//     }


// let n = 12
// nextPrime:
//     for (let i = 2; i <= n; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//         }
//         console.log( i );
//     }


// for (input; input<=100;){
//     input = prompt('Please input numeric is greater then one hundred:','');
//     if (!input) break;
// }


