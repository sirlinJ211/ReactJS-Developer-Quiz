//3) Refactor the code below. By refactor we mean that you should reorganize the code to reduce the unnecessary complexity, and improve readability. In this process you should not modify the way the code functions. Do not create functions or new constants, simply refactor the code.

if (recipe == "SPANISH" || recipe == "FRENCH" || recipe == "ENGLISH") {
  fudge = `${recipe}_FUDGE`;
  amt = base * fudge;
  sugar = 2 * bottom(amt) + top(amt) * 1.17;
  if (recipe == "FRENCH") {
    chocolate = 7;
  }
} else {
  fudge = 1;
  amt = base;
  sugar = 2 * bottom(amt) + top(amt) * 1.17;
}
