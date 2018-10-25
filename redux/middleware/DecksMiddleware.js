import { ADD_NEW_DECK, ADD_CARD_TO_DECK, saveDeckTitle, populateDecks } from "../actions/Decks";
import { APP_HAS_STARTED } from "../actions/Control";
import * as api from '../../library/api';

export const addNewDeck = ({dispatch}) => next => action => {
  next(action);

  if (action.type === ADD_NEW_DECK) {
    const {title} = action.payload;
    dispatch(saveDeckTitle(title));
    api.saveDeckTitle(title); // save using AsyncStorage
  }
};

export const getDecksFromStorage = ({dispatch}) => next => action => {
  next(action);

  if (action.type === APP_HAS_STARTED) {
    const decksPromise = api.getDecks()
      .then((decksObj) => {
        dispatch(populateDecks(decksObj)); // update redux with data from storage
      });
  }
};

export const saveCardtoStorage = ({dispatch}) => next => action => {
  next(action);

  if (action.type === ADD_CARD_TO_DECK) {
    const decksPromise = api.addCardToDeck(action.payload.title, action.payload.card)
      .then((decksObj) => {
        // Card saved to storage.
      });
  }
};

export const decksMdl = [addNewDeck, getDecksFromStorage, saveCardtoStorage];
