const input = document.createElement("input");
document.body.append(input);

// Используем регулярное выражение для валидации email
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const handleInput = (event) => {
  const email = event.target.value;
  input.classList.toggle("success", isValidEmail(email)); // Используем toggle для добавления/удаления класса
};

input.addEventListener("input", handleInput);

input.focus();
