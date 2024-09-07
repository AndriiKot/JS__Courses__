
#### ! For the code to work correctly, use 'live server' in Visual Studio Code !

![Store App](https://github.com/AndriiKot/JS__Courses__/blob/main/Alexandr_Dudukalo/2024__VanillaJS-Advanced/Practice/_03_input-get-normal-name/images/__v1_0_0__.png)

```js
const input = document.createElement("input");
const p = document.createElement("p");

document.body.append(input, p);

function getNormalName(input) {
  const trimmedName = input.trim();
  return trimmedName
    ? trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1).toLowerCase()
    : "";
}

input.addEventListener("input", (event) => {
  const inputElement = event.target;
  const filteredValue = inputElement.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "");

  inputElement.value = filteredValue; // Обновляем значение только в случае изменения

  const normalName = getNormalName(filteredValue);
  p.textContent = normalName;
});

input.focus();
```