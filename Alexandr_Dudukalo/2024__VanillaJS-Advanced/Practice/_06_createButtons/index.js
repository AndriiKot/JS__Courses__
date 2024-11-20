const getButton = (text, onClick) => {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = text;
  buttonEl.addEventListener('click', onClick);
  return buttonEl;
};

const createClickHandler = (message) => () => {
  alert(message);
};

const button1 = getButton('Button 1', createClickHandler('Hello, I am button number: 111'));

const button2 = getButton('Button 2', createClickHandler('Hello, I am button number: 222'));

document.body.append(button1, button2);
