"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
console.log(numberOfFilms);
console.log(typeof (numberOfFilms));

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.count = numberOfFilms;

let film1 = prompt('Один из последних просмотренных фильмов?');
let film1Rating = +prompt('На сколько оцените его?');
let film2 = prompt('Один из последних просмотренных фильмов?');
let film2Rating = +prompt('На сколько оцените его?');

personalMovieDB.movies = {
    film1: film1Rating,
    film2: film2Rating
};

console.log(personalMovieDB);