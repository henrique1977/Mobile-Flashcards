import uuidv1 from 'uuid';

export const generateId = () => uuidv1();

export const selectDeckByIdFromArray = (id, decksArray) => (decksArray.filter(x => x.id === id)).reduce((acc, elem) => elem);
export const objToArray = obj => Object.keys(obj).map(k => obj[k]);

export const getCardCountExpression = (num) => {
  if (num === 0) { return 'Empty deck'};
  if (num === 1) { return '1 card'};
  if (num > 1) { return num + ' cards'};
};

export const selectDeckByTitle = (title, decks) => decks[title];

export const totalCards = deck => deck.questions.length;
export const round2Dec = num => (Math.round((num + 0.00001) * 100) / 100);
