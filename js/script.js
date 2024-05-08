//numberOfFilms personalMovieDB -> count, movies, actors, genres, privat

const numberOfFilms = +prompt("Сколько вы посмотрели фильмов за последний месяц?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

a = prompt("Какой фильм вы смотрели?");
b = prompt(`На сколько вы оцените фильм ${a}?`);

c = prompt("Какой ещё фильм вы смотреи недавно?");
d = prompt(`На сколько вы оцените фильм ${c}?`);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);