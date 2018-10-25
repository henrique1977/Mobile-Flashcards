import { SAVE_DECK_TITLE, ADD_CARD_TO_DECK, POPULATE_INITIAL_DECKS} from '../actions/Decks';
import { newDeckWithTitle } from '../../library/DeckFactory';

const initialState = {
};

export default (state = initialState, action) => {

  switch(action.type) {

    case SAVE_DECK_TITLE: {
      const newDeckTitle = action.payload.title;
      const newDeck = newDeckWithTitle(newDeckTitle);
      const newState =  {...state, [newDeckTitle]: newDeck};

      return newState;
    }

    case ADD_CARD_TO_DECK: {
      const {title, card} = action.payload;
      const deck = state[title];
      const questions = [...deck.questions, card];

      return {...state, [title]: {...deck, questions}};
    }

    case POPULATE_INITIAL_DECKS: {
      return (typeof action.payload !== 'undefined') ? action.payload : state; // return the new state from storage if available
    }

    default:
      return state;
  }
}
