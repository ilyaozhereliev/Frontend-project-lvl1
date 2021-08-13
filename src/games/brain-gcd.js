import engine from '../index.js';

const brainGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const rounds = [];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    const question = `Question: ${randomNumber} ${randomNumber2}`;

    const gcd = (a, b) => {
      if (!b) {
        return a;
      }
      return gcd(b, a % b);
    };
    // console.log(gcd(50, 55));

    const expectedAnswer = String(gcd(randomNumber, randomNumber2));
    rounds.push([question, expectedAnswer]);
  }
  engine(description, rounds);
};

export default brainGcd;
