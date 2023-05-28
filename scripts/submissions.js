const imageSets = [
    {
      id:1,  
      name: 'Andrew Smith',
      title: 'Innocence',
      images: [
        'https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
        'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        'https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
      ],
    },
    {
      id:2,
      name: 'Jane Doe',
      title: 'Nature Adventures',
      images: [
        'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
        'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80'
      ],
    },
    {
      id:3,
      name: 'Irna Tawsen',
      title: 'Faces of the World',
      images: [
        'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
        'https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ],
    },
    {
      id:4,
      name: 'Mark Dale',
      title: 'Wild Animals',
      images: [
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
        'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80',
        'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ]
    }

  ];


//SUBMISSION MAPPING//
const displaySubmissions = (list) => {
  const submissionsContainer = document.getElementById("submissions-container");
  const allPhotos = list.map(item => {
    return `
    <div class="photo">
    <a href="details.html?id=${item.id}">
    <img src=${item.images[0]} alt=${item.name} class="photo-image" />
    </a>
    <div class="photo-info">
      <p id="item-title">${item.title}</p>
      <p id="item-name">${item.name}</p>
      <p id="item-par">see more</p>
    </div>
    </div>`
}).join("");

  submissionsContainer.innerHTML = allPhotos;
}

window.onload = function() {
  displaySubmissions(imageSets);
}


//SUBMIT FORM//
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.querySelector("input[name='name']").value;
  const title = document.querySelector("input[name='title']").value;
  let imageUrl = [];
  imageUrl.push(document.querySelector("input[name='imageUrl-1']").value);
  imageUrl.push(document.querySelector("input[name='imageUrl-2']").value);
  imageUrl.push(document.querySelector("input[name='imageUrl-3']").value);
  imageUrl.push(document.querySelector("input[name='imageUrl-4']").value);
  imageUrl.push(document.querySelector("input[name='imageUrl-5']").value);

  console.log(name);
  console.log(title);
  console.log(imageUrl);

  const newSubmission = document.createElement("div")
  newSubmission.innerHTML = 
  `<img src=${imageUrl[0]} alt=${name} class="photo-image" />
    <div class="photo-info">
      <p class="item-title">${title}</p>
      <p>${name}</p>
      <p>see more</p>
    </div>`;


    const submissionsContainer = document.querySelector("#submissions-container");
    submissionsContainer.insertBefore(newSubmission, submissionsContainer.firstChild);

    document.querySelector("input[name='name']").value = "";
    document.querySelector("input[name='title']").value = "";
    document.querySelector("input[name='imageUrl-1']").value = "";
    document.querySelector("input[name='imageUrl-2']").value = "";
    document.querySelector("input[name='imageUrl-3']").value = "";
    document.querySelector("input[name='imageUrl-4']").value = "";
    document.querySelector("input[name='imageUrl-5']").value = "";

});


 //THEME BUTTON//
const themeButton = document.querySelector(".theme-btn");
const toggleTheme = () => {

  const body = document.querySelector("body");
  const submissionText = document.querySelector("#submissions-container");


  if(body.style.backgroundColor === "rgb(42, 59, 73)") {
    body.style.backgroundColor = "white";
    submissionText.style.color = "black";
    themeButton.innerHTML = "Dark Mode";


  } else {
    body.style.backgroundColor = "rgb(42, 59, 73)";
    submissionText.style.color = "white";
    themeButton.innerHTML = "Light Mode";
  }
}


themeButton.onclick = toggleTheme;