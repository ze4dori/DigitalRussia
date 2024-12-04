document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM загружен');
    loadRegionContacts();
});


//Тумблер Российский /евразийский
function toggleState() {
    const toggleButton = document.querySelector('.toggle-button');
    toggleButton.classList.toggle('active');
    const labelLeft = document.querySelector('.label-left');
    const labelRight = document.querySelector('.label-right');
    if (toggleButton.classList.contains('active')) {
        labelLeft.style.color = 'rgba(31, 43, 106, 0.5)'; // Голубой цвет
        labelRight.style.color = 'rgba(31, 43, 106, 1)'; // Темносиний цвет
    } else {
        labelLeft.style.color = 'rgba(31, 43, 106, 1)'; // Темносиний цвет
        labelRight.style.color = 'rgba(31, 43, 106, 0.5)'; // Голубой цвет
    }
}

function myFunctionClick(id) {
    var Filter = document.getElementById('myModal');
    var button = document.getElementById('hide');
    Filter.style.right = "1.04vw";
    button.style.right = "27vw";
    var FilterPAK = document.getElementById('myModalPAK');
    var buttonPAK = document.getElementById('hidePAK');
    FilterPAK.style.right = "1.04vw";
    buttonPAK.style.right = "27vw";

    // Если на экране отображается модальные окна, функция не выполняется
    var myITinfo = document.getElementById('myITinfo');
    var myList = document.getElementById('myList');

    if (myITinfo.style.display === 'block' || myList.style.display === 'block') {
        return;
    }
    var buttons = document.getElementsByClassName('menu-item');

    // Сбрасываем стили для всех кнопок
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // Делаем выбранную кнопку активной
    var button = document.getElementById(id);
    button.classList.add('active');

    var svgElement = document.getElementById("mySvg");
    var scale = 1; // измените это значение, чтобы установить коэффициент масштабирования
    // Добавьте это, чтобы установить плавную анимацию
    svgElement.style.transform = "scale(" + scale + ") translateX(0%)";
    svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации

    // Обновляем id активной кнопки
    activeButtonId = id;
    sendActiveButtonId(activeButtonId)
    
    var myModal = document.getElementById('myModal');
    
    var myModalPAK = document.getElementById('myModalPAK');

    // Сбросить выбранные теги
    // Регион
    var selectedTagsContainer = document.getElementById('selected-tags');
    selectedTagsContainer.innerHTML = ''
    // Класс
    var selectedTagsContainer = document.getElementById('selected-tags-1');
    selectedTagsContainer.innerHTML = ''
    // Отрасль
    var selectedTagsContainer = document.getElementById('selected-tags-2');
    selectedTagsContainer.innerHTML = ''
    // Регион
    var selectedTagsContainer = document.getElementById('selected-tags-3');
    selectedTagsContainer.innerHTML = ''
    // Класс
    var selectedTagsContainer = document.getElementById('selected-tags-4');
    selectedTagsContainer.innerHTML = ''
    // Отрасль
    var selectedTagsContainer = document.getElementById('selected-tags-5');
    selectedTagsContainer.innerHTML = ''

    // Сбросить состояние чекбоксов
    document.getElementById('gosreg').checked = true;
    document.getElementById('AI').checked = false;
    document.getElementById('gosregPAK').checked = true;

    myModal.style.display = 'none';
    myModalPAK.style.display = 'none';
}

// Число активных записей
function sendActiveButtonId(active_button) {
    var request = new XMLHttpRequest();
    var params = 'active_button=' + active_button;

    request.open('POST', '/map', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            console.log(request.responseText);
        }
    };

    request.send(params);

    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            var response = JSON.parse(request.response);
            console.log(response);
            document.getElementById('dynamicNumber').innerHTML = response.active_records_count;
        } else {
            alert('Ошибка при отправке запроса!');
        }
    };
}

function myFunctionForMyButton() {
    // Если на экране отображается модальные окна, функция не выполняется
    var myITinfo = document.getElementById('myITinfo');
    var myList = document.getElementById('myList');

    if (myITinfo.style.display === 'block' || myList.style.display === 'block') {
        return;
    }

    var button = document.getElementById('myButton');
    button.classList.toggle('active');

    var svgElement = document.getElementById("mySvg");


    if (document.getElementById('myButton').classList.contains("active")) {
        var scale = 0.8; // измените это значение, чтобы установить коэффициент масштабирования
        // Добавьте это, чтобы установить плавную анимацию 
        svgElement.style.transform = "scale(" + scale + ") translateX(-20%)";
        svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации


    } else {
        var scale = 1; // измените это значение, чтобы установить коэффициент масштабирования
        // Добавьте это, чтобы установить плавную анимацию
        svgElement.style.transform = "scale(" + scale + ") translateX(0%)";
        svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации

    }
}
window.activeButtonId = 'ButtonPO';

// Обработчик кнопки Фильтр
document.getElementById('myButton').onclick = myFunction();

function myFunction() {
    // alert(activeButtonId); //Для проверки значения

    // Если на экране отображается модальные окна, функция не выполняется
    var myITinfo = document.getElementById('myITinfo');
    var myList = document.getElementById('myList');

    if (myITinfo.style.display === 'block' || myList.style.display === 'block') {
        return;
    }

    var myModalPAK = document.getElementById('myModalPAK');
    var myModal = document.getElementById('myModal');


    switch (activeButtonId) {
        case 'ButtonPO':
            myModal.style.display = (myModal.style.display === 'none') ? 'block' : 'none';
            myModalPAK.style.display = 'none';
            break;
        case 'ButtonPAK':
            myModalPAK.style.display = (myModalPAK.style.display === 'none') ? 'block' : 'none';
            myModal.style.display = 'none';
            break;
        default:
            myModal.style.display = 'none';
            myModalPAK.style.display = 'none';
            break;
    }

}

//ДЛЯ ОКНА ФИЛЬТРА ПО

//Кнопка свернуть
document.getElementById('hide').onclick = hideFilterFunction();

function hideFilterFunction() {
    var Filter = document.getElementById('myModal');
    var button = document.getElementById('hide');

    var myITinfo = document.getElementById('myITinfo');
    var svgElement = document.getElementById("mySvg");

    if (myModal.style.right === '1.04vw') {
        Filter.style.right = "-30vw";
        button.style.right = "0vw";

        var scale = 1; // измените это значение, чтобы установить коэффициент масштабирования
        // Добавьте это, чтобы установить плавную анимацию
        svgElement.style.transform = "scale(" + scale + ") translateX(0%)";
        svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
    } else {
        Filter.style.right = "1.04vw";
        button.style.right = "27vw";

        var scale = 0.8; // измените это значение, чтобы установить коэффициент масштабирования
        // Добавьте это, чтобы установить плавную анима цию 
        svgElement.style.transform = "scale(" + scale + ") translateX(-20%)";
        svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
    }

    // if (myITinfo.style.display === 'block') {
    //     if (myModal.style.right === '1.04vw') {
    //         Filter.style.right = "-30vw";
    //         button.style.right = "0vw";
    
    //         var scale = 1; // измените это значение, чтобы установить коэффициент масштабирования
    //         // Добавьте это, чтобы установить плавную анимацию
    //         svgElement.style.transform = "scale(" + scale + ") translateX(0%)";
    //         svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
    //     } else {
    //         Filter.style.right = "1.04vw";
    //         button.style.right = "27vw";
    
    //         var scale = 0.8; // измените это значение, чтобы установить коэффициент масштабирования
    //         // Добавьте это, чтобы установить плавную анима цию 
    //         svgElement.style.transform = "scale(" + scale + ") translateX(-20%)";
    //         svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
    //     }
    // } else {
    //     var scale = 0.8; // измените это значение, чтобы установить коэффициент масштабирования
    //     // Добавьте это, чтобы установить плавную анимацию 
    //     svgElement.style.transform = "scale(" + scale + ") translateX(20%)";
    //     svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
    // }
}

document.getElementById('close').onclick = closeMyModal;
// Функция для закрытия окна и очистки полей ввода и чекбоксов
function closeMyModal() {
    // Закрываем окно

    var myITinfo = document.getElementById('myITinfo');
    var svgElement = document.getElementById("mySvg");

    if (myITinfo.style.display === 'block') {
        var scale = 0.8; // измените это значение, чтобы установить коэффициент масштабирования
        // Добавьте это, чтобы установить плавную анимацию 
        svgElement.style.transform = "scale(" + scale + ") translateX(20%)";
        svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
    }
    else {
        //Карта на весь экран
        var scale = 1; // измените это значение, чтобы установить коэффициент масштабирования
        // Добавьте это, чтобы установить плавную анимацию
        svgElement.style.transform = "scale(" + scale + ") translateX(0%)";
        svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
    }

    var myModal = document.getElementById('myModal');
    myModal.style.display = 'none';

    var button = document.getElementById('myButton');
    // кнопка уже активна, вернем исходные стили
    button.classList.remove('active');

    // Сбросить выбранные теги
    // Регион
    var selectedTagsContainer = document.getElementById('selected-tags');
    selectedTagsContainer.innerHTML = ''
    // Класс
    var selectedTagsContainer = document.getElementById('selected-tags-1');
    selectedTagsContainer.innerHTML = ''
    // Отрасль
    var selectedTagsContainer = document.getElementById('selected-tags-2');
    selectedTagsContainer.innerHTML = ''

    // Сбросить состояние чекбоксов
    document.getElementById('gosreg').checked = true;
    document.getElementById('AI').checked = false;
}

// Обработчик кнопки Сбросить фильтр
document.getElementById('myButtonB').onclick = myFunctionB;
function myFunctionB() {

    // Сбросить выбранные теги
    // Регион
    var selectedTagsContainer = document.getElementById('selected-tags');
    selectedTagsContainer.innerHTML = ''
    // Класс
    var selectedTagsContainer = document.getElementById('selected-tags-1');
    selectedTagsContainer.innerHTML = ''
    // Отрасль
    var selectedTagsContainer = document.getElementById('selected-tags-2');
    selectedTagsContainer.innerHTML = ''

    // Сбросить состояние чекбоксов
    document.getElementById('gosreg').checked = true;
    document.getElementById('AI').checked = false;
}

