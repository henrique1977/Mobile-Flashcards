import * as actions from '../../../redux/actions/Decks';

/*
it needs to be able to:
  - add a new deck
  - delete a deck
  - add a new card to a deck

*/

describe('Testing Decks action creators', () => {

  const title = 'my deck';
  const addNewDeckObj = {
    type: '[deck] Add new deck',
    payload: {title: title}
  };

  it('creates an action creator to add new deck', () => {
    expect(actions.addNewDeck(title)).toEqual(addNewDeckObj);
  });

  const saveNewDeckObj = {
    type: '[deck] Save new deck title',
    payload: {title: title}
  };

  //V2
  it('creates an action creator to save new deck', () => {
    expect(actions.saveDeckTitle(title)).toEqual(saveNewDeckObj);
  });

  const deckId = "GH78Su9";
  const deleteDeckObj = {
    type: '[deck] Delete deck',
    payload: {id: deckId}
  };

  it('creates an action creator to delete a deck', () => {
    expect(actions.deleteDeck(deckId)).toEqual(deleteDeckObj);
  });

  it('creates an action creator to add a new card to a deck', () => {

    const title = 'REACT';
    const card = {question: 'Where is foo?', answer: 'bar'};
    const addCardObj = {
      type: '[deck] Add card to deck',
      payload: {title: title, card: card}
    };

    expect(actions.addCardToDeck(title, card)).toEqual(addCardObj);
  });

  it('creates an action creator to populate reducer with initial decks list from storage', () => {

    const decksObj = {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    };
    const populateAction = {
      type: '[deck] Populate initial decks from storage',
      payload: decksObj
    };
    expect(actions.populateDecks(decksObj)).toEqual(populateAction);
  });


});
