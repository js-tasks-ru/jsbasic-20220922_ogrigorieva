function factorial(number) {

  let result = 1;

  while (number--) {
    result *= number + 1;
  }

  return result;
}
