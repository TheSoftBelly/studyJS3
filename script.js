const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClicked(){
  h1.classList.toggle("clicked")
};

h1.addEventListener("click", handleTitleClicked);