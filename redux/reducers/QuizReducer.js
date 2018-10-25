import { SHOW_QUESTION, SHOW_ANSWER, QUESTION, ANSWER, MARK_CORRECT, MARK_INCORRECT, START_QUIZ } from '../actions/Quiz';

const initialState = {
  cardIndex: 0,
  cardSide: QUESTION,
  correctAnswers: 0
};

export default (state = initialState, action) => {

  switch(action.type) {

    case SHOW_ANSWER: {
      return {...state, cardSide: ANSWER};
    }

    case SHOW_QUESTION: {
      return {...state, cardSide: QUESTION};
    }

    case MARK_CORRECT: {
      return {...state, cardSide: QUESTION, cardIndex: (state.cardIndex + 1), correctAnswers: (state.correctAnswers + 1)};
    }

    case MARK_INCORRECT: {
      return {...state, cardSide: QUESTION, cardIndex: (state.cardIndex + 1)};
    }

    case START_QUIZ: {
      return initialState;
    }

    default:
      return state;
  }
}
