const menu = ["Menu", "Home", "About", "Contact"];

// !!! WARNING !!!
let activeBtn;

for (const item of menu) {
  const btn = document.createElement("button");
  btn.textContent = item;
  document.body.append(btn);

  btn.onclick = () => {
    console.log(activeBtn); // undefined  !!!
    btn.classList.add("active");
    activeBtn = btn;
    console.log(activeBtn); // !!! <button class="active">Contact</button> !!!
  };
}
// !!! WARNING !!!
