function twoNums(numbers, target) {
  const knownNumbers = {};
  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i];
    if (knownNumbers.hasOwnProperty(diff)) {
      return [knownNumbers[diff], i];
    }
    knownNumbers[numbers[i]] = i;
  }
}

twoNums([1, 2, 55, 22, 12, 4, 2], 4);