window.fields;
window.softwareclasses;
window.hardwareclasses;
window.software_ai;
window.errp;

// Обработчик кнопки Применить (оптимизирован)
document.getElementById('myButtonS').onclick = myFunctionS();
function myFunctionS() {
    // Скрыть модальное окно и сбросить стили кнопки
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('myButton').classList.remove('active');

    // Переключить отображение списка
    const myList = document.getElementById('myList');
    myList.style.display = (myList.style.display === 'none' || !myList.style.display) ? 'block' : 'none';

    // Сбор данных для фильтрации
    const tags_region = document.querySelectorAll('#selected-tags .tag');
    const regions = Array.from(tags_region).map(tag => tag.innerText.trim());

    if (regions.includes('Вся Россия')) {
        const index = regions.indexOf('Вся Россия');
        if (index > -1) {
            regions.splice(index, 1); // Удаляет 'Вся Россия' из массива
        }
    }

    const tags_softwareclass = document.querySelectorAll('#selected-tags-1 .tag');
    softwareclasses = Array.from(tags_softwareclass).map(tag => tag.innerText.trim());

    const tags_field = document.querySelectorAll('#selected-tags-2 .tag');
    fields = Array.from(tags_field).map(tag => tag.innerText.trim());

    errp = document.getElementById('gosreg').checked ? 'TRUE' : 'FALSE';
    software_ai = document.getElementById('AI').checked ? 'TRUE' : 'FALSE';

    // Отправка POST-запроса
    const request = new XMLHttpRequest();
    request.open('POST', '/filterPO');
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            try {
                const response = JSON.parse(request.responseText);
                console.log(response)
                console.log(response.region)
                updateHTML(response, response.region);
            } catch (e) {
                console.error('Ошибка при разборе ответа:', e);
            }
        } else {
            alert('Ошибка при отправке запроса!');
        }
    };

    request.onerror = function () {
        alert('Ошибка соединения с сервером!');
    };

    // Отправляем массив регионов в запросе
    request.send(JSON.stringify({ regions, softwareclasses, fields, errp, software_ai }));
}


// Привязываем обработчик события к списку
const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
    item.addEventListener('click', myFunctionInfo);
});

//ДЛЯ ОКНА ФИЛЬТРА ПАК

//Кнопка свернуть
document.getElementById('hidePAK').onclick = hideFilterFunctionPAK();
function hideFilterFunctionPAK() {
    var Filter = document.getElementById('myModalPAK');
    var button = document.getElementById('hidePAK');
    var svgElement = document.getElementById("mySvg");


    if (myModalPAK.style.right === '1.04vw') {
        Filter.style.right = "-30vw";
        button.style.right = "0vw";

        var scale = 1; // измените это значение, чтобы установить коэффициент масштабирования
        // Добавьте это, чтобы установить плавную анимацию
        svgElement.style.transform = "scale(" + scale + ") translateX(0%)";
        svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
    } else {
        Filter.style.right = "1.04vw";
        button.style.right = "27vw";


        var scale = 0.8; // измените это значение, чтобы установить коэффициент масштабирования
        // Добавьте это, чтобы установить плавную анимацию 
        svgElement.style.transform = "scale(" + scale + ") translateX(-20%)";
        svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
    }
}

document.getElementById('closePAK').onclick = closeMyModalPAK;
// Функция для закрытия окна и очистки полей ввода и чекбоксов
function closeMyModalPAK() {
    // Закрываем окно

    var myModal = document.getElementById('myModalPAK');
    myModal.style.display = 'none';

    var myITinfo = document.getElementById('myITinfo');
    var svgElement = document.getElementById("mySvg");

    if (myITinfo.style.display === 'block') {
        var scale = 0.8; // измените это значение, чтобы установить коэффициент масштабирования
        // Добавьте это, чтобы установить плавную анимацию 
        svgElement.style.transform = "scale(" + scale + ") translateX(20%)";
        svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
    }
    else {
        //Карта на весь экран
        var scale = 1; // измените это значение, чтобы установить коэффициент масштабирования
        // Добавьте это, чтобы установить плавную анимацию
        svgElement.style.transform = "scale(" + scale + ") translateX(0%)";
        svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
    }

    var button = document.getElementById('myButton');
    // кнопка уже активна, вернем исходные стили
    button.classList.remove('active');

    // Сбросить выбранные теги
    // Регион
    var selectedTagsContainer = document.getElementById('selected-tags-3');
    selectedTagsContainer.innerHTML = ''
    // Класс
    var selectedTagsContainer = document.getElementById('selected-tags-4');
    selectedTagsContainer.innerHTML = ''
    // Отрасль
    var selectedTagsContainer = document.getElementById('selected-tags-5');
    selectedTagsContainer.innerHTML = ''

    // Сбросить состояние чекбоксов
    document.getElementById('gosregPAK').checked = true;
}

// Обработчик кнопки Сбросить фильтр
document.getElementById('myButtonBPAK').onclick = myFunctionBPAK;
function myFunctionBPAK() {

    // Сбросить выбранные теги
    // Регион
    var selectedTagsContainer = document.getElementById('selected-tags-3');
    selectedTagsContainer.innerHTML = ''
    // Класс
    var selectedTagsContainer = document.getElementById('selected-tags-4');
    selectedTagsContainer.innerHTML = ''
    // Отрасль
    var selectedTagsContainer = document.getElementById('selected-tags-5');
    selectedTagsContainer.innerHTML = ''

    // Сбросить состояние чекбоксов
    document.getElementById('gosregPAK').checked = true;

}


// Обработчик кнопки Применить
document.getElementById('myButtonSPAK').onclick = myFunctionSPAK;
function myFunctionSPAK() {
    // Скрыть модальное окно и сбросить стили кнопки
    document.getElementById('myModalPAK').style.display = 'none';
    document.getElementById('myButton').classList.remove('active');

    // Переключить отображение списка
    const myList = document.getElementById('myList');
    myList.style.display = (myList.style.display === 'none' || !myList.style.display) ? 'block' : 'none';

    // Сбор данных для фильтрации
    const tags_region = document.querySelectorAll('#selected-tags-3 .tag');
    const regions = Array.from(tags_region).map(tag => tag.innerText.trim());

    if (regions.includes('Вся Россия')) {
        const index = regions.indexOf('Вся Россия');
        if (index > -1) {
            regions.splice(index, 1); // Удаляет 'Вся Россия' из массива
        }
    }

    const tags_hardwareclass = document.querySelectorAll('#selected-tags-4 .tag');
    hardwareclasses = Array.from(tags_hardwareclass).map(tag => tag.innerText.trim());

    const tags_field = document.querySelectorAll('#selected-tags-5 .tag');
    fields = Array.from(tags_field).map(tag => tag.innerText.trim());

    errp = document.getElementById('gosregPAK').checked ? 'TRUE' : 'FALSE';

    // Отправка POST-запроса
    const request = new XMLHttpRequest();
    request.open('POST', '/filterPAK');
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            try {
                const response = JSON.parse(request.responseText);
                console.log(response)
                console.log(response.region)
                updateHTML(response, response.region);
            } catch (e) {
                console.error('Ошибка при разборе ответа:', e);
            }
        } else {
            alert('Ошибка при отправке запроса!');
        }
    };

    request.onerror = function () {
        alert('Ошибка соединения с сервером!');
    };

    // Отправляем массив регионов в запросе
    request.send(JSON.stringify({ regions, hardwareclasses, fields, errp }));
}


window.sideValue;

// Функция для отправки запроса на сервер по ID региона
function fetchCompaniesInRegion(id) {
    const svgElement = document.getElementById("mySvg");
    const parentElement = svgElement;
    const childElements = parentElement.children;

    if (activeButtonId == 'ButtonPAK') {
        fetch(`/region/${id}?button=${activeButtonId}`)
        .then(response => response.ok ? response.json() : Promise.reject('Сетевая ошибка'))
        .then(region => {

            const request = new XMLHttpRequest();
            request.open('POST', '/filterPAK');
            request.setRequestHeader('Content-Type', 'application/json');

            request.onload = function () {
                if (request.status >= 200 && request.status < 300) {
                    try {
                        const response = JSON.parse(request.responseText);
                        console.log(response);
                        for (let i = 0; i < childElements.length; i++) {
                            const child = childElements[i];
                            if (child.id !== id) {
                                child.style.fill = 'rgba(125, 159, 232, 1)';
                                const newElement = child.cloneNode(true);
                                child.parentNode.replaceChild(newElement, child);
                            }
                        }
                        updateHTML(response, Array(region));
                    } catch (e) {
                        console.error('Ошибка при разборе ответа:', e);
                    }
                } else {
                    console.error('Ошибка статуса:', request.status); // Log the status code
                    alert('Ошибка при отправке запроса!');
                }
            };

            request.onerror = function () {
                alert('Ошибка соединения с сервером!');
            };

            // Отправляем данные на сервер
            request.send(JSON.stringify({
                regions: Array(region.name), // Используйте нужное значение для региона
                hardwareclasses: hardwareclasses,
                fields: fields,
                errp: errp
            }));

        })
        .catch(error => {
            console.error('Ошибка:', error);
            document.getElementById("dynamicRegion").innerHTML = "Ошибка получения данных";
        });
    } else {
        fetch(`/region/${id}?button=${activeButtonId}`)
        .then(response => response.ok ? response.json() : Promise.reject('Сетевая ошибка'))
        .then(region => {

            const request = new XMLHttpRequest();
            request.open('POST', '/filterPO');
            request.setRequestHeader('Content-Type', 'application/json');

            request.onload = function () {
                if (request.status >= 200 && request.status < 300) {
                    try {
                        const response = JSON.parse(request.responseText);
                        console.log(response);
                        for (let i = 0; i < childElements.length; i++) {
                            const child = childElements[i];
                            if (child.id !== id) {
                                child.style.fill = 'rgba(125, 159, 232, 1)';
                                const newElement = child.cloneNode(true);
                                child.parentNode.replaceChild(newElement, child);
                            }
                        }
                        updateHTML(response, Array(region));
                    } catch (e) {
                        console.error('Ошибка при разборе ответа:', e);
                    }
                } else {
                    console.error('Ошибка статуса:', request.status); // Log the status code
                    alert('Ошибка при отправке запроса!');
                }
            };

            request.onerror = function () {
                alert('Ошибка соединения с сервером!');
            };

            // Отправляем данные на сервер
            request.send(JSON.stringify({
                regions: Array(region.name),
                softwareclasses: softwareclasses,
                fields: fields,
                errp: errp,
                software_ai: software_ai
            }));

        })
        .catch(error => {
            console.error('Ошибка:', error);
            document.getElementById("dynamicRegion").innerHTML = "Ошибка получения данных";
        });
    }
}

