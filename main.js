async function read_txt_webpage(url) {
  const response = await fetch(url);
  const data = await response.text();
  console.log(data);
}

function make_guess(guess_num, word) {
  $("#guess" + guess_num).children().each(function(index){
    $(this).html(word[index]);
  });
}

let guesses_url = "https://raw.githubusercontent.com/Brendon-K/undeclared/main/wordle_guesses.txt"
const guesses_promise = read_txt_webpage(guesses_url);

let answers_url = "https://raw.githubusercontent.com/Brendon-K/undeclared/main/wordle_answers.txt"
const answers_promise = read_txt_webpage(answers_url);

$.when(guesses_promise, answers_promise).done(function(){
  let bad_letters = [];
  // guess soare first
  make_guess(1, "soare");
});