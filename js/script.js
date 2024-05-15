"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько вы посмотрели фильмов за последний месяц?");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько вы посмотрели фильмов за последний месяц?");
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
    
        }
    },
    detectPersonalLever: function(){
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман')
        } else {
            console.log('Произошла ошибка');
        }
    },

    showMyDB: function(){
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB)
        }
    },
    writeYourGenres: function(){
        for (let i = 0; i < 3; i++) {
            let yourGenres = prompt(`Ваш любимый жанр ${i + 1}`);
            while (yourGenres === null || yourGenres == ''){
                yourGenres = prompt(`Ваш любимый жанр ${i + 1}`)
            }
            personalMovieDB.genres.push(yourGenres);
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },

    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLever();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();