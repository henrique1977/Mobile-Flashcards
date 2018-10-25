export const ADD_NEW_DECK = '[deck] Add new deck';
export const SAVE_DECK_TITLE = '[deck] Save new deck title';
export const DELETE_DECK = '[deck] Delete deck';
export const ADD_CARD_TO_DECK = '[deck] Add card to deck';
export const POPULATE_INITIAL_DECKS = '[deck] Populate initial decks from storage';

export const addNewDeck = (title) => ({
  type: ADD_NEW_DECK,
  payload: {title: title}
});

export const saveDeckTitle = (title) => ({
  type: SAVE_DECK_TITLE,
  payload: {title: title}
});

export const deleteDeck = (id) => ({
  type: DELETE_DECK,
  payload: {id: id}
});

export const addCardToDeck = (title, card) => ({
  type: ADD_CARD_TO_DECK,
  payload: {title, card}
});

export const populateDecks = (decksObj) => ({
  type: POPULATE_INITIAL_DECKS,
  payload: decksObj
});
