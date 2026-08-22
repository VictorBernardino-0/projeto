const html = document.documentElement;
const profileImage = document.querySelector("#profile img");
const themeSwitch = document.querySelector("#switch");

function applyTheme(theme) {
  const isDark = theme === "dark";

  html.classList.toggle("dark", isDark);
  html.classList.toggle("light", !isDark);

  if (profileImage) {
    profileImage.setAttribute(
      "src",
      isDark ? "./assets/avatar.png" : "./assets/avatar-light.png"
    );
  }

  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function toggleMode() {
  const currentTheme = html.classList.contains("dark") ? "dark" : "light";
  applyTheme(currentTheme === "dark" ? "light" : "dark");
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  applyTheme(savedTheme === "dark" ? "dark" : "light");
}

if (themeSwitch) {
  themeSwitch.addEventListener("click", toggleMode);
  themeSwitch.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMode();
    }
  });
}

loadTheme();
