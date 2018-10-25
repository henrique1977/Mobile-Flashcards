import { AsyncStorage } from 'react-native';
import { newDeckWithTitle } from './DeckFactory';

const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY';

export const getDecks = async () => {
  try {
    const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    if (decks !== null) {
      return JSON.parse(decks);
    }
   } catch (error) {
     // Error retrieving data
     console.log('Error retrieving decks');
   }
}

export const getDeck = async (title) => {
  try {
    const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    if (decks !== null) {
      return JSON.parse(decks)[title];
    }
   } catch (error) {
     // Error retrieving data
     console.log('Error retrieving deck for title: ' + title);
   }
}

export const saveDeckTitle = (title) => {
  console.log('API: SAVE DECK TITLE CALLED!');
  const newDeck = newDeckWithTitle(title);
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({[title]: newDeck}));
}

export const addCardToDeck = async (title, card) => {
  console.log('Lets save a card into the deck: ');
  try {
    const deck = await getDeck(title);
    if (deck !== null) {
      const newDeck = {...deck, questions: [...deck.questions, card]};
      return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({[title]: newDeck}));
    }
   } catch (error) {
     // Error retrieving data
     console.log('Error retrieving deck for title: ' + title);
   }
}
