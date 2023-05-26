const themeButton = document.querySelector(".theme-btn");
const toggleTheme = () => {
  const body = document.querySelector("body");

  if(body.style.backgroundColor === "#36454f") {
    body.style.backgroundColor = "white";
    themeButton.innerHTML = "Dark Mode";

  } else {
    body.style.backgroundColor = "#36454f";
    themeButton.innerHTML = "Light Mode";
  }
}


themeButton.onclick = toggleTheme;