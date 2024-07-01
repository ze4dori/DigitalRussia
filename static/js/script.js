
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


// Предположим, что newNumber - это обновленное число, полученное от сервера
let newNumber = '12345';
document.getElementById('dynamicNumber').innerText = newNumber;
/*
// Сохраняем id активной кнопки
var activeButtonId = null;

function myFunctionClick(id) {
    var button = document.getElementById(id);

    // Если эта кнопка уже активна, ничего не делаем
    if (activeButtonId === id) {
        return;
    }

    // Если есть другая активная кнопка, сбрасываем ее стили
    if (activeButtonId) {
        var activeButton = document.getElementById(activeButtonId);
        activeButton.classList.remove('active');
        /*activeButton.style.color = "rgb(31 43 106/ 50%)"; // Исходный цвет текста
        activeButton.style.borderColor = "#F0F2FF"; // Исходный цвет обводки
    }

    // Делаем эту кнопку активной
    button.classList.add('active');
    /*button.style.color = "#1F2B6A";
    button.style.borderColor = "rgb(31 43 106/ 50%)";
    button.style.background = "#FFFFFF";

    // Обновляем id активной кнопки
    activeButtonId = id;
}
*/



function myFunctionClick(id) {

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

    // Обновляем id активной кнопки
    activeButtonId = id;
    sendActiveButtonId(activeButtonId)
    var myModal = document.getElementById('myModal');
    var myModalPAK = document.getElementById('myModalPAK');

    myModal.style.display = 'none';
    myModalPAK.style.display = 'none';
}

function sendActiveButtonId(active_button) {
    var request = new XMLHttpRequest();
    var params = 'active_button=' + active_button;
    
    request.open('POST', '/', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            console.log(request.responseText);
        }
    };
    
    request.send(params);

    request.onload = function() {
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

}
var activeButtonId = 'ButtonPAK'; //Не видит начальное значение global переменной !!!


// Обработчик кнопки Фильтр
document.getElementById('myButton').onclick = myFunction;

function myFunction() {
    //alert(activeButtonId); Для проверки значения

    // Если на экране отображается модальные окна, функция не выполняется
    var myITinfo = document.getElementById('myITinfo');
    var myList = document.getElementById('myList');

    if (myITinfo.style.display === 'block' || myList.style.display === 'block') {
        return;
    }

    var myModalPAK = document.getElementById('myModalPAK');
    var myModal = document.getElementById('myModal');
    

    if (myModal.style.display === 'none' || myModalPAK.style.display === 'none') {
        if (activeButtonId === 'ButtonPAK') {
            myModalPAK.style.display = 'block';  
        } else {
        myModal.style.display = 'block';
        }
    } else {
        myModal.style.display = 'none';
        myModalPAK.style.display = 'none';

    }

}

//ДЛЯ ОКНА ФИЛЬТРА ПО

document.getElementById('close').onclick = closeMyModal;
// Функция для закрытия окна и очистки полей ввода и чекбоксов
function closeMyModal() {
    // Закрываем окно

    var myModal = document.getElementById('myModal');
    myModal.style.display = 'none';

    var button = document.getElementById('myButton');
    // кнопка уже активна, вернем исходные стили
    button.classList.remove('active');

    // Вернуть selectButton к начальным значениям
    document.getElementById('selectButtonRegion').textContent = 'Вся Россия';
    document.getElementById('selectButtonClassPO').textContent = 'Выбрать';
    document.getElementById('selectButtonExperience').textContent = 'Выбрать';

    // Сбросить состояние чекбоксов
    document.getElementById('gosreg').checked = true;
    document.getElementById('AI').checked = false;
}

// Обработчик кнопки Сбросить фильтр
document.getElementById('myButtonB').onclick = myFunctionB;

function myFunctionB() {

    document.getElementById('selectButtonRegion').textContent = 'Вся Россия';
    document.getElementById('selectButtonClassPO').textContent = 'Выбрать';
    document.getElementById('selectButtonExperience').textContent = 'Выбрать';

    // Сбросить состояние чекбоксов
    document.getElementById('gosreg').checked = true;
    document.getElementById('AI').checked = false;

}

// Обработчик кнопки Применить (недописан)
document.getElementById('myButtonS').onclick = myFunctionS;

