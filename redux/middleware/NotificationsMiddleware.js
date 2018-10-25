import { APP_HAS_STARTED } from "../actions/Control";
import { START_QUIZ } from "../actions/Quiz";
import { setLocalNotification, clearLocalNotification } from '../../library/notifications.js';

export const setUpLocalNotification = ({dispatch}) => next => action => {
  next(action);

  if (action.type === APP_HAS_STARTED) {
    console.log('APP HAS started Notifi middleware.');
    setLocalNotification();
  }
};

export const clearTodaysNotificationAddForTomorrow = ({dispatch}) => next => action => {
  next(action);

  if (action.type === START_QUIZ) {
    console.log('Quiz started - NOTIF MIDDLEWARE.');
    clearLocalNotification(); // remove the notification for today
    setLocalNotification(); // add notification for tomorrow
  }
};

export const notificationsMdl = [setUpLocalNotification, clearTodaysNotificationAddForTomorrow];
