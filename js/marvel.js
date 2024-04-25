const apibutton = document.getElementById("apibutton");
const apiData = document.getElementById("apiData");

const callAPI = () => {
  fetch(
    "https://gateway.marvel.com/v1/public/characters?ts=12345678&apikey=393649b76ca1c0fe1aacb077b44d6351&hash=6f5eb1c9303fa4f03102014254a82704"
  )
    .then((res) => res.json())
    .then((data) => {
      apiData.innerText = JSON.stringify(data.comics);
    })
    .catch((e) => console.log(new Error(e)));
};

apibutton.addEventListener("click", callAPI);

/*
let button = document.getElementById("submit-button");  
let showContainer = document.getElementById  
("show-container");  
let listContainer = document.querySelector(".list");  
let date $\bar{F}$ new Date();  
console. $\log ($ date.getTime());  
const [timestamp, apiKey, hashValue] $=[$ ts, publickey,  
hashVal];  
button.addEventListener;
*/
