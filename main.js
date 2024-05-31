document.addEventListener('DOMContentLoaded', () => { // Выполнять действие после загрузки Dom контента
    document.getElementById("addBtn").addEventListener('click', (event) => { // Обращяемся к документу и находим там элемент c id addBtn добавляем функцию обрапотки клика
        event.preventDefault(); // отключаем стандартные действия
        const name = document.getElementById("nameInput").value;// Получаем input с значениями имени
        const price = document.getElementById("priceInput").value; // Получаем инпут со значениями цены
        const category = document.getElementById("selectCategory").value; // Получаем инпут со значениями категории
        addExpense(name, category, price); // Вызываем функцию addExpence которая будет добавлять элементы таблицы на страницу
        document.getElementById("nameInput").value = ''; // Очищаем поля ввода после добавления элемента на страницу (имя)
        document.getElementById("priceInput").value = '';// Очищаем поля ввода после добавления элемента на страницу (цена)
    });
});

// Добавляем код для обновления общей стоимости и легенды при удалении строки из таблицы

// Внутри функции deleteExpense(element) добавляем код для обновления общей стоимости и легенды при удалении строки
function deleteExpense(element) {
    const parentRow = element.closest('.purcashes__row');
    const category = parentRow.querySelector('.purcashes__td:nth-child(2)').innerText;
    const price = parseFloat(parentRow.querySelector('.purcashes__td:nth-child(3)').innerText);

    switch(category) {
        case "Products":
            totalProducts -= price;
            document.getElementById('Legend-price-product').innerText = totalProducts;
            break;
        case "FastFoods":
            totalFastFoods -= price;
            document.getElementById('Legend-price-fastfood').innerText = totalFastFoods;
            break;
        case "Sport":
            totalSport -= price;
            document.getElementById('Legend-price-sport').innerText = totalSport;
            break;
        case "Drinks":
            totalDrinks -= price;
            document.getElementById('Legend-price-drinks').innerText = totalDrinks;
            break;
        case "Household":
            totalHousehold -= price;
            document.getElementById('Legend-price-Household').innerText = totalHousehold;
            break;
        case "Electronic":
            totalElectronic -= price;
            document.getElementById('Legend-price-Electronic').innerText = totalElectronic;
            break;
        case "Auto":
            totalAuto -= price;
            document.getElementById('Legend-price-Auto').innerText = totalAuto;
            break;
        case "Fertilizers":
            totalFertilizers -= price;
            document.getElementById('Legend-price-Fertilizers').innerText = totalFertilizers;
            break;
        case "Plants":
            totalPlants -= price;
            document.getElementById('Legend-price-Plants').innerText = totalPlants;
            break;
        default:
            console.log("Неизвестная категория");
    }

    parentRow.remove();
}


let totalProducts = 0;
let totalFastFoods = 0;
let totalSport = 0;
let totalDrinks = 0;
let totalHousehold = 0;
let totalElectronic = 0;
let totalAuto = 0;
let totalFertilizers = 0;
let totalPlants = 0;

function addExpense(name, category, price) { 
    const table = document.getElementById('table'); 
    const td = document.createElement('tr');
    td.classList.add('purcashes__item', 'purcashes__row'); 
    td.innerHTML = `
      <td class="purcashes__td">${name}</td>
      <td class="purcashes__td">${category}</td>
      <td class="purcashes__td" id="price">${price}</td>
      <td class="purcashes__td"> <i class="purcashes__item-del fa-solid fa-trash" onclick="deleteExpense(this)">❌</i> </td>`;
    table.appendChild(td); 
    const prod = document.getElementById('Legend-price-product')
    const fast = document.getElementById('Legend-price-fastfood');
    const sport = document.getElementById('Legend-price-sport');
    const drink = document.getElementById('Legend-price-drinks');
    const HHold = document.getElementById('Legend-price-Household');
    const elec = document.getElementById('Legend-price-Electronic');
    const auto = document.getElementById('Legend-price-Auto');
    const plnts = document.getElementById('Legend-price-Plants');
    const fert = document.getElementById('Legend-price-Fertilizers');

    switch(category) {
        case "Products":
            console.log("Продукты");
            totalProducts += parseFloat(price);
            prod.innerText = totalProducts;
            break;
        case "FastFoods":
            console.log("Фастфуд");
            totalFastFoods += parseFloat(price);
            fast.innerText = totalFastFoods;
            break;
        case "Sport":
            console.log("Спорт");
            totalSport += parseFloat(price);
            sport.innerText = totalSport;
            break;
        case "Drinks":
            console.log("Напитки");
            totalDrinks += parseFloat(price);
            drink.innerText = totalDrinks;
            break;
        case "Household":
            console.log("Бытовые");
            totalHousehold += parseFloat(price);
            HHold.innerText = totalHousehold;
            break;
        case "Electronic":
            console.log("Электронные");
            totalElectronic += parseFloat(price);
            elec.innerText = totalElectronic;
            break;
        case "Auto":
            console.log("Автомобили");
            totalAuto += parseFloat(price);
            auto.innerText = totalAuto;
            break;
        case "Fertilizers":
            console.log("Удобрения");
            totalFertilizers += parseFloat(price);
            fert.innerText = totalFertilizers;
            break;
        case "Plants":
            console.log("Растения");
            totalPlants += parseFloat(price);
            plnts.innerText = totalPlants;
            break;
        default:
            console.log("Неизвестная категория");
    }

    const deleteBtn = td.querySelector('.purcashes__item-del');
    deleteBtn.addEventListener('click', () => {
        deleteExpense(td);
    });
}

