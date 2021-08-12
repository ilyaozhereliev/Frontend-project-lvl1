import readlineSync from 'readline-sync';

const brainCalc = () => {
  console.log('Welcome to the brain-games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  const array = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1) {
    const randomElement = array[Math.floor(Math.random() * array.length)];
    const randomNumber = Math.floor(Math.random() * 100);
    const randomNumberTwo = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber} ${randomElement} ${randomNumberTwo}`);

    const calc = (a, b, sym) => {
      switch (sym) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        case '/':
          return a / b;
        default:
          return NaN;
      }
    };

    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = calc(randomNumber, randomNumberTwo, randomElement);

    if (Number(userAnswer) === rightAnswer) {
      console.log('Correct!');
    } else if (Number(userAnswer) !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.
      Let's try again, ${name}!`);
      break;
    } else {
      console.log(`Error! You must write only numbers. Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainCalc;
