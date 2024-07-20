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

}
window.activeButtonId = 'ButtonPAK'; //Не видит начальное значение global переменной !!!

// Обработчик кнопки Фильтр
document.getElementById('myButton').onclick = myFunction;

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

function hideFilterFunction(){
    var Filter = document.getElementById('myModal');
    var button = document.getElementById('hide');

    if (myModal.style.right === '1.04vw'){
        Filter.style.right = "-30vw";
        button.style.right = "0vw"; 
    } else {
        Filter.style.right = "1.04vw";
        button.style.right = "27vw"; 
    }
}
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
    var selectButton = document.getElementById('selectButtonRegion');
    // selectButton.textContent = 'Вся Россия';

    var svgCode = '<svg class="strelka" xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M13 7L7 1L1 7" stroke="#1F2B6A" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    selectButton.innerHTML = 'Вся Россия' + svgCode;

    var selectButton = document.getElementById('selectButtonClassPO');
    selectButton.innerHTML = 'Выбрать' + svgCode;

    var selectButton = document.getElementById('selectButtonExperience');
    selectButton.innerHTML = 'Выбрать' + svgCode;

    // Сбросить состояние чекбоксов
    document.getElementById('gosreg').checked = true;
    document.getElementById('AI').checked = false;

    // Скрыть блок с классом "searchContainer"
    const container1 = document.getElementById('searchContainerRegion');
    container1.style.display = container1.style.display = 'none';
    const container2 = document.getElementById('searchContainerClassPO');
    container2.style.display = container2.style.display = 'none';
    const container3 = document.getElementById('searchContainerExperience');
    container3.style.display = container3.style.display = 'none'; 
}

// Обработчик кнопки Сбросить фильтр
document.getElementById('myButtonB').onclick = myFunctionB;

function myFunctionB() {

    var selectButton = document.getElementById('selectButtonRegion');
    // selectButton.textContent = 'Вся Россия';

    var svgCode = '<svg class="strelka" xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M13 7L7 1L1 7" stroke="#1F2B6A" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    selectButton.innerHTML = 'Вся Россия' + svgCode;

    var selectButton = document.getElementById('selectButtonClassPO');
    selectButton.innerHTML = 'Выбрать' + svgCode;

    var selectButton = document.getElementById('selectButtonExperience');
    selectButton.innerHTML = 'Выбрать' + svgCode;

    // Сбросить состояние чекбоксов
    document.getElementById('gosreg').checked = true;
    document.getElementById('AI').checked = false;

    // Скрыть блок с классом "searchContainer"
    const container1 = document.getElementById('searchContainerRegion');
    container1.style.display = container1.style.display = 'none';
    const container2 = document.getElementById('searchContainerClassPO');
    container2.style.display = container2.style.display = 'none';
    const container3 = document.getElementById('searchContainerExperience');
    container3.style.display = container3.style.display = 'none';
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

    var region = document.getElementById('selectButtonRegion').innerText.trim();
    var softwareclass = document.getElementById('selectButtonClassPO').innerText.trim();
    var field = document.getElementById('selectButtonExperience').innerText.trim();
    const gosreg = document.getElementById('gosreg');
    const ai = document.getElementById('AI');

    let errp;
    let software_ai;

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
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            console.log(request.responseText);
        }
    };

    request.send(JSON.stringify({ region, softwareclass, field, errp, software_ai }));

    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            var response = JSON.parse(request.response);
            console.log(response);
            updateHTML(response);
        } else {
            alert('Ошибка при отправке запроса!');
        }
    };
}

// Привязываем обработчик события к списку
const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
    item.addEventListener('click', myFunctionInfo);
});

//ДЛЯ ОКНА ФИЛЬТРА ПАК

document.getElementById('hidePAK').onclick = hideFilterFunctionPAK();

function hideFilterFunctionPAK(){
    var Filter = document.getElementById('myModalPAK');
    var button = document.getElementById('hidePAK');

    if (myModalPAK.style.right === '1.04vw'){
        Filter.style.right = "-30vw";
        button.style.right = "0vw"; 
    } else {
        Filter.style.right = "1.04vw";
        button.style.right = "27vw"; 
    }
}

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
    var selectButton = document.getElementById('selectButtonRegionPAK');
    // selectButton.textContent = 'Вся Россия';

    var svgCode = '<svg class="strelka" xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M13 7L7 1L1 7" stroke="#1F2B6A" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    selectButton.innerHTML = 'Вся Россия' + svgCode;

    var selectButton = document.getElementById('selectButtonClassPAK');
    selectButton.innerHTML = 'Выбрать' + svgCode;

    var selectButton = document.getElementById('selectButtonExperiencePAK');
    selectButton.innerHTML = 'Выбрать' + svgCode;

    // Сбросить состояние чекбоксов
    document.getElementById('gosregPAK').checked = true;

    //Закрытие контейнеров
    const container1 = document.getElementById('searchContainerRegionPAK');
    container1.style.display = container1.style.display = 'none';
    const container2 = document.getElementById('searchContainerClassPAK');
    container2.style.display = container2.style.display = 'none';
    const container3 = document.getElementById('searchContainerExperiencePAK');
    container3.style.display = container3.style.display = 'none';
}

