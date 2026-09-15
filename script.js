```javascript
// ===============================
// MOBILE MENU
// ===============================

const menu = document.querySelector(".menu");

const nav = document.querySelector(".nav nav");


menu.addEventListener("click", () => {

    nav.classList.toggle("open");

});


// ===============================
// CLOSE MOBILE MENU
// AFTER CLICKING A LINK
// ===============================

document
    .querySelectorAll(".nav nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

        });

    });


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();
```
