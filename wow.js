var day = document.getElementById('day'),
    hour = document.getElementById('hour'),
    min = document.getElementById('min'),
    second = document.getElementById('second');

setInterval(() => {
    var dateDay = (31 - new Date().getDate()) + (30 - (31 - new Date('apr 13').getDate())),
        dateHour = 24 - new Date().getHours(),
        dateMin = 59 - new Date().getMinutes(),
        dateSeconds = 60 - new Date().getSeconds();

    day.innerHTML = dateDay;
    hour.innerHTML = dateHour;
    min.innerHTML = dateMin;
    second.innerHTML = dateSeconds;
})
