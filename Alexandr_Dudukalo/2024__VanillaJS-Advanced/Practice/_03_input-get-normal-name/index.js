const input = document.createElement('input');
const p = document.createElement('p');

document.body.append(input, p);

function getNormalName(input) {
  const trimmedName = input.trim();
  return trimmedName ? trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1).toLowerCase() : '';
}

input.addEventListener('input', (event) => {
  const inputElement = event.target;
  const filteredValue = inputElement.value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');

  inputElement.value = filteredValue;

  const normalName = getNormalName(filteredValue);
  p.textContent = normalName;
});

input.focus();
