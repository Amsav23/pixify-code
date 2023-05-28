 //DETAILS and ABOUT//
 
 themeButton = document.querySelector(".theme-btn");
 toggleTheme = () => {
 body = document.querySelector("body");
 const subInfo = document.querySelector(".current-submission-info");
 const mainAbout = document.querySelector(".main-about");
  console.log(subInfo);
  console.log(mainAbout);


  if(body.style.backgroundColor === "rgb(42, 59, 73)") {
    body.style.backgroundColor = "white";
    subInfo.style.color = "black";
    mainAbout.style.color = "black";
    themeButton.innerHTML = "Dark Mode";


  } else {
    body.style.backgroundColor = "rgb(42, 59, 73)";
    subInfo.style.color = "white";
    mainAbout.style.color = "white";
    themeButton.innerHTML = "Light Mode";
  }
}


themeButton.onclick = toggleTheme;