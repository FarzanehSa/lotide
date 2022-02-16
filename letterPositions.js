const letterPositions = function(sentence) {
  let result = {};
  for (let index = 0; index < sentence.length; index++){
    const char = sentence[index];
    if (char === ' ') continue;
    result[char] ? result[char].push(index) : result[char] = [index];
  }
  return result;
}

module.exports = {letterPositions};