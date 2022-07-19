const quote = document.getElementById("quote");
const id = document.getElementById("id");
const btn = document.getElementById("btn");
const url = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
  const data = await (await fetch(url)).json();
  id.innerHTML = data.slip.id;
  quote.innerHTML = `"${data.slip.advice}"`;
};
getAdvice();

btn.addEventListener("click", () => {
  getAdvice();
});