// Функция для нового фильтра Регион
function updateHTML(response, regions) {
    const listContainer = document.querySelector('.list-items');
    const countCompany = response.companies.length;
    const svgElement = document.getElementById('mySvg');
    const infoPopup = document.getElementById('InfoInPopUp');

    listContainer.innerHTML = '';

    if (response.companies.length === 0) {
        listContainer.innerHTML = '<p style="margin-left: 1.04vw;">По вашему запросу ничего не найдено.</p>';
    } else {
        response.companies.forEach(item => {
            const listItem = document.createElement('div');
            listItem.classList.add('list-item');
    
            listItem.innerHTML = `
                <div class="container" id="${item.id}" onclick="myFunctionInfo(${item.id})">
                    <div class="info_container">
                        <img src="https://getfile.dokpub.com/yandex/get/${item.logo_company}" alt="Иконка">
                        <h2>${item.company_name}</h2>
                    </div>
                    <p>${item.position_company}</p>
                    <p>${item.address}</p>
                </div>
            `;
    
            listContainer.appendChild(listItem);
        });
    }

    const idRegions = response.region.map(region => region.abb);
    const sides = response.region.map(region => region.side);
    
    // Определяем общее значение стороны
    window.sideValue = Array.isArray(sides) && new Set(sides).size === 1 ? sides[0] : sides;

    // Настройка масштабирования в зависимости от стороны
    if (window.sideValue === 'left') {
        svgElement.style.transition = "transform 3s"; 
        svgElement.style.transform = "scale(1.2) translateX(0%) translateY(-7%)";
    } else if (window.sideValue === 'right') {
        svgElement.style.transition = "transform 3s"; 
        svgElement.style.transform = "scale(1.05) translateX(-20%) translateY(2%)";
    } else {
        var scale = 0.8;
        svgElement.style.transform = "scale(" + scale + ") translateX(-20%)";
        svgElement.style.transition = "transform 1.5s";
    }

    const applyRegionStyles = (regionIds, fillColor) => {
        regionIds.forEach(id => {
            const regionElement = svgElement.getElementById(id);
            if (regionElement) {
                regionElement.style.fill = fillColor;
            }
        });
    };

    const addRegionEventListeners = (element, id, fetchData) => {
        element.addEventListener('mouseover', event => {
            if (fetchData) {
                const params = new URLSearchParams({
                    button: activeButtonId,
                    errp: errp,
                });

                fields.forEach(field => {
                    params.append('fields[]', field);
                });                
                if (window.softwareclasses) {
                    window.softwareclasses.forEach(softwareClass => {
                        params.append('softwareclasses[]', softwareClass);
                    });
                }                
                if (window.software_ai) {
                    params.append('software_ai', window.software_ai);
                }
                if (window.hardwareclasses) {
                    window.hardwareclasses.forEach(hardwareClass => {
                        params.append('hardwareclasses[]', hardwareClass);
                    });
                }
            
                fetch(`/region/${id}?${params}`)
                    .then(response => response.ok ? response.json() : Promise.reject('Сетевая ошибка'))
                    .then(region => {
                        updatePopup(region.name, region.count, id);
                        showPopup(event);
                    })
                    .catch(error => {
                        console.error('Ошибка:', error);
                        document.getElementById("dynamicRegion").innerHTML = "Ошибка получения данных";
                    });
            } else {
                updatePopup(id, countCompany, id);
                showPopup(event);
            }
        });

        element.addEventListener('mouseout', () => {
            if (!infoPopup.matches(':hover')) {
                    hidePopup();
            }
        });

        element.addEventListener('mousemove', updatePopupPosition);
        
        element.addEventListener('click', () => {
            const infoElement = document.getElementById('myITinfo');
        
            // Проверяем, отображается ли элемент
            if (infoElement.style.display === 'none' || !infoElement.style.display) {
                // Проверяем длину массива regions
                if (regions.length === 0) {
                    // Если массив пуст, выполняем действие
                    clearListItems();
                    fetchCompaniesInRegion(id);
                } else if (regions.length > 1) {
                    // Если длина больше 1, также выполняем действие
                    clearListItems();
                    fetchCompaniesInRegion(id);
                } else {
                    // Если длина равна 1, действие предотвращается
                    console.log("Regions length is 1, action prevented.");
                }
            }
        });
        
        function clearListItems() {
            const listItems = document.getElementById("list-items");
            while (listItems.firstChild) {
                listItems.removeChild(listItems.firstChild);
            }
        }
    };

    const updatePopup = (regionName, count, id) => {
        document.getElementById("dynamicRegion").innerHTML = regionName;
        document.getElementById("myImage").src = `static/images/emblems/${id}.png`;
        document.getElementById("countCompany").innerHTML = count;
    };

    const showPopup = event => {
        if (infoPopup.style.display !== 'block') {
            updatePopupPosition(event);
            infoPopup.style.display = 'block';
        }
    };

    const hidePopup = () => {
        infoPopup.style.display = 'none';
    };

    const updatePopupPosition = event => {
        infoPopup.style.top = `${event.clientY + 10}px`;
        infoPopup.style.left = `${event.clientX + 10}px`;
    };

    // const setPartOfSvgStyle = (id, fillColor) => {
    //     const partOfSvg = svgElement.getElementById(id);
    //     if (partOfSvg) {
    //         partOfSvg.style.fill = fillColor;
    //     }
    // };

    // const showPopupWithDelay = delay => {
    //     setTimeout(() => {
    //         const svgContainer = document.getElementById('mySvgContainer');
    //         svgContainer.style.left = "60vw";
    //         svgContainer.style.top = "-1.5vw";
    //         svgContainer.style.display = 'block';
    //     }, delay);
    // };

    if (regions.includes('Вся Россия')) {
        applyRegionStyles(idRegions, 'rgba(80, 79, 217, 1)');
        idRegions.forEach(id => {
            const regionElement = svgElement.getElementById(id);
            if (regionElement) {
                addRegionEventListeners(regionElement, id, true);
            }
        });
    } else {
        idRegions.forEach(id => {
            const regionElement = svgElement.getElementById(id);
            if (regionElement) {
                addRegionEventListeners(regionElement, id, true);
            }
        });

        applyRegionStyles(idRegions, "rgba(80, 79, 217, 1)");
    }
}



//Обработчик кнопки назад на списке (оптимизирован)
function myFunctionBack() {
    // Сбрасываем глобальную переменную
    window.idBlock = undefined;
    const svgElement = document.getElementById("mySvg");
    // var myITinfo = document.getElementById('myITinfo');
    document.getElementById("myITinfo").style.display = "none";

    // Возвращаем исходный масштаб элемента SVG
    var scale = 0.8; // измените это значение, чтобы установить коэффициент масштабирования
    // Добавьте это, чтобы установить плавную анимацию 
    svgElement.style.transform = "scale(" + scale + ") translateX(-20%)";
    svgElement.style.transition = "transform 1.5s";  

    // Получаем родительский элемент и всех его дочерних элементов
    const parentElement = svgElement;
    const childElements = parentElement.children;

    // Возвращаем исходный цвет заливки для всех дочерних элементов и удаляем обработчики событий
    for (let i = 0; i < childElements.length; i++) {
        const child = childElements[i];
        child.style.fill = 'rgba(125, 159, 232, 1)';

        // Удаляем привязанные обработчики событий
        const newElement = child.cloneNode(true);
        child.parentNode.replaceChild(newElement, child);
    }

    // Скрываем список
    document.getElementById("myList").style.display = "none";

    // Показываем нужный модальный элемент в зависимости от активной кнопки
    const myModal = document.getElementById('myModal');
    const myModalPAK = document.getElementById('myModalPAK');
    if (activeButtonId === "ButtonPAK") {
        myModalPAK.style.display = 'block';
    } else {
        myModal.style.display = 'block';
    }

    // Переключаем класс "active" на кнопку
    document.getElementById('myButton').classList.toggle('active');

    // Очищаем список элементов
    const listItems = document.getElementById("list-items");
    while (listItems.firstChild) {
        listItems.removeChild(listItems.firstChild);
    }

    // Скрываем svgContainer и возвращаем исходные координаты
    // const svgContainer = document.getElementById('mySvgContainer');
    // svgContainer.style.display = 'none';
    // svgContainer.style.left = "";
    // svgContainer.style.top = "";
}

