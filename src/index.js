import readlineSync from 'readline-sync';

const engine = (description, rounds) => {
  console.log('Welcome to the brain-games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);

  for (let i = 0; i < 3; i += 1) {
    const round = rounds[i];
    const question = round[0];
    const expectedAnswer = round[1];
    console.log(`${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (expectedAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default engine;
