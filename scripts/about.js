  //THEME BUTTON// 
 const themeButton = document.querySelector(".theme-btn");
 toggleTheme = () => {
 body = document.querySelector("body");
 const mainAbout = document.querySelector(".main-about");

  if(body.style.backgroundColor === "rgb(42, 59, 73)") {
    body.style.backgroundColor = "white";
    mainAbout.style.color = "black";
    themeButton.innerHTML = "Dark Mode";

  } else {
    body.style.backgroundColor = "rgb(42, 59, 73)";
    mainAbout.style.color = "white";
    themeButton.innerHTML = "Light Mode";
  }
}
themeButton.onclick = toggleTheme;