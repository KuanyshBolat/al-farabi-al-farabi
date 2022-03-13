let hotel__info = document.querySelector('.info__hotel');
let hotel = document.querySelector('.hotel');

let loc__info = document.querySelector('.info__loc');
let loc = document.querySelector('.loc');

let sport__info = document.querySelector('.info__sport');
let sport = document.querySelector('.sport');

let sauna__info = document.querySelector('.info__sauna');
let sauna = document.querySelector('.sauna');

hotel__info.style.display = 'block';
loc__info.style.display = 'none';
sport__info.style.display = 'none';
sauna__info.style.display = 'none';
hotel.style.color = '#C9B26B';

hotel.addEventListener('click', function() {
    if(hotel__info.style.display == 'none') {
        hotel.style.color = '#C9B26B'
        loc.style.color = '#000000'
        sport.style.color = '#000000'
        sauna.style.color = '#000000'
        hotel__info.style.display = 'block'
        loc__info.style.display = 'none'
        sport__info.style.display = 'none'
        sauna__info.style.display = 'none'
        ;}
});

loc.addEventListener('click', function() {
    if(loc__info.style.display == 'none') {
        loc.style.color = '#C9B26B'
        hotel.style.color = '#000000'
        sport.style.color = '#000000'
        sauna.style.color = '#000000'
        loc__info.style.display = 'block'
        hotel__info.style.display = 'none'
        sport__info.style.display = 'none'
        sauna__info.style.display = 'none'
        ;}
});

sport.addEventListener('click', function() {
    if(sport__info.style.display == 'none') {
        sport.style.color = '#C9B26B'
        loc.style.color = '#000000'
        hotel.style.color = '#000000'
        sauna.style.color = '#000000'
        sport__info.style.display = 'block'
        hotel__info.style.display = 'none'
        loc__info.style.display = 'none'
        sauna__info.style.display = 'none'
        ;}
});

sauna.addEventListener('click', function() {
    if(sauna__info.style.display == 'none') {
        sauna__info.style.display = 'block'
        sauna.style.color = '#C9B26B'
        loc.style.color = '#000000'
        sport.style.color = '#000000'
        hotel.style.color = '#000000'
        hotel__info.style.display = 'none'
        loc__info.style.display = 'none'
        sport__info.style.display = 'none';}
});