// Обработчик кнопки Сбросить фильтр
document.getElementById('myButtonBPAK').onclick = myFunctionBPAK;

function myFunctionBPAK() {
    //var vhInPx = window.innerHeight / 100;

    // Вернуть selectButton к начальным значениям
    var selectButton = document.getElementById('selectButtonRegionPAK');
    // selectButton.textContent = 'Вся Россия';

    var svgCode = '<svg class="strelka" xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M13 7L7 1L1 7" stroke="#1F2B6A" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    selectButton.innerHTML = 'Вся Россия' + svgCode;

    var selectButton = document.getElementById('selectButtonClassPAK');
    selectButton.innerHTML = 'Выбрать' + svgCode;

    var selectButton = document.getElementById('selectButtonExperiencePAK');
    selectButton.innerHTML = 'Выбрать' + svgCode;

    // Сбросить состояние чекбоксов
    document.getElementById('gosregPAK').checked = true;
    
    //Закрытие контейнеров
    const container1 = document.getElementById('searchContainerRegionPAK');
    container1.style.display = container1.style.display = 'none';
    const container2 = document.getElementById('searchContainerClassPAK');
    container2.style.display = container2.style.display = 'none';
    const container3 = document.getElementById('searchContainerExperiencePAK');
    container3.style.display = container3.style.display = 'none';

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

    var region = document.getElementById('selectButtonRegionPAK').innerText.trim();
    var hardwareclass = document.getElementById('selectButtonClassPAK').innerText.trim();
    var field = document.getElementById('selectButtonExperiencePAK').innerText.trim();
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
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            console.log(request.responseText);
        }
    };

    request.send(JSON.stringify({ region, hardwareclass, field, errp }));

    request.onload = function () {
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
        <div class="list-item">
            <div class="container" id="${item.id}" onclick="myFunctionInfo(${item.id})">
                <div class="icon_container">
                    <img src="https://getfile.dokpub.com/yandex/get/${item.logo_company}" alt="Иконка">
                </div>
                <div class="info_container">
                    <h2>${item.company_name}</h2>
                    <p>${item.position_company}</p>
                    <p class="location">${item.address}</p>
                </div>
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
    var myModalPAK = document.getElementById('myModalPAK');

    if (activeButtonId === "ButtonPAK"){
        myModalPAK.style.display = 'block';
    }
    else {
        myModal.style.display = 'block';
    }

    var button = document.getElementById('myButton');
    button.classList.toggle('active');

    var listItems = document.getElementById("list-items")
    while (listItems.firstChild) {
        listItems.removeChild(listItems.firstChild)
    }

    //Для обратной анимации временно!
    var svgElement = document.getElementById("mySvg");
    var partOfSvg = document.getElementById("Krsn");
    var scale = 1; // возвращаем к исходному масштабу

    setTimeout(() => {
        // Возвращаем исходный цвет заливки
        partOfSvg.style.fill = "rgba(255,255,255,1)";
    }, 3000);

    // Скрываем svgContainer
    var svgContainer = document.getElementById('mySvgContainer');
    svgContainer.style.display = 'none';

    // Возвращаем исходные координаты блока (если они были изменены)
    svgContainer.style.left = ""; // убираем стили
    svgContainer.style.top = "";

    // Возвращаем исходный масштаб элемента SVG
    svgElement.style.transition = "transform 3s";
    svgElement.style.transform = "scale(" + scale + ") translateX(0) translateY(0)";

    window.idBlock = undefined;
}