//Появление блока инфо (оптимизирован)
function myFunctionInfo(id) {
    const myITinfo = document.getElementById('myITinfo');
    const myBlock = document.getElementById(id);
    const svgElement = document.getElementById("mySvg");

    const element = document.getElementById(window.idBlock);
    if (element) {
        element.style.backgroundColor = '';
    }

    while (myITinfo.firstChild) {
        myITinfo.removeChild(myITinfo.firstChild);
    }

    const isNewBlock = id !== window.idBlock;

    if (id === window.idBlock) {
        window.idBlock = undefined;
    }
    const displayBlockInfo = isNewBlock || myITinfo.style.display === 'none';

    if (displayBlockInfo) {
        myITinfo.style.display = 'block';
        myBlock.style.backgroundColor = 'rgba(240, 242, 255, 1)';
        // svgElement.style.transform = "scale(0.5) translateX(0%)";
       if (window.sideValue === 'left') {
        //Анимация приближения левой части после открытия левого окна инфомации
       var scale = 1.2; // измените это значение, чтобы установить коэффициент масштабирования
       // // Добавьте это, чтобы установить плавную анимацию
       svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
       svgElement.style.transform = "scale(" + scale + ") translateX(21%) translateY(-7%)";
        } else if (window.sideValue === 'right') {
        } else {
            svgElement.style.transform = "scale(0.6) translateX(0%)";
        }
    } else {
        if (window.sideValue === 'left') {
            //Анимация приближения левой части после открытия левого окна инфомации
           var scale = 1.2; // измените это значение, чтобы установить коэффициент масштабирования
           // // Добавьте это, чтобы установить плавную анимацию
           svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
           svgElement.style.transform = "scale(" + scale + ") translateX(0%) translateY(-7%)";
       } else if (window.sideValue === 'right') {
       } else {
            var scale = 0.8; // измените это значение, чтобы установить коэффициент масштабирования
            // Добавьте это, чтобы установить плавную анимацию 
            svgElement.style.transform = "scale(" + scale + ") translateX(-20%)";
            svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
       }
        myITinfo.style.display = 'none';
        myBlock.style.backgroundColor = '';
        // svgElement.style.transform = "scale(0.8) translateX(-20%)";
    }

    // svgElement.style.transition = "transform 1.5s";

    if (isNewBlock) {
        const request = new XMLHttpRequest();
        request.open('POST', '/info', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                const response = JSON.parse(request.responseText);
                console.log(response);
                infoHTML(response);
            } else if (request.readyState === 4) {
                alert('Ошибка при отправке запроса!');
            }
        };

        request.send(JSON.stringify({ idCompany: id }));
        window.idBlock = id;
    }
}

//Вывод информации о компании
function infoHTML(response) {
    const listContainer = document.querySelector('.info');

    response.forEach(item => {
        const listItem = document.createElement('div');
        listItem.classList.add('myITinfo');

        listItem.innerHTML = `
        <div class="informations">
        <svg class="close" id="close" width="18" height="18" viewBox="0 0 18 18" fill="none"
            xmlns="http://www.w3.org/2000/svg" onclick="closeMyModalInfo()"
            style="position: absolute; top: 0.52vw; right: 0.52vw; z-index: 9999;">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M17.7728 1.32372C18.0756 1.0209 18.0756 0.529933 17.7728 0.227114C17.47 -0.0757047 16.979 -0.0757047 16.6762 0.227114L8.99974 7.90357L1.32372 0.227552C1.0209 -0.0752664 0.529933 -0.0752668 0.227114 0.227552C-0.0757048 0.530371 -0.0757044 1.02134 0.227114 1.32416L7.90313 9.00017L0.22714 16.6762C-0.0756778 16.979 -0.0756782 17.47 0.227141 17.7728C0.529959 18.0756 1.02093 18.0756 1.32374 17.7728L8.99974 10.0968L16.6762 17.7732C16.979 18.076 17.47 18.076 17.7728 17.7732C18.0756 17.4704 18.0756 16.9794 17.7728 16.6766L10.0963 9.00017L17.7728 1.32372Z"
                fill="#383874" fill-opacity="0.2" />
        </svg>
        <div class="slideshow-container">
            <div class="mySlides fade" style="display: block;">
                <video autoplay muted loop id="myVideo" src="https://getfile.dokpub.com/yandex/get/${item.video}"></video>
            </div>
            <div class="mySlides fade">
                <img src="https://getfile.dokpub.com/yandex/get/${item.first_image}" width="100%">
            </div>

            <div class="mySlides fade">
                <img src="https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/BRYoFHKTZFUGag" width="100%">
            </div>
            <div class="mySlides fade">
                <img src="https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/irKoIshooua9yg" width="100%">
            </div>
            <div class="mySlides fade">
                <img src="https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/VcPwjFZc9FFt8Q" width="100%">
            </div>
        </div>
        <br>
        <div class="dots" style="text-align:center">
            <span class="dot active" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
            <span class="dot" onclick="currentSlide(5)"></span>
        </div>
        <div class="textInfo">
            <h1>${item.company_name}</h1>
            <span>${item.position_company}</span>
            <svg class="line" xmlns="http://www.w3.org/2000/svg" width="23.96vw" height="1" viewBox="0 0 460 1"
                fill="none">
                <line y1="0.5" x2="460" y2="0.5" stroke="#383874" stroke-opacity="0.5" />
            </svg>
            <h2>О компании</h2>
            <p id="about-${item.id}" class="сollapsed">${item.description}</p>
            <button id="toggleButton-${item.id}" class = "Buttonpokazat hidden">Показать ещё</button>
            <svg class="line" xmlns="http://www.w3.org/2000/svg" width="23.96vw" height="1" viewBox="0 0 460 1"
                fill="none">
                <line x1="-4.37114e-08" y1="0.5" x2="460" y2="0.49996" stroke="#383874" stroke-opacity="0.2" />
            </svg>
            <h2>Продукты компании</h2>
            <ul id="product-list-${item.id}" class="collapsed-list">
                ${listResult(item.product)}
            </ul>
            <button id="toggleProductButton-${item.id}" class="Buttonpokazat">Показать ещё</button>
         
            <svg class="line" xmlns="http://www.w3.org/2000/svg" width="23.96vw" height="1" viewBox="0 0 460 1"
                fill="none">
                <line x1="-4.37114e-08" y1="0.5" x2="460" y2="0.49996" stroke="#383874" stroke-opacity="0.2" />
            </svg>
            <h2>Услуги компании</h2>
            <ul id="service-list-${item.id}" class="collapsed-list">
                ${listResult(item.service)}
            </ul>
            <button id="toggleServiceButton-${item.id}" class = "Buttonpokazat">Показать ещё</button>
            <svg class="line" xmlns="http://www.w3.org/2000/svg" width="23.96vw" height="1" viewBox="0 0 460 1"
                fill="none">
                <line x1="-4.37114e-08" y1="0.5" x2="460" y2="0.49996" stroke="#383874" stroke-opacity="0.2" />
            </svg>
            <h2>Адрес</h2>
            <div class="location_info">
                <img src="static/images/location-icon.svg" alt="Иконка местоположения">
                <p>${item.address}</p>
            </div>
            <h2>Контакты</h2>
            <div class="number_info">
                <img src="static/images/phone-icon.png" alt="Иконка телефона">
                <p>${item.contact}</p>
            </div>
            <svg class="line" xmlns="http://www.w3.org/2000/svg" width="23.96vw" height="1" viewBox="0 0 460 1"
                fill="none">
                <line x1="-4.37114e-08" y1="0.5" x2="460" y2="0.49996" stroke="#383874" stroke-opacity="0.2" />
            </svg>
        </div>
        <div class="links">
        </div>
        </div>
        `;

        listContainer.appendChild(listItem);

        // Вызов функции generateICON после добавления элемента в DOM
        generateICON(item.id);

        // Обновление видимости
        updateVisibility(item.id);
        updateListVisibility(`product-list-${item.id}`, `toggleProductButton-${item.id}`);
        updateListVisibility(`service-list-${item.id}`, `toggleServiceButton-${item.id}`);

        // Обработчики событий для кнопок
        setupToggleButton(`toggleButton-${item.id}`, `about-${item.id}`);
        setupToggleButton(`toggleProductButton-${item.id}`, `product-list-${item.id}`);
        setupToggleButton(`toggleServiceButton-${item.id}`, `service-list-${item.id}`);
    });

    // Обработчик изменения размера окна
    window.addEventListener('resize', () => {
        response.forEach(item => {
            updateVisibility(item.id);
            updateListVisibility(`product-list-${item.id}`, `toggleProductButton-${item.id}`);
            updateListVisibility(`service-list-${item.id}`, `toggleServiceButton-${item.id}`);
        });
    });
}

// Видиомсть кнопки "Показать ещё"
function updateVisibility(id) {
    const textElement = document.getElementById(`about-${id}`);
    const toggleButton = document.getElementById(`toggleButton-${id}`);
    if (!textElement || !toggleButton) return;

    const text = textElement.innerText || textElement.textContent;
    const lines = text.split('. ');
    const numberOfLines = lines.length;

    const maxHeight = 2; // Количество видимых строк по умолчанию

    if (numberOfLines <= maxHeight) {
        textElement.classList.remove('collapsed');
        textElement.classList.add('expanded');
        toggleButton.classList.add('hidden'); // Скрыть кнопку
    } else {
        textElement.classList.add('collapsed');
        textElement.classList.remove('expanded');
        toggleButton.classList.remove('hidden'); // Показать кнопку
    }
}

// Видимость текста для кнопки "Показать ещё"
function updateListVisibility(listId, buttonId) {
    const list = document.getElementById(listId);
    const toggleButton = document.getElementById(buttonId);
    if (!list || !toggleButton) return;

    const items = list.querySelectorAll('li');
    const visibleItems = 2; // Количество видимых элементов по умолчанию

    // Скрыть все элементы, кроме первых двух
    items.forEach((item, index) => {
        item.style.display = index < visibleItems ? 'list-item' : 'none';
    });

    // Показать или скрыть кнопку в зависимости от количества элементов
    if (items.length > visibleItems) {
        list.classList.add('collapsed-list');
        toggleButton.classList.remove('hidden');
        toggleButton.textContent = 'Показать ещё';
    } else {
        list.classList.remove('collapsed-list');
        toggleButton.classList.add('hidden');
    }
}

// Обработчик кнопки "Показать ещё"
function setupToggleButton(buttonId, targetId) {
    const button = document.getElementById(buttonId);
    if (!button) return;

    button.onclick = () => {
        const targetElement = document.getElementById(targetId);
        const isCollapsed = targetElement.classList.contains('collapsed') || targetElement.classList.contains('collapsed-list');
        const visibleItems = 2; // Количество видимых элементов по умолчанию

        if (targetElement.tagName === 'P') { // Текстовое описание
            if (isCollapsed) {
                targetElement.classList.remove('collapsed');
                targetElement.classList.add('expanded');
                button.textContent = 'Свернуть';
            } else {
                targetElement.classList.remove('expanded');
                targetElement.classList.add('collapsed');
                button.textContent = 'Показать ещё';
            }
        } else { // Списки продуктов и услуг
            const items = targetElement.querySelectorAll('li');
            items.forEach((item, index) => {
                item.style.display = isCollapsed || index < visibleItems ? 'list-item' : 'none';
            });

            if (isCollapsed) {
                targetElement.classList.remove('collapsed-list');
                targetElement.classList.add('expanded-list');
                button.textContent = 'Свернуть';
            } else {
                targetElement.classList.add('collapsed-list');
                targetElement.classList.remove('expanded-list');
                button.textContent = 'Показать ещё';
            }
        }
    };
}

