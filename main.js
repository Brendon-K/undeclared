async function read_txt_webpage(url) {
  const response = await fetch(url);
  const data = await response.text();
  console.log(data);
}

let guesses_url = "https://raw.githubusercontent.com/Brendon-K/undeclared/main/wordle_guesses.txt"
const guesses_promise = read_txt_webpage(guesses_url);

let answers_url = "https://raw.githubusercontent.com/Brendon-K/undeclared/main/wordle_answers.txt"
const answers_promise = read_txt_webpage(answers_url);

console.log("waiting for promise")
$.when(guesses_promise, answers_promise).done(function{
  console.log("promise received");
});