function myFunctionS() {
    var myModal = document.getElementById('myModal');
    myModal.style.display = 'none';

    var button = document.getElementById('myButton');
    // кнопка уже активна, вернем исходные стили
    button.classList.remove('active');

    var myList = document.getElementById('myList');
    if (myList.style.display === 'none' || myList.style.display === '') {
        myList.style.display = 'block';

    } else {
        myList.style.display = 'none';

    }

    var svgElement = document.getElementById("mySvg");
    var partOfSvg = document.getElementById("Krsn");
    var scale = 4; // измените это значение, чтобы установить коэффициент масштабирования

    // Добавьте это, чтобы установить плавную анимацию
    svgElement.style.transition = "transform 3s"; // измените это значение, чтобы установить продолжительность анимации

    svgElement.style.transform = "scale(" + scale + ") translateX(39%) translateY(-10%)";
    partOfSvg.style.fill = "rgba(80, 79, 217, 1)"; // чтобы установить новый цвет заливки

    //Для pop up
    // Задержка в 3 секунды перед показом блока
    setTimeout(function () {
        var svgContainer = document.getElementById('mySvgContainer');
        var krsnSvg = document.getElementById('Krsn');

        // Получить координаты элемента SVG
        //var svgRect = krsnSvg.getBoundingClientRect();

        // Установить координаты блока равными координатам элемента SVG
        //svgContainer.style.left = svgRect.left + 'px';
        //svgContainer.style.top = (svgRect.top - 150) + 'px';

        //В ручную для примера
        svgContainer.style.left = "45vw";
        svgContainer.style.top = "-45vh";
        var InfoInPopUp = document.getElementById('InfoInPopUp');
        //InfoInPopUp.style.left = "45vw";
        //InfoInPopUp.style.top = "-80vh";

        // Показать блок
        svgContainer.style.display = 'block';

    }, 3000);

    var region = document.getElementById('selectButtonRegion').innerText;
    var softwareclass = document.getElementById('selectButtonClassPO').innerText;
    var field = document.getElementById('selectButtonExperience').innerText;
    const gosreg = document.getElementById('gosreg');
    const ai = document.getElementById('AI');
    
    let errp;
    let software_ai

    if (gosreg.checked) {
        errp = 1
    } else {
        errp = 0
    }

    if (ai.checked) {
        software_ai = 1
    } else {
        software_ai = 0
    }

    const request = new XMLHttpRequest();
    request.open('POST', '/filterPO');
    request.setRequestHeader('Content-Type', 'application/json');
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            console.log(request.responseText);
        }
    };

    request.send(JSON.stringify({ region, softwareclass, field, errp, software_ai }));

    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
            var response = JSON.parse(request.response);
            console.log(response);
            updateHTML(response);
        } else {
            alert('Ошибка при отправке запроса!');
        }
    };
}


//ДЛЯ ОКНА ФИЛЬТРА ПАК

document.getElementById('closePAK').onclick = closeMyModalPAK;
// Функция для закрытия окна и очистки полей ввода и чекбоксов
function closeMyModalPAK() {
    // Закрываем окно

    var myModal = document.getElementById('myModalPAK');
    myModal.style.display = 'none';

    var button = document.getElementById('myButton');
    // кнопка уже активна, вернем исходные стили
    button.classList.remove('active');

    // Вернуть selectButton к начальным значениям
    document.getElementById('selectButtonRegionPAK').textContent = 'Вся Россия';
    document.getElementById('selectButtonClassPAK').textContent = 'Выбрать';
    document.getElementById('selectButtonExperiencePAK').textContent = 'Выбрать';

    // Сбросить состояние чекбоксов
    document.getElementById('gosregPAK').checked = true;
}

// Обработчик кнопки Сбросить фильтр
document.getElementById('myButtonBPAK').onclick = myFunctionBPAK;

function myFunctionBPAK() {
    //var vhInPx = window.innerHeight / 100;

    // Вернуть selectButton к начальным значениям
    document.getElementById('selectButtonRegionPAK').textContent = 'Вся Россия';
    document.getElementById('selectButtonClassPAK').textContent = 'Выбрать';
    document.getElementById('selectButtonExperiencePAK').textContent = 'Выбрать';

    // Сбросить состояние чекбоксов
    document.getElementById('gosregPAK').checked = true;

}


