const stringAscendingComparator = (a, b) => a.localeCompare(b);
const stringDescendingComparator = (a, b) => b.localeCompare(a);

const getUniqueLetters = text => {
  const letters = text
    .split('')
    .map(l => l.toLowerCase())
    .filter(l => l != ' ');
  const uniqueLetters = [...new Set(letters)];
  uniqueLetters.sort(stringAscendingComparator);

  return uniqueLetters;
};

module.exports = {
  getUniqueLetters,
  stringAscendingComparator,
  stringDescendingComparator,
};
