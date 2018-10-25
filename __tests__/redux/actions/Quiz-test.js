import * as actions from '../../../redux/actions/Quiz';

const showAnswerObj = {
  type: '[quiz] Show Answer'
}

const showQuestionObj = {
  type: '[quiz] Show Question'
}

describe('Testing Quiz action creators', () => {

  it('action creator show an card answer', () => {
    expect(actions.showAnswer()).toEqual(showAnswerObj);
  });

  it('action creator show an card question', () => {
    expect(actions.showQuestion()).toEqual(showQuestionObj);
  });

  it('action creator to mark answer as correct', () => {
    const correctObj = {
      type: '[quiz] Mark correct'
    }
    expect(actions.markCorrect()).toEqual(correctObj);
  });

  it('action creator to mark answer as incorrect', () => {
    const incorrectObj = {
      type: '[quiz] Mark incorrect'
    }
    expect(actions.markIncorrect()).toEqual(incorrectObj);
  });

  it('action creator to start a quiz', () => {
    expect(actions.startQuiz()).toEqual({type: '[quiz] Start quiz'});
  });

});
