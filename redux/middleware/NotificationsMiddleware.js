import { APP_HAS_STARTED } from "../actions/Control";
import { START_QUIZ } from "../actions/Quiz";
import { setLocalNotification, clearLocalNotification } from '../../library/notifications.js';

export const setUpLocalNotification = ({dispatch}) => next => action => {
  next(action);

  if (action.type === APP_HAS_STARTED) {
    setLocalNotification(); // add daily notification starting tomorrow
  }
};

export const clearTodaysNotificationAddForTomorrow = ({dispatch}) => next => action => {
  next(action);

  if (action.type === START_QUIZ) {
    clearLocalNotification(); // remove the notification for today
    setLocalNotification(); // add daily notification starting tomorrow
  }
};

export const notificationsMdl = [setUpLocalNotification, clearTodaysNotificationAddForTomorrow];
