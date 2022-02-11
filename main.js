let valid_guesses = null;
let valid_answers = null;

async function read_txt_webpage(url) {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}

function enter_guess(guess_num, word) {
  $("#guess" + guess_num).children().each(function(index){
    $(this).html(word[index]);
  });
}

let guesses_url = "https://raw.githubusercontent.com/Brendon-K/undeclared/main/wordle_guesses.txt"
const guesses_promise = read_txt_webpage(guesses_url).then(function(result) {
  valid_guesses = result.split("\n");
});

let answers_url = "https://raw.githubusercontent.com/Brendon-K/undeclared/main/wordle_answers.txt"
const answers_promise = read_txt_webpage(answers_url).then(function(result) {
  valid_answers = result.split("\n");
});

$.when(guesses_promise, answers_promise).done(function(){
  let bad_letters = [];
  // guess soare first
  enter_guess(1, "soare");
});

$(".word").children().click(function(){
  $(this).css('background-color', '#ff0000');
  if ($(this).hasClass("definitely")) {
    $(this).removeClass("definitely");
  } else if ($(this).hasClass("maybe")) {
    $(this).removeClass("maybe");
    $(this).addClass("definitely");
  } else {
    $(this).addClass("maybe");
  }
});