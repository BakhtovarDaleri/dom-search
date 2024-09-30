function find(arr, search) {
  let result = -1; // Выведем в консоль -1 если элемент не найден

  //
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      result = i;
      break; // Останавливаем если найден элемент
    }
  }

  return result;
}

// Массив пользователей
const users = [
  "Яна",
  "Олег",
  "Витя",
  "Саша",
  "Таня",
  "Яна",
  "Василий",
  "Евгения",
  "Настя",
];

// Функция для отображения списка пользователей на странице
function renderList(arr) {
  // Создаем новый элемент ul для списка
  const listEl = document.createElement("ul");

  // Цикл для создания li для каждого пользователя в массиве
  for (let i = 0; i < users.length; i++) {
    // Создаем элемент li
    const liEl = document.createElement("li");
    // Устанавливаем текст с именем пользователя и его индексом
    liEl.textContent = `${i}) ${users[i]}`;
    // Доюавляем li в ul
    listEl.append(liEl);
  }

  // Добавляем список ul в тело документа
  document.body.append(listEl);
}

// Создаем кнопку поиск
const searchBtn = document.createElement("button");
// Устанавливаем текст кнопки
searchBtn.textContent = "Поиск";
// Добавляем кнопку на страницу
document.body.append(searchBtn);

// Создаем обработчик события
searchBtn.onclick = function () {
  // Спрашиваем у пользователя имя для поиска через prompt
  const search = prompt("Укажите имя для поиска");

  // Ищем индекс имени в массиве users
  const findIndex = find(users, search);

  // Если индекс найден, то меняем цвет текста на красный
  if (findIndex > -1) {
    document.querySelector(`li:nth-child(${findIndex + 1})`).style.color =
      "red";
  } else {
    alert("Имя не найдено!");
  }
  console.log(findIndex);
};

// Вызываем функцию для отображения списка пользователей
renderList(users);
