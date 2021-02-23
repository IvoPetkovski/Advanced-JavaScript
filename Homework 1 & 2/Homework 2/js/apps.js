let bigArray = [23,8,12,53,63,76,2,4,6,9];

const newOne = (arr, someNum) => arr.filter((element) => element % someNum === 0)
.sort((elem1, elem2) => elem1-elem2);

console.log(newOne(bigArray, 2));