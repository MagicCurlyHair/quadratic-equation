module.exports = function solveEquation(equation) {
  // regular expression to get a, b, c as strings
  let regexp = /^-?\d+|[^\^](- )?\d+/g;
  let results = equation.match(regexp);
  // delete all whitespace and parse as integer
  let noWhitespace = /\S/g;
  for (let i = 0; i < results.length; i++){
    results[i] = parseInt(results[i].match(noWhitespace).join(""));
  }
  let a = results[0],
      b = results[1];
      c = results[2];
  // get discriminant and solve equation
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  let x1 = Math.round((-b + Math.sqrt(discriminant)) / (2 * a));
  let x2 = Math.round((-b - Math.sqrt(discriminant)) / (2 * a));
  // sort answers array
  let answers = [x1, x2];
  answers.sort((a,b) => {return a - b;});
  return answers;
}
