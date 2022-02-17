// The function takes a string.
// Returns all the indices (zero-based positions) in the string where each letter is found.
// Skip spaces.

const letterPositions = function(sentence) {
  let result = {};
  for (let index = 0; index < sentence.length; index++){
    const char = sentence[index];
    if (char === ' ') continue; //Skip Space!
    result[char] ? result[char].push(index) : result[char] = [index];
  }
  return result;
}

module.exports = {letterPositions};