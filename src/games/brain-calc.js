import engine from '../index.js';

const brainCalc = () => {
  const description = 'What is the result of the expression?';
  const array = ['+', '-', '*'];
  const rounds = [];

  for (let i = 0; i < 3; i += 1) {
    const randomElement = array[Math.floor(Math.random() * 100) % array.length];
    const randomNumber = Math.floor(Math.random() * 100);
    const randomNumberTwo = Math.floor(Math.random() * 100);
    const question = `Question: ${randomNumber} ${randomElement} ${randomNumberTwo}`;

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

    const expectedAnswer = String(calc(randomNumber, randomNumberTwo, randomElement));
    rounds.push([question, expectedAnswer]);
  }
  engine(description, rounds);
};

export default brainCalc;
