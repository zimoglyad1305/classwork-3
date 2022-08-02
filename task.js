
let enterUserName = prompt('Who is there?','');
if (enterUserName === null) {
    alert('Canceled');
} if (enterUserName !== 'admin') {
    alert('I don`t know you');
}
if (enterUserName === 'admin') {
    let enterPassword = prompt('Enter your password:', '');
    if (enterPassword === 'admin') alert('Hello');
    else if (enterPassword === null) alert('Canceled');
    else alert('Incorrect password');
}

let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass === 'Я главный') {
        alert( 'Здравствуйте!' );
    } else if (pass === '' || pass === null) {
        alert( 'Отменено' );
    } else {
        alert( 'Неверный пароль' );
    }

} else if (userName === '' || userName === null) {
    alert( 'Отменено' );
} else {
    alert( "Я вас не знаю" );
}