"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = +prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 1) {
        console.log('Произошла ошибка');
    } else if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else {
        console.log('Вы киноман');
    }

    console.log(personalMovieDB);
}

// detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    }
}

writeYourGenres();

console.log(personalMovieDB);


// callback функции
// function call(ar1, callback) {
//     console.log(ar1);
// }
// function two() {
//     console.log('Вторая, но должна сработать первой');
// }
// call('Первая', two());

// const str = 'Яблоко';
// for (let symbol of str) {
//     console.log(symbol);
// }

// // Клон объекта!!!
// const q = {
//     one: 1,
//     two: 5
// };

// const qNew = { ...q };
// qNew.one = 8;
// console.log(q);
// console.log(qNew);

// Прототип solider -> 
// сущуствующий объект john приобретает свойства прототипа
// const solider = {
//     health: 100,
//     armor: 400
// };
// const john = {};

// Object.setPrototypeOf(john, solider);

// Новый объект по прототипу:
// const solider = {
//     health: 100,
//     armor: 400
// };
// const john = Object.create(solider);




