const btnElement = document.querySelector(".btn");
const close = document.querySelector(".close-icon");
const trailerContainer = document.querySelector(".trailer-container");
const video = document.querySelector("video");

btnElement.addEventListener("click", () => {
  trailerContainer.classList.remove("active");
});
close.addEventListener("click", () => {
  trailerContainer.classList.add("active");
  video.pause();
});

btnElement.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnElement.offsetLeft;
  const y = event.pageY - btnElement.offsetTop;
  btnElement.style.setProperty("--xPos", x + "px");
  btnElement.style.setProperty("--yPos", y + "px");
});
