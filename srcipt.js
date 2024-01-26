// Form
const textInput = document.getElementById("textInput");
const formBtn = document.getElementById("show-result");
const fraseDiv = document.querySelector(".frase");

formBtn.addEventListener("click", () => {
  // Check if the input text has a value
  if (textInput.value.length === 0) return;

  // Clear the old phrase
  const spans = document.querySelectorAll(".letter");
  spans.forEach((span) => {
    span.remove();
  });

  // Take the input value
  let textToArray = textInput.value;
  const textUpperCased = textToArray.toUpperCase();

  // Take the input value and transform the string into an array, replacing the spaces with ("&nbsp; &nbsp;")
  let frase = textUpperCased
    .split("")
    .map((letter) => (letter === " " ? "&nbsp; &nbsp;" : letter));

  // This 'for' loop is used to create spans with a single letter from the array
  for (let i = 0; i < frase.length; i++) {
    const span = document.createElement("span");
    span.innerHTML = frase[i];
    span.classList.add("letter");
    fraseDiv.appendChild(span);
  }

  // Set custom styles for the letters
  const setCustomStyle = (element, propertyName, value) => {
    element.style.setProperty(propertyName, value);
  };

  const letters = document.querySelectorAll(".letter");
  letters.forEach((letter, index) => {
    const customValue = (index += index);
    setCustomStyle(letter, "--i", customValue.toString());
  });

  // Clear the old phrase and input value
  textInput.value = "";
  frase = [];
});
