import DecksReducer from '../../../redux/reducers/DecksReducer';

const initialState = {};

describe('Tests for Decks Reducer ', () => {

  it('it renders empty state if nothing is passed', () => {
    expect(DecksReducer(undefined, {})).toEqual(initialState);
  });

  it('it renders the initial state that is passed to the reducer', () => {
    expect(DecksReducer(initialState, {})).toEqual(initialState);
  });



  it('saves a new title (create new deck)', () => {

    const title = 'React';
    const saveNewDeckObj = {
      type: '[deck] Save new deck title',
      payload: {title: title}
    };

    const endState = {
      React: {
        title: 'React',
        questions: []
      }
    };
    expect(DecksReducer(initialState, saveNewDeckObj)).toEqual(endState);
  });

  it('adds a card to a deck', () => {

    const initState = {
      MyDeck: {
        title: 'MyDeck',
        questions: [
          {question: "What's your favorite language?", answer: "Javascript"}
        ]
      },
      React: {
        title: 'React',
        questions: []
      }
    };

    const title = 'React';
    const card = {question: 'Where is foo?', answer: 'bar'};
    const addCardObj = {
      type: '[deck] Add card to deck',
      payload: {title: title, card: card}
    };

    const endState = {
      MyDeck: {
        title: 'MyDeck',
        questions: [
          {question: "What's your favorite language?", answer: "Javascript"}
        ]
      },
      React: {
        title: 'React',
        questions: [
           {question: 'Where is foo?', answer: 'bar'}
        ]
      }
    };

    expect(DecksReducer(initState, addCardObj)).toEqual(endState);
  });

  it('populate initial state from storage', () => {

    const decks = {"IELTS":{"title":"IELTS","questions":[]},"ITALIANO":{"title":"ITALIANO","questions":[]}};
    const actionObj = {
      type: '[deck] Populate initial decks from storage',
      payload: decks
    };

    const endState = decks;

    expect(DecksReducer(initialState, actionObj)).toEqual(endState);
  });


});