//Вывод списка через маркер (оптимизирован)
function listResult(items) {
    // Разделяем строку на элементы списка по символу ';'
    const matches = items.split(';').map(item => item.trim()).filter(Boolean);

    return matches.map(item => `<li>${item}</li>`).join('');
}

//Отправка запроса об иконках на сервер (оптимизирован)
function generateICON(id) {
    const request = new XMLHttpRequest();
    request.open('GET', `/icon/${id}`);

    request.onload = function () {
        if (request.status === 200) {
            try {
                const response = JSON.parse(request.responseText);
                console.log(response);
                updateICON(response);
            } catch (e) {
                console.error('Ошибка при разборе ответа:', e);
            }
        } else if (request.status === 404) {
            console.log('Компания не найдена!');
        } else {
            alert('Ошибка при отправке запроса!');
        }
    };

    request.onerror = function () {
        alert('Ошибка соединения с сервером!');
    };

    request.send();
}


//Вывод иконок на страницу (оптимизирован)
function updateICON(response) {
    const listContainer = document.querySelector('.links');
    listContainer.innerHTML = '';

    const iconData = [
        { key: 'whatsapp', src: 'Ico WhatsApp.png' },
        { key: 'telegram', src: 'Ico Telegram.png' },
        { key: 'viber', src: 'Ico Viber.png' },
        { key: 'vk', src: 'Ico VK.png' },
        { key: 'site', src: 'Ico Browser.png' }
    ];

    iconData.forEach(({ key, src }) => {
        if (response[key]) {
            const listItem = document.createElement('div');
            listItem.classList.add('link');
            listItem.innerHTML = `
                <a href="${response[key]}/" target="_blank">
                    <img class="link-icon" src="static/images/${src}">
                </a>
            `;
            listContainer.appendChild(listItem);
        }
    });

    // const staticLinksHtml = `
    //     <div class="link"><img class="link-icon" src="static/images/Ico Save.png"></div>
    //     <div class="link"><img class="link-icon" src="static/images/Ico Send.png"></div>
    // `;
    // listContainer.insertAdjacentHTML('beforeend', staticLinksHtml);
}

document.getElementById('close').onclick = closeMyModalInfo;
// Функция для закрытия окна инфо
function closeMyModalInfo() {
    // Закрываем окно
    const listItems = document.querySelectorAll('.container');
    listItems.forEach((element) => {
        element.style.backgroundColor = ''; // Возвращаем начальный цвет  
        console.log(element.textContent);
    });

    var myModal = document.getElementById('myITinfo');
    myModal.style.display = 'none';
    myITinfo.style.display = 'none';

    var info = document.getElementById("myITinfo")
    while (info.firstChild) {
        info.removeChild(info.firstChild)
    }

    var svgElement = document.getElementById("mySvg");

    if (window.sideValue === 'left') {
        //Анимация приближения левой части после открытия левого окна инфомации
       var scale = 1.2; // измените это значение, чтобы установить коэффициент масштабирования
       // // Добавьте это, чтобы установить плавную анимацию
       svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
       svgElement.style.transform = "scale(" + scale + ") translateX(0%) translateY(-7%)";
   } else if (window.sideValue === 'right') {

   } else {
        var scale = 0.8; // измените это значение, чтобы установить коэффициент масштабирования
        // Добавьте это, чтобы установить плавную анимацию 
        svgElement.style.transform = "scale(" + scale + ") translateX(-20%)";
        svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
   } 
   
    var myModalPAK = document.getElementById('myModalPAK');
    var myModal = document.getElementById('myModal');

//     if (myModal.style.display === 'none' && myModalPAK.style.display === 'none') {
//         var scale = 1; // измените это значение, чтобы установить коэффициент масштабирования
//         // Добавьте это, чтобы установить плавную анимацию 
//         svgElement.style.transform = "scale(" + scale + ") translateX(0%)";
//         svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
//    }

    // if (window.sideValue !== 'left' && window.sideValue !== 'right') {
    //     var scale = 0.8; // измените это значение, чтобы установить коэффициент масштабирования
    //     // Добавьте это, чтобы установить плавную анимацию 
    //     svgElement.style.transform = "scale(" + scale + ") translateX(-20%)";
    //     svgElement.style.transition = "transform 1.5s"; // измените это значение, чтобы установить продолжительность анимации
    // } else {
    //     var scale = 1.2; // Коэффициент масштабирования
    //     svgElement.style.transition = "transform 1.5s"; // Длительность анимации
    //     svgElement.style.transform = "scale(" + scale + ") translateX(0%) translateY(-7%)";
    // }
}

//Для фото-видео карусели
var slideIndex = 1;
showSlides(slideIndex);

// Вперед назад
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//Поиск
// Обработчик кнопки Выбрать
document.getElementById('selectButtonRegion').onclick = searchListRegion;

//Работа поиска Регионы
function searchListRegionGeneral(inputId, listContainerId, selectButtonId, toggleSearchContainerFunction) {
    const listItemsRegion = [
        "Вся Россия",
        "Республика Адыгея",
        "Республика Алтай",
        "Республика Башкортостан",
        "Республика Бурятия",
        "Республика Дагестан",
        "Республика Ингушетия",
        "Кабардино-Балкарская Республика",
        "Республика Калмыкия",
        "Карачаево-Черкесская Республика",
        "Республика Карелия",
        "Республика Коми",
        "Республика Крым",
        "Республика Марий Эл",
        "Республика Мордовия",
        "Республика Саха (Якутия)",
        "Республика Северная Осетия - Алания",
        "Республика Татарстан",
        "Республика Тыва",
        "Удмуртская Республика",
        "Республика Хакасия",
        "Чеченская Республика",
        "Чувашская Республика",
        "Алтайский край",
        "Забайкальский край",
        "Камчатский край",
        "Краснодарский край",
        "Красноярский край",
        "Пермский край",
        "Приморский край",
        "Ставропольский край",
        "Хабаровский край",
        "Амурская область",
        "Архангельская область",
        "Астраханская область",
        "Белгородская область",
        "Брянская область",
        "Владимирская область",
        "Волгоградская область",
        "Вологодская область",
        "Воронежская область",
        "Запорожская область",
        "Ивановская область",
        "Иркутская область",
        "Калининградская область",
        "Калужская область",
        "Кемеровская область",
        "Кировская область",
        "Костромская область",
        "Курганская область",
        "Курская область",
        "Ленинградская область",
        "Липецкая область",
        "Магаданская область",
        "Московская область",
        "Мурманская область",
        "Нижегородская область",
        "Новгородская область",
        "Новосибирская область",
        "Омская область",
        "Оренбургская область",
        "Орловская область",
        "Пензенская область",
        "Псковская область",
        "Ростовская область",
        "Рязанская область",
        "Самарская область",
        "Саратовская область",
        "Сахалинская область",
        "Свердловская область",
        "Смоленская область",
        "Тамбовская область",
        "Тверская область",
        "Томская область",
        "Тульская область",
        "Тюменская область",
        "Ульяновская область",
        "Херсонская область",
        "Челябинская область",
        "Ярославская область",
        "Москва",
        "Санкт-Петербург",
        "Еврейская автономная область",
        "Ненецкий автономный округ",
        "Ханты-Мансийский автономный округ - Югра",
        "Чукотский автономный округ",
        "Ямало-Ненецкий автономный округ",
        "Донецкая народная республика",
        "Луганская народная республика"
    ];

    const input = document.getElementById(inputId);
    const filter = input.value.toUpperCase();
    const ul = document.getElementById(listContainerId);
    ul.innerHTML = '';

    const sortedItems = listItemsRegion
        .map(item => {
            const matchIndex = item.toUpperCase().indexOf(filter);
            if (matchIndex !== -1) {
                const beforeMatch = item.substring(0, matchIndex);
                const matchText = item.substring(matchIndex, matchIndex + filter.length);
                const afterMatch = item.substring(matchIndex + filter.length);
                return {
                    item,
                    itemHtml: beforeMatch + '<span class="highlight">' + matchText + '</span>' + afterMatch,
                    matchIndex
                };
            }
            return { item, matchIndex: -1 };
        })
        .filter(item => item.matchIndex !== -1)
        .sort((a, b) => a.matchIndex - b.matchIndex);

    sortedItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item.itemHtml;
        li.addEventListener('click', () => {
            document.getElementById(selectButtonId).innerText = item.item;
            toggleSearchContainerFunction();
        });
        ul.appendChild(li);
    });
}

function searchListRegion() {
    searchListRegionGeneral('searchInputRegion', 'listContainerRegion', 'selectButtonRegion', toggleSearchContainerRegion);
}

function toggleSearchContainerRegion() {
    const container = document.getElementById('searchContainerRegion');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
}

// Обработчик кнопки Выбрать
document.getElementById('selectButtonClassPO').onclick = searchListClassPO;

//Работа поиска Класс ПО
function searchListClassPO() {
    const listItemsNameClassPO = [
        "Все",
        "Инструменты обработки, анализа и распознавания изображений",
        "Программное обеспечение интернета вещей, робототехники и сенсорики",
        "Встроенные прикладные программы",
        "Программное обеспечение для решения отраслевых задач в области информации и связи",
    ];

    const input = document.getElementById('searchInputClassPO');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById('listContainerClassPO');
    ul.innerHTML = '';

    const sortedItems = listItemsNameClassPO
        .map(item => {
            const matchIndex = item.toUpperCase().indexOf(filter);
            if (matchIndex !== -1) {
                const beforeMatch = item.substring(0, matchIndex);
                const matchText = item.substring(matchIndex, matchIndex + filter.length);
                const afterMatch = item.substring(matchIndex + filter.length);
                return {
                    item,
                    itemHtml: beforeMatch + '<span class="highlight">' + matchText + '</span>' + afterMatch,
                    matchIndex
                };
            }
            return { item, matchIndex: -1 };
        })
        .filter(item => item.matchIndex !== -1)
        .sort((a, b) => a.matchIndex - b.matchIndex);

    sortedItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item.itemHtml;
        li.addEventListener('click', () => {
            document.getElementById('selectButtonClassPO').innerText = item.item;
            toggleSearchContainerClassPO();
        });
        ul.appendChild(li);
    });
}

