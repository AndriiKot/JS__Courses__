const getButton = (text, onClick) => {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = text;
  buttonEl.addEventListener("click", onClick);

  return buttonEl;
};

const onClick = (message) => {
  alert(message);
};

const button1 = getButton(
  "Button 1",
  onClick.bind(null, "Hello, I am button namber: 1")
); // onClick("Hello, I am button namber: 1");

const button2 = getButton(
  "Button 2",
  onClick.bind(null, "Hello, I am button namber: 2")
); // onClick("Hello, I am button namber: 2");

document.body.append(button1, button2);
