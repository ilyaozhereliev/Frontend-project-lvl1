import engine from '../index.js';

const brainProgression = () => {
  const description = 'What number is missing in the progression?';
  const rounds = [];

  for (let i = 0; i < 3; i += 1) {
    const progression = () => {
      const result = [];

      const randomNum = Math.floor(Math.random() * 100);
      let randomNum2 = Math.floor(Math.random() * 1000);

      const progressionArr = [];
      for (let j = 0; j < 10; j += 1) {
        randomNum2 += randomNum;
        progressionArr.push(randomNum2);
      }

      const rand = Math.floor(Math.random() * 10);
      const hideNum = progressionArr[rand];

      const index = progressionArr.indexOf(hideNum);

      if (index !== -1) {
        progressionArr[index] = '...';
      }

      result.push(progressionArr);
      result.push(hideNum);
      return result;
    };

    const progressionResult = progression();

    const question = `Question: ${progressionResult[0]}`;

    const expectedAnswer = String(progressionResult[1]);
    rounds.push([question, expectedAnswer]);
  }
  engine(description, rounds);
};

export default brainProgression;
