const html = document.documentElement;
const img = document.querySelector("#profile img");


function toggleMode() {
  const currentTheme = html.classList.contains("light")
  ? "light"
  : "dark";
  
  const newTheme = currentTheme === "light"
  ? "dark"
  : "light";
  
  applyTheme(newTheme);
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  
  applyTheme(savedTheme);
}
function applyTheme(theme) {
    if (theme === "dark") {
        html.classList.remove("light");
        img.setAttribute("src", "./assets/avatar.png");
    } else {
        html.classList.add("light");
        img.setAttribute("src", "./assets/avatar-light.png");
    }

    localStorage.setItem("theme", theme);
}

loadTheme();
