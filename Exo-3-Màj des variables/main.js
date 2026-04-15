let root = document.documentElement ;

let color = document.querySelector("input[name = color]");

color.addEventListener("input", handleInputColor);
function handleInputColor(event) {
  let newColor = event.target.value;
  root.style.setProperty("--color", newColor);
}

let spacing = document.querySelector("input[name = spacing]");

spacing.addEventListener("input", handleInputSpacing);

function handleInputSpacing() {
  // console.log(spacing.value);
  // console.log(spacing.dataset.sizing);
  let newSpacing = spacing.value + spacing.dataset.sizing  

  root.style.setProperty("--spacing", newSpacing)
};

let floue = document.querySelector("input[name= blur]");

floue.addEventListener("input", handleInputFloue);

function handleInputFloue() {
    // console.log(floue.value);
    // console.log(floue.dataset.sizing);
    let newFloue = floue.value + floue.dataset.sizing ;
    root.style.setProperty("--blur", newFloue)
};

