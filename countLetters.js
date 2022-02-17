// The function takes in a sentence (as a string).
// Returns an object contain count of each of the letters in that sentence.
// Skip spaces.

const countLetters = function(string) {
  let result = {};
  for (const char of string) {
    if (char === ' ') continue; // Skip space!
    result[char] ? result[char] += 1 : result[char] = 1;
  }
  return result;
};

module.exports = {countLetters};
