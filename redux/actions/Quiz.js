export const SHOW_ANSWER = '[quiz] Show Answer';
export const SHOW_QUESTION = '[quiz] Show Question';
export const MARK_CORRECT = '[quiz] Mark correct';
export const MARK_INCORRECT = '[quiz] Mark incorrect';
export const START_QUIZ = '[quiz] Start quiz';

export const QUESTION = 'question';
export const ANSWER = 'answer';

export const showAnswer = () => ({
  type: SHOW_ANSWER
});

export const showQuestion = () => ({
  type: SHOW_QUESTION
});

export const markCorrect = () => ({
  type: MARK_CORRECT
});

export const markIncorrect = () => ({
  type: MARK_INCORRECT
});

export const startQuiz = () => ({
  type: START_QUIZ
});