// Обработчик кнопки Применить (недописан)
document.getElementById('myButtonSPAK').onclick = myFunctionSPAK;

function myFunctionSPAK() {
    var myModalPAK = document.getElementById('myModalPAK');
    myModalPAK.style.display = 'none';

    var button = document.getElementById('myButton');
    // кнопка уже активна, вернем исходные стили
    button.classList.remove('active');

    var myList = document.getElementById('myList');
    if (myList.style.display === 'none' || myList.style.display === '') {
        myList.style.display = 'block';

    } else {
        myList.style.display = 'none';

    }

    var svgElement = document.getElementById("mySvg");
    var partOfSvg = document.getElementById("Krsn");
    var scale = 4; // измените это значение, чтобы установить коэффициент масштабирования

    // Добавьте это, чтобы установить плавную анимацию
    svgElement.style.transition = "transform 3s"; // измените это значение, чтобы установить продолжительность анимации

    svgElement.style.transform = "scale(" + scale + ") translateX(39%) translateY(-10%)";
    partOfSvg.style.fill = "rgba(80, 79, 217, 1)"; // чтобы установить новый цвет заливки

    //Для pop up
    // Задержка в 3 секунды перед показом блока
    setTimeout(function () {
        var svgContainer = document.getElementById('mySvgContainer');
        var krsnSvg = document.getElementById('Krsn');

        // Получить координаты элемента SVG
        //var svgRect = krsnSvg.getBoundingClientRect();

        // Установить координаты блока равными координатам элемента SVG
        //svgContainer.style.left = svgRect.left + 'px';
        //svgContainer.style.top = (svgRect.top - 150) + 'px';

        //В ручную для примера
        svgContainer.style.left = "45vw";
        svgContainer.style.top = "-45vh";
        var InfoInPopUp = document.getElementById('InfoInPopUp');
        //InfoInPopUp.style.left = "45vw";
        //InfoInPopUp.style.top = "-80vh";

        // Показать блок
        svgContainer.style.display = 'block';

    }, 3000);

    var region = document.getElementById('selectButtonRegionPAK').innerText;
    var hardwareclass = document.getElementById('selectButtonClassPAK').innerText;
    var field = document.getElementById('selectButtonExperiencePAK').innerText;
    const gosreg = document.getElementById('gosregPAK');
    
    let errp;

    if (gosreg.checked) {
        errp = 1
    } else {
        errp = 0
    }

    const request = new XMLHttpRequest();
    request.open('POST', '/filterPAK');
    request.setRequestHeader('Content-Type', 'application/json');
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            console.log(request.responseText);
        }
    };

    request.send(JSON.stringify({ region, hardwareclass, field, errp }));

    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
            var response = JSON.parse(request.response);
            console.log(response);
            updateHTML(response);
        } else {
            alert('Ошибка при отправке запроса!');
        }
    };
}

function updateHTML(response) {
    const listContainer = document.querySelector('.list-items');
    let countCompany = response.length;

    response.forEach(item => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
    
        listItem.innerHTML = `
            <div class="container">
                <div class="icon_container">
                    <img src="static/images/icon_IT_novazy.png" alt="Иконка">
                </div>
                <div class="info_container">
                    <h2>${item.company_name}</h2>
                    <p>${item.position_company}</p>
                    <p class="location">${item.address}</p>
                </div>
            </div>
        `;
        listContainer.appendChild(listItem);
    });

    document.getElementById("countCompany").innerHTML = countCompany;
}

//Обработчик кнопки назад на списке
function myFunctionBack() {
    var list = document.getElementById("myList");
    list.style.display = "none";

    var myModal = document.getElementById('myModal');
    myModal.style.display = 'block';

    var button = document.getElementById('myButton');
    button.classList.toggle('active');

    var listItems = document.getElementById("list-items")
    while (listItems.firstChild) {
        listItems.removeChild(listItems.firstChild)
    }
}


//Появление блока инфо
function myFunctionInfo() {
    var myITinfo = document.getElementById('myITinfo');
    var myBlock = document.getElementById('myBlock');

    if (myITinfo.style.display === 'none' || myITinfo.style.display === '') {
        myITinfo.style.display = 'block';
        myBlock.style.backgroundColor = 'rgba(240, 242, 255, 1)'; // Изменяем цвет на голубой
    } else {
        myITinfo.style.display = 'none';
        myBlock.style.backgroundColor = ''; // Возвращаем начальный цвет
    }
}

