const themeButton = document.querySelector(".theme-btn");
const toggleTheme = () => {
  const body = document.querySelector("body");

  if(body.style.backgroundColor === "rgb(42, 59, 73)") {
    body.style.backgroundColor = "white";
    themeButton.innerHTML = "Dark Mode";

  } else {
    body.style.backgroundColor = "rgb(42, 59, 73)";
    themeButton.innerHTML = "Light Mode";
  }
}


themeButton.onclick = toggleTheme;