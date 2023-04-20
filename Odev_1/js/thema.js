function switchThema(e) {
    const btn = e.target;
    const html = document.querySelector("html");
    if (html.classList.contains("bg-dark")) {
        html.classList.add("bg-light");
        html.classList.remove("bg-dark");
    }
    else{
        html.classList.add("bg-dark");
        html.classList.remove("bg-light");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btnSwitchThema = document.querySelector("#switch-thema");
    if (btnSwitchThema)
        btnSwitchThema.addEventListener("click", switchThema);
});