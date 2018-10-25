import { combineReducers } from 'redux';
import DecksReducer from './DecksReducer';
import QuizReducer from './QuizReducer';
import ControlReducer from './ControlReducer';

export default combineReducers({
  decksReducer: DecksReducer,
  quizReducer: QuizReducer,
  controlReducer: ControlReducer,
});
