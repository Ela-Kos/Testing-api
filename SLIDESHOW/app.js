/*
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", (event) => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
  event.preventDefault();
});

prevButton.addEventListener("click", (event) => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
  event.preventDefault;
});
*/

function search(event) {
  const apiKey = "5261b962f2ebd35ff251ead0c0b02caa";
  const cityName = document.querySelector("#location").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  fetch(apiUrl).then((res) => {
    const jsonPromise = res.json();
    jsonPromise.then((data) => {
      console.log(data);
    });
  });

  event.preventDeault();
}

document.querySelector("mybtn").addEventListener("click", (event) => {
  search(event);
});