function toggleSearchContainerClassPO() {
    const container = document.getElementById('searchContainerClassPO');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
}



//Поиск для ПАК
// Обработчик кнопки Выбрать
document.getElementById('selectButtonRegionPAK').onclick = searchListRegionPAK;

//Работа поиска Регионы
function searchListRegionPAK() {
    searchListRegionGeneral('searchInputRegionPAK', 'listContainerRegionPAK', 'selectButtonRegionPAK', toggleSearchContainerRegionPAK);
}

function toggleSearchContainerRegionPAK() {
    const container = document.getElementById('searchContainerRegionPAK');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
}

//Работа поиска Отрасль
function searchListExperience() {

    const listItemsTypeExperience = [
        "Приборостроение",
        "Медицина",
        "Наука",
        "Геофизическое моделирование и обработка исследований",
        "Образование",
        "Умный дом",
        "Банки и финансы",
        "Универсальное решение",
        "Колл-центры",
        "Телекоммуникации"
    ];


    const input = document.getElementById('searchInputExperience');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById('listContainerExperience');
    ul.innerHTML = '';

    const sortedItems = listItemsTypeExperience
        .map(item => {
            const matchIndex = item.toUpperCase().indexOf(filter);
            if (matchIndex !== -1) {
                const beforeMatch = item.substring(0, matchIndex);
                const matchText = item.substring(matchIndex, matchIndex + filter.length);
                const afterMatch = item.substring(matchIndex + filter.length);
                return {
                    item,
                    itemHtml: beforeMatch + '<span class="highlight">' + matchText + '</span>' + afterMatch,
                    matchIndex
                };
            }
            return { item, matchIndex: -1 };
        })
        .filter(item => item.matchIndex !== -1)
        .sort((a, b) => a.matchIndex - b.matchIndex);

    sortedItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item.itemHtml;
        li.addEventListener('click', () => {
            document.getElementById('selectButtonExperience').innerText = item.item;
            toggleSearchContainerExperience();
        });
        ul.appendChild(li);
    });
}

function toggleSearchContainerExperience() {
    const container = document.getElementById('searchContainerExperience');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
}



//новый поиск
//Обработчик кнопки ПО Регионы

document.getElementById('clickPOR').onclick = clickPOR;

function clickPOR() {
    const searchInput = document.getElementById('search-input');
    const dropdownList = document.getElementById('dropdown-list');
    const selectedTagsContainer = document.getElementById('selected-tags');
    const dropdown = document.getElementById('dropdown');
    const noResults = document.getElementById('no-results');

    const regions = [
        "Вся Россия",
        "Республика Адыгея",
        "Республика Алтай",
        "Республика Башкортостан",
        "Республика Бурятия",
        "Республика Дагестан",
        "Республика Ингушетия",
        "Кабардино-Балкарская Республика",
        "Республика Калмыкия",
        "Карачаево-Черкесская Республика",
        "Республика Карелия",
        "Республика Коми",
        "Республика Крым",
        "Республика Марий Эл",
        "Республика Мордовия",
        "Республика Саха (Якутия)",
        "Республика Северная Осетия - Алания",
        "Республика Татарстан",
        "Республика Тыва",
        "Удмуртская Республика",
        "Республика Хакасия",
        "Чеченская Республика",
        "Чувашская Республика",
        "Алтайский край",
        "Забайкальский край",
        "Камчатский край",
        "Краснодарский край",
        "Красноярский край",
        "Пермский край",
        "Приморский край",
        "Ставропольский край",
        "Хабаровский край",
        "Амурская область",
        "Архангельская область",
        "Астраханская область",
        "Белгородская область",
        "Брянская область",
        "Владимирская область",
        "Волгоградская область",
        "Вологодская область",
        "Воронежская область",
        "Запорожская область",
        "Ивановская область",
        "Иркутская область",
        "Калининградская область",
        "Калужская область",
        "Кемеровская область",
        "Кировская область",
        "Костромская область",
        "Курганская область",
        "Курская область",
        "Ленинградская область",
        "Липецкая область",
        "Магаданская область",
        "Московская область",
        "Мурманская область",
        "Нижегородская область",
        "Новгородская область",
        "Новосибирская область",
        "Омская область",
        "Оренбургская область",
        "Орловская область",
        "Пензенская область",
        "Псковская область",
        "Ростовская область",
        "Рязанская область",
        "Самарская область",
        "Саратовская область",
        "Сахалинская область",
        "Свердловская область",
        "Смоленская область",
        "Тамбовская область",
        "Тверская область",
        "Томская область",
        "Тульская область",
        "Тюменская область",
        "Ульяновская область",
        "Херсонская область",
        "Челябинская область",
        "Ярославская область",
        "Москва",
        "Санкт-Петербург",
        "Еврейская автономная область",
        "Ненецкий автономный округ",
        "Ханты-Мансийский автономный округ - Югра",
        "Чукотский автономный округ",
        "Ямало-Ненецкий автономный округ",
        "Донецкая народная республика",
        "Луганская народная республика"

    ];

    function populateDropdown() {
        const filter = searchInput.value.toUpperCase();
        dropdownList.innerHTML = '';
        const sortedItems = regions
            .map(region => {
                const matchIndex = region.toUpperCase().indexOf(filter);
                if (matchIndex !== -1) {
                    const beforeMatch = region.substring(0, matchIndex);
                    const matchText = region.substring(matchIndex, matchIndex + filter.length);
                    const afterMatch = region.substring(matchIndex + filter.length);
                    return {
                        region,
                        itemHtml: beforeMatch + '<span class="highlight">' + matchText + '</span>' + afterMatch,
                        matchIndex
                    };
                }
                return { region, matchIndex: -1 };
            })
            .filter(item => item.matchIndex !== -1)
            .sort((a, b) => a.matchIndex - b.matchIndex);

        sortedItems.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item.itemHtml;
            li.setAttribute('data-value', item.region);
            li.addEventListener('click', () => {
                addTag(item.region);
                dropdown.style.display = 'none';
                searchInput.value = '';
            });
            dropdownList.appendChild(li);
        });

        noResults.style.display = sortedItems.length ? 'none' : 'block';
    }

    function addTag(value) {
        if (value && !isTagSelected(value)) {
            const tag = document.createElement('div');
            tag.className = 'tag';
            tag.textContent = value;
            tag.addEventListener('click', () => {
                tag.remove();
                updateDropdown();
                updateSearchInput();
            });
            selectedTagsContainer.appendChild(tag);
            updateDropdown();
            updateSearchInput();
        }
    }

    function isTagSelected(value) {
        return Array.from(selectedTagsContainer.getElementsByClassName('tag'))
            .some(tag => tag.textContent === value);
    }

    function updateSearchInput() {
        const tags = Array.from(selectedTagsContainer.getElementsByClassName('tag'));
        searchInput.value = tags.map(tag => tag.textContent).join(' ');
    }

    searchInput.addEventListener('focus', () => {
        populateDropdown();
        dropdown.style.display = 'block';
    });

    searchInput.addEventListener('input', () => {
        populateDropdown();
    });

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const inputValue = searchInput.value.trim();
            if (inputValue) {
                selectFirstMatchingRegion(inputValue);
                searchInput.value = '';
            }
        }
    });

    document.addEventListener('click', (event) => {
        if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });

    populateDropdown();
    dropdown.style.display = 'block';
}

//Обработчик ПО название класса
document.getElementById('clickPONAME').onclick = clickPONAME;


function clickPONAME() {
    const searchInput = document.getElementById('search-input-1');
    const dropdownList = document.getElementById('dropdown-list-1');
    const selectedTagsContainer = document.getElementById('selected-tags-1');
    const dropdown = document.getElementById('dropdown-1');
    const noResults = document.getElementById('no-results-1');

    const listItemsNameClassPO = [
        "Инструменты обработки, анализа и распознавания изображений",
        "Программное обеспечение интернета вещей, робототехники и сенсорики",
        "Встроенные прикладные программы",
        "Программное обеспечение для решения отраслевых задач в области информации и связи",
    ];

    // const listItemsNameClassPO = [
    //     'Лингвистическое программное обеспечение',
    //     'Отраслевое прикладное программное обеспечение',
    //     'Офисное программное обеспечение',
    //     'Прикладное программное обеспечение',
    //     'Промышленное программное обеспечение',
    //     'Системное программное обеспечение',
    //     'Средства анализа данных',
    //     'Средства обеспечения информационной безопасности',
    //     'Средства обработки и визуализации массивов данных',
    //     'Средства разработки программного обеспечения',
    //     'Средства управления процессами организации',
    //     'Встроенное программное обеспечение'
    // ];

    function populateDropdown() {
        const filter = searchInput.value.toUpperCase();
        dropdownList.innerHTML = '';
        const sortedItems = listItemsNameClassPO
            .map(region => {
                const matchIndex = region.toUpperCase().indexOf(filter);
                if (matchIndex !== -1) {
                    const beforeMatch = region.substring(0, matchIndex);
                    const matchText = region.substring(matchIndex, matchIndex + filter.length);
                    const afterMatch = region.substring(matchIndex + filter.length);
                    return {
                        region,
                        itemHtml: beforeMatch + '<span class="highlight">' + matchText + '</span>' + afterMatch,
                        matchIndex
                    };
                }
                return { region, matchIndex: -1 };
            })
            .filter(item => item.matchIndex !== -1)
            .sort((a, b) => a.matchIndex - b.matchIndex);

        sortedItems.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item.itemHtml;
            li.setAttribute('data-value', item.region);
            li.addEventListener('click', () => {
                addTag(item.region);
                dropdown.style.display = 'none';
                searchInput.value = '';
            });
            dropdownList.appendChild(li);
        });

        noResults.style.display = sortedItems.length ? 'none' : 'block';
    }

    function addTag(value) {
        if (value && !isTagSelected(value)) {
            const tag = document.createElement('div');
            tag.className = 'tag';
            tag.textContent = value;
            tag.addEventListener('click', () => {
                tag.remove();
                updateDropdown();
                updateSearchInput();
            });
            selectedTagsContainer.appendChild(tag);
            updateDropdown();
            updateSearchInput();
        }
    }

    function isTagSelected(value) {
        return Array.from(selectedTagsContainer.getElementsByClassName('tag'))
            .some(tag => tag.textContent === value);
    }

    function updateSearchInput() {
        const tags = Array.from(selectedTagsContainer.getElementsByClassName('tag'));
        searchInput.value = tags.map(tag => tag.textContent).join(' ');
    }

    searchInput.addEventListener('focus', () => {
        populateDropdown();
        dropdown.style.display = 'block';
    });

    searchInput.addEventListener('input', () => {
        populateDropdown();
    });

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const inputValue = searchInput.value.trim();
            if (inputValue) {
                selectFirstMatchingRegion(inputValue);
                searchInput.value = '';
            }
        }
    });

    document.addEventListener('click', (event) => {
        if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });

    populateDropdown();
    dropdown.style.display = 'block';
}

