const menu = ["Menu", "Home", "About", "Contact"];

// !!! WARNING !!!
for (const item of menu) {
  const btn = document.createElement("button");
  btn.textContent = item;
  document.body.append(btn);

  btn.textContent = item + "!!!";
}
// <button>Menu!!!</button>
// <button>Home!!!</button>
// <button>About!!!</button>
// <button>Contact!!!</button>

// !!! WARNING !!!

