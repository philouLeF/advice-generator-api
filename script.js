const adviceIdElement = document.getElementById("advice-id");
const adviceElement = document.getElementById("advice");
const randomizeButton = document.getElementById("randomize-button");

const fetchAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  console.log(response);

  const data = await response.json();

  if (adviceIdElement) {
    adviceIdElement.textContent = `ADVICE #${data.slip.id}`;
  }

  if (adviceElement) {
    adviceElement.textContent = `“${data.slip.advice}”`;
  }
};

fetchAdvice();

randomizeButton?.addEventListener("click", fetchAdvice);
