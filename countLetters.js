const countLetters = function(string) {
  let result = {};
  for (const char of string) {
    if (char === ' ') continue; // Skip space!
    result[char] ? result[char] += 1 : result[char] = 1;
  }
  return result;
};

module.exports = {countLetters};
