const themeButton = document.querySelector(".theme-btn");
const toggleTheme = () => {
  const body = document.querySelector("body");

  if(body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    themeButton.innerHTML = "Dark Mode";

  } else {
    body.style.backgroundColor = "black";
    themeButton.innerHTML = "Light Mode";
  }
}


themeButton.onclick = toggleTheme;