// 1. Реализация элемента "Счетчик нажатий на кнопку"
let count = 0;
const button = document.getElementById("click-button"); // найдите элементы с помощью getElement или аналогии
const counterDisplay = document.getElementById("counter");

button.addEventListener("click", function () {
  count += 1;
  counterDisplay.textContent = count; // Увеличьте значение count и обновите текст элемента
});

// 2. Реализация реактивной валидации поля формы
const emailInput = document.getElementById("email"); // найдите элементы с помощью getElement или аналогии
const errorMessage = document.getElementById("error-message");
const submitBtn = document.getElementById("submit-btn");

emailInput.addEventListener("input", function () {
  const emailValue = emailInput.value;
  // Пример простого регулярного выражения для проверки email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    // Отобразите сообщение об ошибке и заблокируйте кнопку
    errorMessage.style.display = "inline";
    submitBtn.disabled = true;
  } else {
    errorMessage.style.display = "none";
    submitBtn.disabled = false; // Скрывайте сообщение об ошибке и разблокируйте кнопку
  }
});
