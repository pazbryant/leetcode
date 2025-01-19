const twoNumbers = (array: number[], target: number) => {
  const knowNumber: Record<string, number> = {};
  for (let i = 0; i < array.length; i++) {
    const diff = target - array[i];
    if (knowNumber.hasOwnProperty(diff)) return [array[i], i];
    knowNumber[array[i]] = i;
  }
};

console.log(twoNumbers([1, 2, 5, 3, 1], 2));
