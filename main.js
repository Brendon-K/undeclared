async function read_nonsense() {
  const url1 = 'https://raw.githubusercontent.com/Brendon-K/undeclared/main/wordle_guesses.txt'
  const response = await fetch(url1);
  const data = await response.text();
  console.log(data);
}

read_nonsense();