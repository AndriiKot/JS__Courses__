
#### ! For the code to work correctly, use 'live server' in Visual Studio Code !

![Store App](https://github.com/AndriiKot/JS__Courses__/blob/main/Alexandr_Dudukalo/2024__VanillaJS-Advanced/Practice/_03_input-get-normal-name/images/__v1_0_0__.png)

```js
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
```