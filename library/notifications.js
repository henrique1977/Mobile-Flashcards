import React from 'react';
import { AsyncStorage } from 'react-native';
import { Permissions, Notifications } from 'expo';

const NOTIFICATION_KEY = 'NOTIFICATION_KEY';

const createNotification = () => ({
  title: "Practice your Quiz!",
  body: "don't forget to practice your daily quiz. Cheers!",
  ios: {
    sound: true
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true
  }
});

const getDate = () => {
  let date = new Date();
  date.setDate(date.getDate() + 1); // set it for tomorrow
  date.setHours(18); // 6pm
  date.setMinutes(0);
  date.setSeconds(0);

  return date;
};

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then((status) => {

            if (status.status === 'granted' || status.status === 'undetermined') {
              Notifications.cancelAllScheduledNotificationsAsync();

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: getDate(),
                  repeat: 'day',
                }
              );
              // set flag to true
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          })
      }
    });
};

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync());
};
