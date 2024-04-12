
let lastUpdated = document.getElementById("lastUpdated");
lastUpdated.innerHTML = `Last Modified ${(document.lastModified)}`;
let currentYear = document.getElementById("currentYear");
currentYear.textContent = "2024";


document.addEventListener("DOMContentLoaded", function () {
    let logo = document.querySelector("#logoimg");
    let humburgerNav = document.querySelector("nav");
    humburgerNav.classList.add("humburger")
    let humburgerButton = document.querySelector("#humburger");
    if (humburgerNav.classList.contains("humburger")) {
        humburgerButton.textContent = "☰";
    }
    if (humburgerNav.classList.contains("show")) {
        humburgerButton.textContent = "×";
    }
    humburgerButton.addEventListener("click", () => {
        if (humburgerNav.classList.contains("humburger")) {
            humburgerNav.classList.remove("humburger");
            humburgerNav.classList.add("show");

            logo.classList.remove("logoshow");
            logo.classList.add("imagelogo");

            humburgerButton.textContent = "×";
        }

        else {
            humburgerNav.classList.add("humburger");
            humburgerNav.classList.remove("show");

            logo.classList.remove("imagelogo");
            logo.classList.add("logoshow");

            humburgerButton.textContent = "☰";
        }
    })
})

document.addEventListener("DOMContentLoaded", function () {
    let darkMode = document.querySelector("body");
    let darkModeButton = document.querySelector("#mode");

    if (darkModeButton) {
        darkModeButton.textContent = "🌞";
        darkModeButton.style.backgroundColor = "white";
    }

    if (darkMode.classList.contains("dark-mode")) {
        darkModeButton.textContent = "🌙";
        darkModeButton.style.backgroundColor = "white";
    }

    darkModeButton.addEventListener("click", () => {
        darkMode.classList.toggle("dark-mode");

        if (darkMode.classList.contains("dark-mode")) {
            document.querySelector("#mode").style.backgroundColor = "white"

            document.querySelector("body").style.backgroundColor = "black";
            document.querySelector("body").style.color = "white";

            document.querySelectorAll(".navMode").forEach(element => {

                element.style.color = "white";
                element.style.backgroundColor = "black";

            })

            document.querySelectorAll("h2").forEach(element => {

                element.style.color = "white";

            })

            document.querySelector("button").style.color = "white";
            document.querySelector("button").style.backgroundColor = "black";

            document.querySelector("header").style.backgroundColor = "black";
            document.querySelector("header").style.color = "white";

            document.querySelector("footer").style.backgroundColor = "black";
            document.querySelector("footer").style.color = "white";

            document.querySelector(".nav").style.backgroundColor = "black";
            document.querySelector(".nav").style.color = "white";



            darkModeButton.textContent = "🌙";
            darkModeButton.style.backgroundColor = "black";
        }
        else {
            darkModeButton.style.setProperty('--before-content-mode', '');
            document.querySelectorAll("section").forEach(section => {
                section.style.backgroundColor = "#3f84c0";
                section.style.color = "white";
            }
            )


            document.querySelector("body").style.backgroundColor = "whitesmoke";
            document.querySelector("body").style.color = "black";

            document.querySelector("header").style.backgroundColor = "whitesmoke";
            document.querySelector("header").style.color = "black";

            document.querySelector("footer").style.backgroundColor = "whitesmoke";
            document.querySelector("footer").style.color = "black";

            document.querySelector(".nav").style.backgroundColor = "whitesmoke";
            document.querySelector(".nav").style.color = "black";


            document.querySelectorAll(".navMode").forEach(element => {

                element.style.color = "black";
                element.style.backgroundColor = "whitesmoke";

            })

            document.querySelectorAll("h2").forEach(element => {

                element.style.color = "blue";

            })

            document.querySelector("button").style.color = "blue";
            document.querySelector("button").style.backgroundColor = "whitesmoke";

            darkModeButton.textContent = "🌞";
            darkModeButton.style.backgroundColor = "white";

        }

    })

})

