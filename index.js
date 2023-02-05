let directors = [
    {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
];

console.log(directors.length); //длина массива directors

//массив из top_rated_film из массива directors
let topFilmsList = [
    directors[0].top_rated_film,
    directors[1].top_rated_film,
    directors[2].top_rated_film,
    directors[3].top_rated_film,
    directors[4].top_rated_film,
    directors[5].top_rated_film,
    directors[6].top_rated_film].join(', ');

document.getElementById("topFilms").value = topFilmsList;
console.log(topFilmsList);

function directorsInformations() {
    document.getElementById("directors_name1").value = directors[0].name;
    document.getElementById("directors_career1").value = directors[0].career;
    document.getElementById("link1").innerHTML = `<a href=` + directors[0].films + `>фильмография</a>`;

    document.getElementById("directors_name2").value = directors[1].name;
    document.getElementById("directors_career2").value = directors[1].career;
    document.getElementById("link2").innerHTML = `<a href=` + directors[1].films + `>фильмография</a>`;

    document.getElementById("directors_name3").value = directors[2].name;
    document.getElementById("directors_career3").value = directors[2].career;
    document.getElementById("link3").innerHTML = `<a href=` + directors[2].films + `>фильмография</a>`;

    document.getElementById("directors_name4").value = directors[3].name;
    document.getElementById("directors_career4").value = directors[3].career;
    document.getElementById("link4").innerHTML = `<a href=` + directors[3].films + `>фильмография</a>`;

    document.getElementById("directors_name5").value = directors[4].name;
    document.getElementById("directors_career5").value = directors[4].career;
    document.getElementById("link5").innerHTML = `<a href=` + directors[4].films + `>фильмография</a>`;

    document.getElementById("directors_name6").value = directors[5].name;
    document.getElementById("directors_career6").value = directors[5].career;
    document.getElementById("link6").innerHTML = `<a href=` + directors[5].films + `>фильмография</a>`;

    document.getElementById("directors_name7").value = directors[6].name;
    document.getElementById("directors_career7").value = directors[6].career;
    document.getElementById("link7").innerHTML = `<a href=` + directors[6].films + `>фильмография</a>`;
}
directorsInformations();
