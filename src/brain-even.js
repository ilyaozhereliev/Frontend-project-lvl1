import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the brain-games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 1000);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (randomNumber % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (randomNumber % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else if (randomNumber % 2 === 0 && answer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
      Let's try again, ${name}!`);
      break;
    } else if (randomNumber % 2 !== 0 && answer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
      Let's try again, ${name}!`);
      break;
    } else {
      console.log(`Error! You must write only "yes" or "no. Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default greeting;
