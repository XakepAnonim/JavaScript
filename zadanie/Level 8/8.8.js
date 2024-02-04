// Уровень 8.8 задачника JavaScript

// 1
const citiesCountry = {
    russia: ['Москва', 'Санкт-Петербург', 'Новосибирск'],
    usa: ['Нью-Йорк', 'Лос-Анджелес', 'Чикаго'],
    china: ['Пекин', 'Шэньчжэнь', 'Шанхай']
};

function updCities() {
    const countrySelect = document.getElementById('countries');
    const citySelect = document.getElementById('cities');
    const selectCountry = countrySelect.value;

    citySelect.innerHTML = '';

    citiesCountry[selectCountry].forEach(city => {
        const elem = document.createElement('option');
        elem.value = city;
        elem.text = city;
        citySelect.add(elem);
    });
}

updCities();

// 2
function testNum() {
    let elemNum = document.getElementById('number').value
    let sum = elemNum - 1;

    for (let i = 2; elemNum > 1;) {
        if (!(elemNum % i)) {
            sum -= i;
            elemNum /= i;
        } else i++;
    }

    if (!sum) document.getElementById('resultNum').innerText = "Число является совершенным";
    else document.getElementById('resultNum').innerText = "Число не является совершенным";

}

// 1 (Уровень 8.9 задачника JavaScript)
function toggleMenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    const display = submenu.style.display;

    if (display === 'none' || display === '') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}
