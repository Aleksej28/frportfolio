const btnDarkMode = document.querySelector(".dark-mode-btn");

if (window.matchMedia && window.matchMedia("(prefers-colors-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

window.matchMedia("(prefers-colors-scheme: dark)").addEventListener('change', (e)=>{
    const newColorsScheme = e.matches ? "dark" : "light";

    if (newColorsScheme === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark");
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "light");
    }
});

btnDarkMode.onclick = function(){
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
    }

}