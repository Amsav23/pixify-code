const themeButton = document.querySelector(".theme-btn");
const toggleTheme = () => {
  const body = document.querySelector("body");
  const p = document.querySelector("p");

  console.log(p);

  if(body.style.backgroundColor === "rgb(42, 59, 73)") {
    body.style.backgroundColor = "white";
    p.style.color = "black";
    themeButton.innerHTML = "Dark Mode";


  } else {
    body.style.backgroundColor = "rgb(42, 59, 73)";
    p.style.color = "white";
    themeButton.innerHTML = "Light Mode";
  }
}


themeButton.onclick = toggleTheme;