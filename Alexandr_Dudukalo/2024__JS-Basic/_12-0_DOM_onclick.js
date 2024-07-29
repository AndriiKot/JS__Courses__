const menu = ["Menu", "Home", "About", "Contact"];

for (const item of menu) {
  const btn = document.createElement("button");
  btn.textContent = item;
  document.body.append(btn);

  btn.onclick = () => {
    console.log("TEST");
  };
}
