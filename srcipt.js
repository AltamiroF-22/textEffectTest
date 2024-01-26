  // Form
  document.body.style.background = "#e9e9e9"; // Set the initial background color
  const loader = document.querySelector(".loader"); // Select the loader element
  const frase = document.querySelector(".frase"); // Select the frase element
  const form = document.querySelector(".form"); // Select the form element
  frase.style.display = "none"; // Hide the frase element initially
  form.style.display = "none"; // Hide the form element initially

  window.addEventListener("load", (e) => {
    // Execute code when the window has finished loading

    setTimeout(() => {
      // Set a timeout to delay the following actions

      frase.style.display = "flex"; // Display the frase element
      form.style.display = "flex"; // Display the form element
      loader.style.display = "none"; // Hide the loader element
      document.body.style.background = "#2c2c2c"; // Change the background color

      const textInput = document.getElementById("textInput"); // Get the input element
      const formBtn = document.getElementById("show-result"); // Get the button element
      const fraseDiv = document.querySelector(".frase"); // Select the frase container

      formBtn.addEventListener("click", () => {
        // Execute code when the button is clicked

        // Check if the input text has a value
        if (textInput.value.length === 0) return;

        // Clear the old phrase
        const spans = document.querySelectorAll(".letter");
        spans.forEach((span) => {
          span.remove();
        });

        const spaces = document.querySelectorAll(".space");
        spaces.forEach((space) => space.remove());

        // Take the input value
        let textToArray = textInput.value;
        const textUpperCased = textToArray.toUpperCase();

        // Take the input value and transform the string into an array, replacing the spaces with ("&nbsp; &nbsp;")
        let word = textUpperCased.split(" ");
        console.log(word);

        // This 'for' loop is used to create spans with a single letter from the array
        for (let j = 0; j < word.length; j++) {
          const words = document.createElement("div");

          let frase = word[j].split("");
          words.classList.add("words");
          fraseDiv.appendChild(words);
          const space = document.createElement("div");
          space.classList.add("space");
          words.appendChild(space);

          for (let i = 0; i < frase.length; i++) {
            const span = document.createElement("span");

            span.classList.add("letter");
            span.innerHTML = frase[i];
            words.appendChild(span);
          }
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
    }, 300); // Set the timeout duration
  });