document.getElementById('close').onclick = closeMyModalInfo;
// Функция для закрытия окна инфо
function closeMyModalInfo() {
    // Закрываем окно

    var myModal = document.getElementById('myITinfo');
    myModal.style.display = 'none';
    myITinfo.style.display = 'none';
    myBlock.style.backgroundColor = ''; // Возвращаем начальный цвет  
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
function searchListRegion() {
    const listItemsRegion = [
        "Вся Россия",
        "Республика Адыгея",
        "Республика Башкортостан",
        "Республика Бурятия",
        "Республика Алтай",
        "Республика Дагестан",
        "Республика Ингушетия",
        "Кабардино-Балкарская",
        "Республика Калмыкия",
        "Республика Карачаево-Черкесия",
        "Республика Карелия",
        "Краснодарский край"
    ];

    const input = document.getElementById('searchInputRegion');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById('listContainerRegion');
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
            document.getElementById('selectButtonRegion').innerText = item.item;
            toggleSearchContainerRegion();
        });
        ul.appendChild(li);
    });
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
        "Выбрать",
        "11.06 Инструменты обработки, анализа и распознавания изображений",
        "01.04 Программное обеспечение интернета вещей, робототехники и сенсорики",
        "01.03 Встроенные прикладные программы",
        "12.10 Программное обеспечение для решения отраслевых задач в области информации и связи",
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
    const listItemsRegion = [
        "Вся Россия",
        "Республика Адыгея",
        "Республика Башкортостан",
        "Республика Бурятия",
        "Республика Алтай",
        "Республика Дагестан",
        "Республика Ингушетия",
        "Кабардино-Балкарская",
        "Республика Калмыкия",
        "Республика Карачаево-Черкесия",
        "Республика Карелия",
        "Краснодарский край"
    ];

    const input = document.getElementById('searchInputRegionPAK');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById('listContainerRegionPAK');
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
            document.getElementById('selectButtonRegionPAK').innerText = item.item;
            toggleSearchContainerRegionPAK();
        });
        ul.appendChild(li);
    });
}

function toggleSearchContainerRegionPAK() {
    const container = document.getElementById('searchContainerRegionPAK');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
}


// Обработчик кнопки Выбрать
document.getElementById('selectButtonClassPAK').onclick = searchListClassPAK;

//Работа поиска Класс ПАК
function searchListClassPAK() {
    const listItemsNameClassPAK = [
        "Выбрать",
        "03.14 Программно-аппаратные комплексы сбора, анализа и визуализации информации различных сред и процессов",
        "17.01 Программно-аппаратные комплексы организации обучения и контроля навыков",
        "02.01 Программно-аппаратные комплексы системы хранения данных",
        "11.05 Программно-аппаратные комплексы автоматизированного управления технологическим процессом",
        "03.02 Программно-аппаратные комплексы мониторинга и управления",
    ];

    const input = document.getElementById('searchInputClassPAK');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById('listContainerClassPAK');
    ul.innerHTML = '';

    const sortedItems = listItemsNameClassPAK
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
            document.getElementById('selectButtonClassPAK').innerText = item.item;
            toggleSearchContainerClassPAK();
        });
        ul.appendChild(li);
    });
}

function toggleSearchContainerClassPAK() {
    const container = document.getElementById('searchContainerClassPAK');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
}


// Обработчик кнопки Выбрать
document.getElementById('selectButtonExperiencePAK').onclick = searchListExperiencePAK;

//Работа поиска Отрасль
function searchListExperiencePAK() {

    const listItemsTypeExperience = [
        "Выбрать",
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


    const input = document.getElementById('searchInputExperiencePAK');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById('listContainerExperiencePAK');
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
            document.getElementById('selectButtonExperiencePAK').innerText = item.item;
            toggleSearchContainerExperiencePAK();
        });
        ul.appendChild(li);
    });
}

function toggleSearchContainerExperiencePAK() {
    const container = document.getElementById('searchContainerExperiencePAK');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
}