window.idBlock;
//Появление блока инфо
function myFunctionInfo(id) {
    const myITinfo = document.getElementById('myITinfo');
    const myBlock = document.getElementById(id);
    let prevBlock;
    
    if (window.idBlock !== undefined) {
        prevBlock = document.getElementById(window.idBlock);
        prevBlock.style.backgroundColor = '';
    }

    var info = document.getElementById("myITinfo")
    while (info.firstChild) {
        info.removeChild(info.firstChild)
    }


    if ((myITinfo.style.display === 'none' && myBlock.style.backgroundColor === '') || id !== window.idBlock) {
        myITinfo.style.display = 'block';
        myBlock.style.backgroundColor = 'rgba(240, 242, 255, 1)';


        const request = new XMLHttpRequest();
        request.open('POST', '/info');
        request.setRequestHeader('Content-Type', 'application/json');
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                console.log(request.responseText);
            }
        };
        let idCompany = id;
    
        request.send(JSON.stringify({ idCompany }));
    
        request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
                var response = JSON.parse(request.response);
                console.log(response);
                infoHTML(response);
            } else {
                alert('Ошибка при отправке запроса!');
            }
        };

        idBlock = id;
    } else {
        idBlock = id;
        myITinfo.style.display = 'none';
        myBlock.style.backgroundColor = ''; // Возвращаем начальный цвет
    }
}

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
                <video controls autoplay muted loop id="myVideo" src="https://getfile.dokpub.com/yandex/get/https://disk.yandex.ru/i/lwBExgINCnQpzw"></video>
            </div>
            <div class="mySlides fade">
                <img src="https://getfile.dokpub.com/yandex/get/${item.image}" width="100%">
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
            <p>${item.description}</p>
            <svg class="line" xmlns="http://www.w3.org/2000/svg" width="23.96vw" height="1" viewBox="0 0 460 1"
                fill="none">
                <line x1="-4.37114e-08" y1="0.5" x2="460" y2="0.49996" stroke="#383874" stroke-opacity="0.2" />
            </svg>
            <h2>Продукты компании</h2>
            <ul>    
                ${listResult(item.product)}
            </ul>
         
            <svg class="line" xmlns="http://www.w3.org/2000/svg" width="23.96vw" height="1" viewBox="0 0 460 1"
                fill="none">
                <line x1="-4.37114e-08" y1="0.5" x2="460" y2="0.49996" stroke="#383874" stroke-opacity="0.2" />
            </svg>
            <h2>Услуги компании</h2>
            <ul>
                ${listResult(item.service)}
            </ul>
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
        <div class="link"><img class="link-icon" src="static/images/bookmark.png"></div>
        <div class="link"><img class="link-icon" src="static/images/link.png"></div>
        </div>
        </div>
        `;

        listContainer.appendChild(listItem);

        // Вызов функции generateICON после добавления элемента в DOM
        generateICON(item.id);
    });
}

function listResult(items) {
    var result = items.split(",");
    return result.map(item => `<li>${item}</li>`).join('');
}

function generateICON(id) {
    const request = new XMLHttpRequest();
    request.open('POST', '/icon');
    request.setRequestHeader('Content-Type', 'application/json');
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            try {
                var response = JSON.parse(request.responseText);
                console.log(response);
                updateICON(response);
            } catch (e) {
                console.error('Ошибка при разборе ответа:', e);
            }
        } else if (request.readyState == 4) {
            alert('Ошибка при отправке запроса!!');
        }
    };
    let idCompany = id;

    request.send(JSON.stringify({ idCompany }));
}

function updateICON(response) {
    const listContainer = document.querySelector('.links');

    response.forEach(item => {
        const listItem = document.createElement('div');
        listItem.classList.add('link');
        
        let html = ``;
        if (item.whatsapp) {
            html += `<a href="${item.whatsapp}/"><img class="link-icon" src="static/images/whatsapp.png"></a>`;
        }
        if (item.telegram) {
            html += `<a href="${item.telegram}/"><img class="link-icon" src="static/images/telegram.png"></a>`;
        }
        if (item.viber) {
            html += `<a href="${item.viber}/"><img class="link-icon" src="static/images/viber.png"></a>`;
        }
        if (item.vk) {
            html += `<a href="${item.vk}/"><img class="link-icon" src="static/images/vk.png"></a>`;
        }
        if (item.site) {
            html += `<a href="${item.site}/"><img class="link-icon" src="static/images/web.png"></a>`;
        }
        html += `</div>`;
        listItem.innerHTML = html;
        listContainer.appendChild(listItem);
        // listItem.insertAdjacentHTML('beforeend', `<div class="links">
        //     <div class="link"><img class="link-icon" src="static/images/bookmark.png"></div>
        //     <div class="link"><img class="link-icon" src="static/images/link.png"></div>
        //     </div>`);
    });
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



// Обработчик кнопки Выбрать
document.getElementById('selectButtonClassPAK').onclick = searchListClassPAK;

//Работа поиска Класс ПАК
function searchListClassPAK() {
    const listItemsNameClassPAK = [
        "Выбрать",
        "Программно-аппаратные комплексы сбора, анализа и визуализации информации различных сред и процессов",
        "Программно-аппаратные комплексы организации обучения и контроля навыков",
        "Программно-аппаратные комплексы системы хранения данных",
        "Программно-аппаратные комплексы автоматизированного управления технологическим процессом",
        "Программно-аппаратные комплексы мониторинга и управления",
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