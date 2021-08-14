import engine from '../index.js';

const brainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rounds = [];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 10);
    const isPrime = (num) => {
      if (num < 2) {
        return false;
      }

      for (let j = 2; j <= Math.sqrt(num); j += 1) {
        if (num % j === 0) {
          return false;
        }
      }
      return true;
    };

    const sayPrimeOrNot = (num) => {
      const text = isPrime(num) ? 'yes' : 'no';
      return text;
    };

    const question = `Question: ${randomNumber}`;

    const expectedAnswer = sayPrimeOrNot(randomNumber);
    rounds.push([question, expectedAnswer]);
  }
  engine(description, rounds);
};

export default brainPrime;
