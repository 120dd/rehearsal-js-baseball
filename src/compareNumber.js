export const checkNothing = (userArray, computerArray) => {
  let ballStrikeCount = 0;
  if (computerArray.includes(userArray[0])) {
    ballStrikeCount += 1;
  }
  if (computerArray.includes(userArray[1])) {
    ballStrikeCount += 1;
  }
  if (computerArray.includes(userArray[2])) {
    ballStrikeCount += 1;
  }
  return ballStrikeCount;
};

export const checkStrike = (computerArray, userArray) => {
  let strikeCount = 0;
  if (String(computerArray[0]) === userArray[0]) {
    strikeCount += 1;
  }
  if (String(computerArray[1]) === userArray[1]) {
    strikeCount += 1;
  }
  if (String(computerArray[2]) === userArray[2]) {
    strikeCount += 1;
  }
  return strikeCount;
};
