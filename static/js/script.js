
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

var activeButtonId = 'ButtonPAK';
  
function myFunctionClick(id) {

    // Если на экране отображается модальные окна, функция не выполняется
    var myITinfo = document.getElementById('myITinfo');
    var myList = document.getElementById('myList');

    if (myITinfo.style.display === 'block'||myList.style.display === 'block') {
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
    myModal.style.display = 'none';
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

    if (myITinfo.style.display === 'block'||myList.style.display === 'block') {
        return;
    }

    var button = document.getElementById('myButton');
    button.classList.toggle('active');
}



/*
function myFunctionClick(id) {
    var button = document.getElementById(id);
    
    // Если кнопка уже активна, вернем исходные стили
    if (button.classList.contains('active')) {
        button.classList.remove('active');
        button.style.color = "rgb(31 43 106/ 50%)"; // Исходный цвет текста
        button.style.borderColor = "#F0F2FF"; // Исходный цвет обводки
    } else {
        // Иначе меняем цвет текста и обводки
        button.classList.add('active');
        button.style.color = "#1F2B6A";
        button.style.borderColor = "rgb(31 43 106/ 50%)";
        button.style.background = "#FFFFFF";
    }

    // Сохраните id кнопки для дальнейшей обработки на бэкенде
    // Это просто пример, вам нужно будет заменить это на вашу реальную функцию
    //backendFunction(id);
}
*/

// Обработчик кнопки Фильтр
document.getElementById('myButton').onclick = myFunction;

function myFunction() {
    // Если на экране отображается модальные окна, функция не выполняется
    var myITinfo = document.getElementById('myITinfo');
    var myList = document.getElementById('myList');

    if (myITinfo.style.display === 'block'||myList.style.display === 'block') {
        return;
    }
    

    var myModal = document.getElementById('myModal');
    if (myModal.style.display === 'none' || myModal.style.display === '') {
        myModal.style.display = 'block';
    } else {
        myModal.style.display = 'none';
       
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

   
}

// Обработчик кнопки Сбросить фильтр
document.getElementById('myButtonB').onclick = myFunctionB;

function myFunctionB() {
    //var vhInPx = window.innerHeight / 100;

    var myModal = document.getElementById('myModal');
    myModal.style.display = 'none';

    var button = document.getElementById('myButton');
    // кнопка уже активна, вернем исходные стили
    button.classList.remove('active');
    
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
    setTimeout(function() {
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

    var region = document.getElementById('searchInput').value;
    var hardwareclass = document.querySelector('select[name="nameclasspo"]');
    var field = document.querySelector('select[name="opt"]').value;
  
    const request = new XMLHttpRequest();
    request.open('POST', '/filter');
    request.setRequestHeader('Content-Type', 'application/json');
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            alert(hardwareclass)
        }
    };

    request.send(JSON.stringify({ region, hardwareclass, field }));

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

    response.forEach(item => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
    
        listItem.innerHTML = `
            <div class="container">
                <div class="icon_container">
                    <img src="static/images/icon_IT_novazy.png" alt="Иконка">
                    <img src="static/images/location-icon.svg" alt="Иконка местоположения" class="location">
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
}

// Обработчик события при клике на блоке list-item
function myFunctionInfo(companyId) {
    // Ваша логика обработки клика на блоке
    console.log('Clicked company ID:', companyId);
}







    //Обработчик кнопки назад на списке
    function myFunctionBack() {
        var list = document.getElementById("myList");
        list.style.display = "none";

        var myModal = document.getElementById('myModal');
        myModal.style.display = 'block';

        var button = document.getElementById('myButton');
        button.classList.toggle('active');
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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Обработчик кнопки Выбрать
document.getElementById('selectButton').onclick = searchList;

//Работа поиска

function searchList() {
    const listItems = [
        "Республика Адыгея",
        "Республика Башкортостан",
        "Республика Бурятия",
        "Республика Алтай",
        "Республика Дагестан",
        "Республика Ингушетия",
        "Кабардино-Балкарская",
        "Республика Калмыкия",
        "Республика Карачаево-Черкесия",
        "Республика Карелия"
    ];
    


    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById('listContainer');
    ul.innerHTML = '';

    const sortedItems = listItems
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
            document.getElementById('selectButton').innerText = item.item;
            toggleSearchContainer();
        });
        ul.appendChild(li);
    });
}

function toggleSearchContainer() {
    const container = document.getElementById('searchContainer');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
}

