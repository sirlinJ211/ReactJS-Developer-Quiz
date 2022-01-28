function sortNum(num: number): string | number {
  if (num % 22 === 0) {
    return "candybar";
  } else if (num % 2 === 0) {
    return "candy";
  } else if (num % 11 === 0) {
    return "bar";
  } else {
    return num;
  }
}
