"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
console.log(numberOfFilms);
console.log(typeof (numberOfFilms));

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let film1 = prompt('Один из последних просмотренных фильмов?', '');
let film1Rating = +prompt('На сколько оцените его?', '');
let film2 = prompt('Один из последних просмотренных фильмов?', '');
let film2Rating = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[film1] = film1Rating;
personalMovieDB.movies[film2] = film2Rating;

console.log(personalMovieDB);