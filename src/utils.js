export const convertToArray = (inputData) => {
  const nums = [];
  do {
    nums.push(inputData % 10); // 1
    inputData = Math.floor(inputData / 10); // 2
  } while (inputData > 0);
  return nums;
};

export const showResult = (message) => {
  const RESULT = document.querySelector('#result');
  RESULT.innerHTML = message;
};
