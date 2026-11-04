// Lesson: Writing your first tests
// export function max(a, b) {
//   if (a > b) return a;
//   else if (b > a) return b;
//   return a;
// }

export function max(a, b) {
  return (a > b) ? a : b;
}


// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

export function calculateAverage(numbers) {
  // return NaN;
  if (numbers.length === 0) return NaN;

  // return numbers[0];
  var average = 0
  var total = 0
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  average = total / numbers.length
  return average

  // return numbers.reduce((total, current) => total + current, 0) / numbers.length

}