//Обработчик ПО отрасль
document.getElementById('clickPOOTRASL').onclick = clickPOOTRASL;


function clickPOOTRASL() {
    const searchInput = document.getElementById('search-input-2');
    const dropdownList = document.getElementById('dropdown-list-2');
    const selectedTagsContainer = document.getElementById('selected-tags-2');
    const dropdown = document.getElementById('dropdown-2');
    const noResults = document.getElementById('no-results-2');

    const listItemsTypeExperience = [
        "Аренда",
        "Архитектура",
        "Банки и финансы",
        "Бюджетные учреждения",
        "Ветеринарная медицина",
        "Геодезия и картография",
        "Геофизическое моделирование и обработка исследований",
        "Госуслуги",
        "Добывающая промышленность",
        "IT",
        "Инструмент для разработчика",
        "Колл-центры",
        "Машиностроение",
        "Медицина",
        "Музеи",
        "Наука",
        "Образование",
        "Общественное питание",
        "Органы власти",
        "Пищевая промышленность",
        "Приборостроение",
        "Проектирование/Конструирование",
        "Производство",
        "Реклама",
        "Сельское хозяйство",
        "Склады, логистика",
        "Страхование",
        "Строительство",
        "Телевидение, радиовещание",
        "Телекоммуникации",
        "Торговля",
        "Транспорт",
        "Турбизнес",
        "Умный город",
        "Умный дом",
        "Универсальное решение",
        "Управление ЖКХ",
        "Управление медицинской организацией",
        "Управление финансами",
        "Фармакология и фармацевтика",
        "Энергетика"
    ];
    

    function populateDropdown() {
        const filter = searchInput.value.toUpperCase();
        dropdownList.innerHTML = '';
        const sortedItems = listItemsTypeExperience 
            .map(region => {
                const matchIndex = region.toUpperCase().indexOf(filter);
                if (matchIndex !== -1) {
                    const beforeMatch = region.substring(0, matchIndex);
                    const matchText = region.substring(matchIndex, matchIndex + filter.length);
                    const afterMatch = region.substring(matchIndex + filter.length);
                    return {
                        region,
                        itemHtml: beforeMatch + '<span class="highlight">' + matchText + '</span>' + afterMatch,
                        matchIndex
                    };
                }
                return { region, matchIndex: -1 };
            })
            .filter(item => item.matchIndex !== -1)
            .sort((a, b) => a.matchIndex - b.matchIndex);

        sortedItems.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item.itemHtml;
            li.setAttribute('data-value', item.region);
            li.addEventListener('click', () => {
                addTag(item.region);
                dropdown.style.display = 'none';
                searchInput.value = '';
            });
            dropdownList.appendChild(li);
        });

        noResults.style.display = sortedItems.length ? 'none' : 'block';
    }

    function addTag(value) {
        if (value && !isTagSelected(value)) {
            const tag = document.createElement('div');
            tag.className = 'tag';
            tag.textContent = value;
            tag.addEventListener('click', () => {
                tag.remove();
                updateDropdown();
                updateSearchInput();
            });
            selectedTagsContainer.appendChild(tag);
            updateDropdown();
            updateSearchInput();
        }
    }

    function isTagSelected(value) {
        return Array.from(selectedTagsContainer.getElementsByClassName('tag'))
            .some(tag => tag.textContent === value);
    }

    function updateSearchInput() {
        const tags = Array.from(selectedTagsContainer.getElementsByClassName('tag'));
        searchInput.value = tags.map(tag => tag.textContent).join(' ');
    }

    searchInput.addEventListener('focus', () => {
        populateDropdown();
        dropdown.style.display = 'block';
    });

    searchInput.addEventListener('input', () => {
        populateDropdown();
    });

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const inputValue = searchInput.value.trim();
            if (inputValue) {
                selectFirstMatchingRegion(inputValue);
                searchInput.value = '';
            }
        }
    });

    document.addEventListener('click', (event) => {
        if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });

    populateDropdown();
    dropdown.style.display = 'block';
}

//Обработчик кнопки ПАК Регионы

document.getElementById('clickPAKR').onclick = clickPAKR;

function clickPAKR() {
    const searchInput = document.getElementById('search-input-3');
    const dropdownList = document.getElementById('dropdown-list-3');
    const selectedTagsContainer = document.getElementById('selected-tags-3');
    const dropdown = document.getElementById('dropdown-3');
    const noResults = document.getElementById('no-results-3');

    const regions = [
        "Вся Россия",
        "Республика Адыгея",
        "Республика Алтай",
        "Республика Башкортостан",
        "Республика Бурятия",
        "Республика Дагестан",
        "Республика Ингушетия",
        "Кабардино-Балкарская Республика",
        "Республика Калмыкия",
        "Карачаево-Черкесская Республика",
        "Республика Карелия",
        "Республика Коми",
        "Республика Крым",
        "Республика Марий Эл",
        "Республика Мордовия",
        "Республика Саха (Якутия)",
        "Республика Северная Осетия - Алания",
        "Республика Татарстан",
        "Республика Тыва",
        "Удмуртская Республика",
        "Республика Хакасия",
        "Чеченская Республика",
        "Чувашская Республика",
        "Алтайский край",
        "Забайкальский край",
        "Камчатский край",
        "Краснодарский край",
        "Красноярский край",
        "Пермский край",
        "Приморский край",
        "Ставропольский край",
        "Хабаровский край",
        "Амурская область",
        "Архангельская область",
        "Астраханская область",
        "Белгородская область",
        "Брянская область",
        "Владимирская область",
        "Волгоградская область",
        "Вологодская область",
        "Воронежская область",
        "Запорожская область",
        "Ивановская область",
        "Иркутская область",
        "Калининградская область",
        "Калужская область",
        "Кемеровская область",
        "Кировская область",
        "Костромская область",
        "Курганская область",
        "Курская область",
        "Ленинградская область",
        "Липецкая область",
        "Магаданская область",
        "Московская область",
        "Мурманская область",
        "Нижегородская область",
        "Новгородская область",
        "Новосибирская область",
        "Омская область",
        "Оренбургская область",
        "Орловская область",
        "Пензенская область",
        "Псковская область",
        "Ростовская область",
        "Рязанская область",
        "Самарская область",
        "Саратовская область",
        "Сахалинская область",
        "Свердловская область",
        "Смоленская область",
        "Тамбовская область",
        "Тверская область",
        "Томская область",
        "Тульская область",
        "Тюменская область",
        "Ульяновская область",
        "Херсонская область",
        "Челябинская область",
        "Ярославская область",
        "Москва",
        "Санкт-Петербург",
        "Еврейская автономная область",
        "Ненецкий автономный округ",
        "Ханты-Мансийский автономный округ - Югра",
        "Чукотский автономный округ",
        "Ямало-Ненецкий автономный округ",
        "Донецкая народная республика",
        "Луганская народная республика"

    ];

    function populateDropdown() {
        const filter = searchInput.value.toUpperCase();
        dropdownList.innerHTML = '';
        const sortedItems = regions
            .map(region => {
                const matchIndex = region.toUpperCase().indexOf(filter);
                if (matchIndex !== -1) {
                    const beforeMatch = region.substring(0, matchIndex);
                    const matchText = region.substring(matchIndex, matchIndex + filter.length);
                    const afterMatch = region.substring(matchIndex + filter.length);
                    return {
                        region,
                        itemHtml: beforeMatch + '<span class="highlight">' + matchText + '</span>' + afterMatch,
                        matchIndex
                    };
                }
                return { region, matchIndex: -1 };
            })
            .filter(item => item.matchIndex !== -1)
            .sort((a, b) => a.matchIndex - b.matchIndex);

        sortedItems.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item.itemHtml;
            li.setAttribute('data-value', item.region);
            li.addEventListener('click', () => {
                addTag(item.region);
                dropdown.style.display = 'none';
                searchInput.value = '';
            });
            dropdownList.appendChild(li);
        });

        noResults.style.display = sortedItems.length ? 'none' : 'block';
    }

    function addTag(value) {
        if (value && !isTagSelected(value)) {
            const tag = document.createElement('div');
            tag.className = 'tag';
            tag.textContent = value;
            tag.addEventListener('click', () => {
                tag.remove();
                updateDropdown();
                updateSearchInput();
            });
            selectedTagsContainer.appendChild(tag);
            updateDropdown();
            updateSearchInput();
        }
    }

    function isTagSelected(value) {
        return Array.from(selectedTagsContainer.getElementsByClassName('tag'))
            .some(tag => tag.textContent === value);
    }

    function updateSearchInput() {
        const tags = Array.from(selectedTagsContainer.getElementsByClassName('tag'));
        searchInput.value = tags.map(tag => tag.textContent).join(' ');
    }

    searchInput.addEventListener('focus', () => {
        populateDropdown();
        dropdown.style.display = 'block';
    });

    searchInput.addEventListener('input', () => {
        populateDropdown();
    });

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const inputValue = searchInput.value.trim();
            if (inputValue) {
                selectFirstMatchingRegion(inputValue);
                searchInput.value = '';
            }
        }
    });

    document.addEventListener('click', (event) => {
        if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });

    populateDropdown();
    dropdown.style.display = 'block';
}

