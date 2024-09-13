function getInput({
  type = "text",
  placeholder = "Enter text",
  fn = () => {},
} = {}) {
  const input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;
  input.addEventListener("input", fn);
  return input;
}

const validateText = (event) => {
  let { value } = event.target; // Получаем текущее значение инпута
  value = value.replaceAll("http", ""); // Заменяем 'http' на пустую строку
  event.target.value = value; // Обновляем значение инпута
  console.log(event.target.value); // Логируем обновленное значение

  event.target.setCustomValidity(
    value.trim() === "" ? "Поле не может быть пустым." : "" // Если значение пустое, устанавливаем ошибку
  );
  event.target.reportValidity(); // Это поможет показать ошибку, если она есть
};

const validateName = (event) => {
  const { value } = event.target;
  const namePattern = /^[A-Za-zА-Яа-яЁё\s]+$/;
  event.target.setCustomValidity(
    namePattern.test(value) ? "" : "Имя должно содержать только буквы."
  );
  event.target.reportValidity(); // Это поможет показать ошибку, если она есть
};

// Создаем форму
const form = document.createElement("form");

// Создаем инпуты
const inputElText = getInput({ fn: validateText });
const inputElNumber = getInput({ type: "number", placeholder: "Enter number" });
const inputElName = getInput({ placeholder: "Enter name", fn: validateName });

// Добавляем инпуты в форму
form.append(inputElText, inputElNumber, inputElName);

// Добавляем форму в body
document.body.append(form);
