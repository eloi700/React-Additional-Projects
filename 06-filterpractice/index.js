// Challenge 1 - Filter all small values less than 40
const values = [12, 89, 18, 380, 25, 130, 37, 44];
const filteredValues = values.filter((v) => v < 40);
console.log(filteredValues);

// Challenge 2 - Filter all prime numbers in an Array
// Prime Numbers - Divisible by 1 and by itself.
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const primeNos = array.filter((prime) => {
  for (let i = 2; prime > i; i++) {
    if (prime % i === 0) {
      return false;
    }
  }
  return prime > 1;
});

console.log(primeNos); //[2, 3, 5, 7, 11, 13]

// OR ---------------------
function isPrime(num) {
  for (let i = 2; prime > i; i++) {
    if (num % i === 0) {
      return false;
    }
    return n > 1;
  }
}
console.log(primeNos); //[2, 3, 5, 7, 11, 13]
