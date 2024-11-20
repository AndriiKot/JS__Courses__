const input = document.querySelector('.search');
const p = document.querySelectorAll('p');

const searchWord = (word, elements = []) => {
  elements.forEach((element) => {
    if (element.textContent.includes(word)) {
      element.innerHTML = element.textContent.replaceAll(word, "<span style='color: red'>" + word + '</span>');
    } else {
      // Восстанавливаем текст, если слово не найдено
      element.innerHTML = element.textContent;
    }
  });
};

input.addEventListener('input', (event) => {
  searchWord(event.target.value, p);
});
