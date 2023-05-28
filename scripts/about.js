  //THEME BUTTON// 
 themeButton = document.querySelector(".theme-btn");
 toggleTheme = () => {
 body = document.querySelector("body");
 const mainAbout = document.querySelector(".main-about");
 const submitBorder = document.querySelector("submit-btn");


  if(body.style.backgroundColor === "rgb(42, 59, 73)") {
    body.style.backgroundColor = "white";
    mainAbout.style.color = "black";
    //submitBorder.style.border = "initial";
    themeButton.innerHTML = "Dark Mode";


  } else {
    body.style.backgroundColor = "rgb(42, 59, 73)";
    mainAbout.style.color = "white";
    submitBorder.style.border = "2px solid rgb(127,255,212)";
    themeButton.innerHTML = "Light Mode";
  }
}


themeButton.onclick = toggleTheme;