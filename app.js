const generateBtn = document.querySelector(".generate");
const quoteId = document.getElementById("quote-id");
const adviceElement = document.querySelector(".quote");

generateBtn.addEventListener("click", () => {
  // Make a GET request to the API
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      // Extract the advice quote from the response data
      const advice = data.slip.advice;
      const id = data.slip.id;

      //Display the id for the piece of advice
      quoteId.innerHTML = id;

      // Display the advice quote on the webpage
      adviceElement.innerHTML = advice;
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error("Error:", error);
    });
});
