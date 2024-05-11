'use strict'

let numberOfFilms;


function start(){
    numberOfFilms = +prompt("Сколько вы посмотрели фильмов за последний месяц?");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько вы посмотрели фильмов за последний месяц?");
    }
}

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    
    }
}

function detectPersonalLever(){
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман')
    } else {
        console.log('Произошла ошибка');
    }
}

function showMyDB(){
    if (personalMovieDB.privat == false) {
        return personalMovieDB
    }
}

function writeYourGenres(){
    for (let i = 0; i < 3; i++){
        let yourGenres = prompt(`Ваш любимый жанр ${i + 1}`);
        personalMovieDB.genres.push(yourGenres);
    }
}


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

start();
rememberMyFilms();
detectPersonalLever();
showMyDB();
writeYourGenres();

console.log(personalMovieDB);


