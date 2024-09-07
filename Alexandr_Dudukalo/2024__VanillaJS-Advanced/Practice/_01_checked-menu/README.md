
#### ! For the code to work correctly, use 'live server' in Visual Studio Code !

![Checked Menu](https://github.com/AndriiKot/JS__Courses__/blob/main/Alexandr_Dudukalo/2024__VanillaJS-Advanced/Practice/_01_checked-menu/images/__v1_0_0__.png)

```j
const menu = ["Menu", "Home", "About", "Contact"];
let activeBtn;

for (const item of menu) {
  const btn = document.createElement("button");
  btn.textContent = item;
  document.body.append(btn);

  btn.onclick = () => {
    if (activeBtn) activeBtn.classList.remove("active");  // delete the old active button
    btn.classList.add("active");
    activeBtn = btn;
  };
}
```