//Обработчик ПАК название класса
document.getElementById('clickPAKNAME').onclick = clickPAKNAME;


function clickPAKNAME() {
    const searchInput = document.getElementById('search-input-4');
    const dropdownList = document.getElementById('dropdown-list-4');
    const selectedTagsContainer = document.getElementById('selected-tags-4');
    const dropdown = document.getElementById('dropdown-4');
    const noResults = document.getElementById('no-results-4');

    const listItemsNameClassPAK = [
        "Программно-аппаратные комплексы сбора, анализа и визуализации информации различных сред и процессов",
        "Программно-аппаратные комплексы организации обучения и контроля навыков",
        "Программно-аппаратные комплексы системы хранения данных",
        "Программно-аппаратные комплексы автоматизированного управления технологическим процессом",
        "Программно-аппаратные комплексы мониторинга и управления",
    ];

    function populateDropdown() {
        const filter = searchInput.value.toUpperCase();
        dropdownList.innerHTML = '';
        const sortedItems = listItemsNameClassPAK
            .map(region => {
                const matchIndex = region.toUpperCase().indexOf(filter);
                if (matchIndex !== -1) {
                    const beforeMatch = region.substring(0, matchIndex);
                    const matchText = region.substring(matchIndex, matchIndex + filter.length);
                    const afterMatch = region.substring(matchIndex + filter.length);
                    return {
                        region,
                        itemHtml: beforeMatch + '<span class="highlight">' + matchText + '</span>' + afterMatch,
                        matchIndex
                    };
                }
                return { region, matchIndex: -1 };
            })
            .filter(item => item.matchIndex !== -1)
            .sort((a, b) => a.matchIndex - b.matchIndex);

        sortedItems.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item.itemHtml;
            li.setAttribute('data-value', item.region);
            li.addEventListener('click', () => {
                addTag(item.region);
                dropdown.style.display = 'none';
                searchInput.value = '';
            });
            dropdownList.appendChild(li);
        });

        noResults.style.display = sortedItems.length ? 'none' : 'block';
    }

    function addTag(value) {
        if (value && !isTagSelected(value)) {
            const tag = document.createElement('div');
            tag.className = 'tag';
            tag.textContent = value;
            tag.addEventListener('click', () => {
                tag.remove();
                updateDropdown();
                updateSearchInput();
            });
            selectedTagsContainer.appendChild(tag);
            updateDropdown();
            updateSearchInput();
        }
    }

    function isTagSelected(value) {
        return Array.from(selectedTagsContainer.getElementsByClassName('tag'))
            .some(tag => tag.textContent === value);
    }

    function updateSearchInput() {
        const tags = Array.from(selectedTagsContainer.getElementsByClassName('tag'));
        searchInput.value = tags.map(tag => tag.textContent).join(' ');
    }

    searchInput.addEventListener('focus', () => {
        populateDropdown();
        dropdown.style.display = 'block';
    });

    searchInput.addEventListener('input', () => {
        populateDropdown();
    });

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const inputValue = searchInput.value.trim();
            if (inputValue) {
                selectFirstMatchingRegion(inputValue);
                searchInput.value = '';
            }
        }
    });

    document.addEventListener('click', (event) => {
        if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });

    populateDropdown();
    dropdown.style.display = 'block';
}

//Обработчик ПAK отрасль
document.getElementById('clickPAKOTRASL').onclick = clickPAKOTRASL;


function clickPAKOTRASL() {
    const searchInput = document.getElementById('search-input-5');
    const dropdownList = document.getElementById('dropdown-list-5');
    const selectedTagsContainer = document.getElementById('selected-tags-5');
    const dropdown = document.getElementById('dropdown-5');
    const noResults = document.getElementById('no-results-5');

    const listItemsTypeExperience = [
        "Аренда",
        "Архитектура",
        "Банки и финансы",
        "Бюджетные учреждения",
        "Ветеринарная медицина",
        "Геодезия и картография",
        "Геофизическое моделирование и обработка исследований",
        "Госуслуги",
        "Добывающая промышленность",
        "IT",
        "Инструмент для разработчика",
        "Колл-центры",
        "Машиностроение",
        "Медицина",
        "Музеи",
        "Наука",
        "Образование",
        "Общественное питание",
        "Органы власти",
        "Пищевая промышленность",
        "Приборостроение",
        "Проектирование/Конструирование",
        "Производство",
        "Реклама",
        "Сельское хозяйство",
        "Склады, логистика",
        "Страхование",
        "Строительство",
        "Телевидение, радиовещание",
        "Телекоммуникации",
        "Торговля",
        "Транспорт",
        "Турбизнес",
        "Умный город",
        "Умный дом",
        "Универсальное решение",
        "Управление ЖКХ",
        "Управление медицинской организацией",
        "Управление финансами",
        "Фармакология и фармацевтика",
        "Энергетика"
    ];
    

    function populateDropdown() {
        const filter = searchInput.value.toUpperCase();
        dropdownList.innerHTML = '';
        const sortedItems = listItemsTypeExperience 
            .map(region => {
                const matchIndex = region.toUpperCase().indexOf(filter);
                if (matchIndex !== -1) {
                    const beforeMatch = region.substring(0, matchIndex);
                    const matchText = region.substring(matchIndex, matchIndex + filter.length);
                    const afterMatch = region.substring(matchIndex + filter.length);
                    return {
                        region,
                        itemHtml: beforeMatch + '<span class="highlight">' + matchText + '</span>' + afterMatch,
                        matchIndex
                    };
                }
                return { region, matchIndex: -1 };
            })
            .filter(item => item.matchIndex !== -1)
            .sort((a, b) => a.matchIndex - b.matchIndex);

        sortedItems.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item.itemHtml;
            li.setAttribute('data-value', item.region);
            li.addEventListener('click', () => {
                addTag(item.region);
                dropdown.style.display = 'none';
                searchInput.value = '';
            });
            dropdownList.appendChild(li);
        });

        noResults.style.display = sortedItems.length ? 'none' : 'block';
    }

    function addTag(value) {
        if (value && !isTagSelected(value)) {
            const tag = document.createElement('div');
            tag.className = 'tag';
            tag.textContent = value;
            tag.addEventListener('click', () => {
                tag.remove();
                updateDropdown();
                updateSearchInput();
            });
            selectedTagsContainer.appendChild(tag);
            updateDropdown();
            updateSearchInput();
        }
    }

    function isTagSelected(value) {
        return Array.from(selectedTagsContainer.getElementsByClassName('tag'))
            .some(tag => tag.textContent === value);
    }

    function updateSearchInput() {
        const tags = Array.from(selectedTagsContainer.getElementsByClassName('tag'));
        searchInput.value = tags.map(tag => tag.textContent).join(' ');
    }

    searchInput.addEventListener('focus', () => {
        populateDropdown();
        dropdown.style.display = 'block';
    });

    searchInput.addEventListener('input', () => {
        populateDropdown();
    });

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const inputValue = searchInput.value.trim();
            if (inputValue) {
                selectFirstMatchingRegion(inputValue);
                searchInput.value = '';
            }
        }
    });

    document.addEventListener('click', (event) => {
        if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });

    populateDropdown();
    dropdown.style.display = 'block';
}

//Функция для бургер-меню
document.getElementById('myButton-burger-menu').onclick = myFunctionForMyButtonMenu();

function myFunctionForMyButtonMenu() {

    var myMenu = document.getElementById('burger-menu');


    if (myMenu.style.display === 'none') {
        myMenu.style.display = 'flex';
    } else {
        myMenu.style.display = 'none';
    }

}


//Для поп-аппа
// Функция для открытия модального окна
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex'; // Показываем модальное окно
    document.body.style.overflow = 'hidden'; // Отключаем скроллинг страницы
}

// Функция для закрытия модального окна
function closeModal(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) { // Проверяем, что клик был по фону
        modal.style.display = 'none'; // Скрываем модальное окно
        document.body.style.overflow = 'auto'; // Включаем скроллинг страницы
    }
}

//Для поп-аппа Спасибо
// Функция для открытия модального окна
function openModalsend() {
    const modal = document.getElementById('modalsend');
    modal.style.display = 'flex'; // Показываем модальное окно
    document.body.style.overflow = 'hidden'; // Отключаем скроллинг страницы
}

// Функция для закрытия модального окна
function closeModalsend(event) {
    const modal = document.getElementById('modalsend');
    if (event.target === modal) { // Проверяем, что клик был по фону
        modal.style.display = 'none'; // Скрываем модальное окно
        document.body.style.overflow = 'auto'; // Включаем скроллинг страницы
    }
}


function loadRegionContacts() {
    console.log('Функция загрузки данных вызывается');
    fetch('/region-contacts/info')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети или неправильный ответ');
            }
            return response.json();
        })
        .then(data => {
            
            const regionsContainer = document.getElementById('regions-container');
            if (!regionsContainer) {
                return;
            }

            // Добавляем элементы
            data.contacts.forEach(contact => {
                console.log('Обрабатываем контакт:', contact);
                const regContainer = document.createElement('div');
                regContainer.classList.add('reg-container');

                regContainer.innerHTML = `
                    <img src="../static/images/emblems/${contact.id}.png" style="width: 2.6vw; height: 2.6vw;">
                    <h2>${contact.region}</h2>
                    <div>
                        <h3>Контакты</h3>
                        <div style="display: flex;">
                            <p>${contact.email}</p>
                            <p style="margin-left: 1.875vw;">${contact.phone}</p>
                        </div>
                    </div>
                `;

                regionsContainer.appendChild(regContainer);
            });
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
        });
}