let input = document.querySelector('#inp');
let radios = document.querySelectorAll('input[type="radio"]');
let znak = document.querySelector('#znak');
let pred = document.querySelector('#predict');

let signs = [
    {
        sign: 'Овен',
        startPeriod: '21.03',
        endPeriod: '19.04'
    },
    {
        sign: 'Телец',
        startPeriod: '20.04',
        endPeriod: '20.05'
    },
    {
        sign: 'Близнецы',
        startPeriod: '21.05',
        endPeriod: '20.06'
    },
    {
        sign: 'Рак',
        startPeriod: '21.06',
        endPeriod: '22.07'
    },
    {
        sign: 'Лев',
        startPeriod: '23.07',
        endPeriod: '22.08'
    },
    {
        sign: 'Дева',
        startPeriod: '23.08',
        endPeriod: '22.09'
    },
    {
        sign: 'Весы',
        startPeriod: '23.09',
        endPeriod: '22.10'
    },
    {
        sign: 'Скорпион',
        startPeriod: '23.10',
        endPeriod: '21.11'
    },
    {
        sign: 'Стрелец',
        startPeriod: '22.11',
        endPeriod: '21.12'
    },
    {
        sign: 'Козерог',
        startPeriod: '22.12',
        endPeriod: '19.01'
    },
    {
        sign: 'Водолей',
        startPeriod: '20.01',
        endPeriod: '18.02'
    },
    {
        sign: 'Рыбы',
        startPeriod: '19.02',
        endPeriod: '20.03'
    }
]

let predictions = {
    0: 'Тебя ждет удача',
    1: 'Прислушайтесь к словам близких',
    2: 'Не откладывайте дела на завтра',
    3: 'Избавьтесь от лишних вещей',
    4: 'Займитесь любимым делом',
    5: 'Сегодня ваши мечты исполнятся',
    6: 'Ваш ждет удача в финансовых делах',
    7: 'Неожиданная встреча',
}

input.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        for (let element of signs) {
            let start = formatDate(element.startPeriod);
            let end = formatDate(element.endPeriod);
            let check_date = formatDate(input.value);
            if (check_date >= start && check_date <= end) {
                znak.innerHTML = element.sign + ': ';
                let predictions_length = Object.keys(predictions).length;
                let rand = Math.floor(Math.random() * predictions_length);
                pred.innerHTML = predictions[rand];
            }
        }
    }
})

function formatDate(x) {
    let str = x;
    let parts = str.split('.');
    let mm = parts[1] - 1;
    let dd = Number(parts[0]);
    if ((mm == 11 && dd >=22) || (mm == 11  && dd <= 31) ) {
        y = 2023;
     } else {
        y = 2024;
     }
    let d = new Date(y, mm, dd);
    return d;
}
