import QuizReducer from '../../../redux/reducers/QuizReducer';

const initialState = {
  cardIndex: 0,
  cardSide: 'question',
  correctAnswers: 0
};

describe('Tests for Decks Reducer ', () => {
  it('it renders empty state if nothing is passed', () => {
    expect(QuizReducer(undefined, {})).toEqual(initialState);
  });


  it('it renders the initial state that is passed to the reducer', () => {
    expect(QuizReducer(initialState, {})).toEqual(initialState);
  });

  it('changes the cardSide to answer', () => {
    const finalState = {
      cardIndex: 0,
      cardSide: 'answer',
      correctAnswers: 0
    };
    expect(QuizReducer(initialState, {type: '[quiz] Show Answer'})).toEqual(finalState);
  });

  it('changes the cardSide to answer', () => {

    const answerState = {
      cardIndex: 3,
      cardSide: 'answer',
      correctAnswers: 2
    };

    const questionState = {
      cardIndex: 3,
      cardSide: 'question',
      correctAnswers: 2
    };
    expect(QuizReducer(answerState, {type: '[quiz] Show Question'})).toEqual(questionState);
  });

  it('add 1 to the correct answer score and increase the cardIndex by 1', () => {

    const state0 = {
      cardIndex: 4,
      cardSide: 'question',
      correctAnswers: 0
    };

    const finalState0 = {
      cardIndex: 5,
      cardSide: 'question',
      correctAnswers: 1
    };

    const state1 = {
      cardIndex: 2,
      cardSide: 'answer',
      correctAnswers: 1
    };

    const finalState1 = {
      cardIndex: 3,
      cardSide: 'question',
      correctAnswers: 2
    };
    expect(QuizReducer(state0, {type: '[quiz] Mark correct'})).toEqual(finalState0);
    expect(QuizReducer(state1, {type: '[quiz] Mark correct'})).toEqual(finalState1);
  });

  it('increase the cardIndex by 1', () => {

    const state0 = {
      cardIndex: 4,
      cardSide: 'question',
      correctAnswers: 0
    };

    const finalState0 = {
      cardIndex: 5,
      cardSide: 'question',
      correctAnswers: 0
    };

    const state1 = {
      cardIndex: 2,
      cardSide: 'answer',
      correctAnswers: 1
    };

    const finalState1 = {
      cardIndex: 3,
      cardSide: 'question',
      correctAnswers: 1
    };
    expect(QuizReducer(state0, {type: '[quiz] Mark incorrect'})).toEqual(finalState0);
    expect(QuizReducer(state1, {type: '[quiz] Mark incorrect'})).toEqual(finalState1);
  });


  it('resets the state when a new quiz starts', () => {

    const whateverState = {
      cardIndex: 4,
      cardSide: 'answer',
      correctAnswers: 0
    };

    expect(QuizReducer(whateverState, {type: '[quiz] Start quiz'})).toEqual(initialState);
  });



});
