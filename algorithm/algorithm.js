function miniMaxSum(arr) {
  const totalArray = [...arr].reduce((a, b) => {
    return a + b;
  }, 0);

  const minNumber = totalArray - Math.max(...arr);
  const maxNumber = totalArray - Math.min(...arr);

  return console.log(`${minNumber} ${maxNumber}`);
}

miniMaxSum([1, 2, 3, 4, 5]); // output: 10 14
miniMaxSum([1, 3, 5, 7, 9]); // output: 16 24
