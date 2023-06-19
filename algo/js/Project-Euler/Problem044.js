/**
 * Problem 44 - Pentagon numbers
 *
 * @see {@link https://projecteuler.net/problem=44}
 *
 * Pentagonal numbers are generated by the formula, Pn=n(3n−1)/2. The first ten pentagonal numbers are:
 * 1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...
 * It can be seen that P4 + P7 = 22 + 70 = 92 = P8. However, their difference, 70 − 22 = 48, is not pentagonal.
 * Find the pair of pentagonal numbers, Pj and Pk, for which their sum and difference are pentagonal and D = |Pk − Pj| is minimised; what is the value of D?
 *
 * @author ddaniel27
 */

function problem44 (k) {
  if (k < 1) {
    throw new Error('Invalid Input')
  }

  while (true) {
    k++
    const n = k * (3 * k - 1) / 2 // calculate Pk

    for (let j = k - 1; j > 0; j--) {
      const m = j * (3 * j - 1) / 2 // calculate all Pj < Pk
      if (isPentagonal(n - m) && isPentagonal(n + m)) { // Check sum and difference
        return n - m // return D
      }
    }
  }
}

/**
 * Function to check if a number is pentagonal or not
 * This function solves n
 * applying the solution for a quadratic function
 * @see {@link https://en.wikipedia.org/wiki/Quadratic_function}
 */

function isPentagonal (n) {
  const pent = (Math.sqrt(24 * n + 1) + 1) / 6
  return pent === Math.floor(pent)
}

export { problem44 }
