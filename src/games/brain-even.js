import engine from '../index.js';

const brainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = [];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 1000);
    const question = `Question: ${randomNumber}`;
    const expectedAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    rounds.push([question, expectedAnswer]);
  }
  engine(description, rounds);
};

export default brainEven;
