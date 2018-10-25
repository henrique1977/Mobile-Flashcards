export const APP_HAS_STARTED = '[app] App has started';
export const REFRESH = '[app] Refresh';

export const appHasStarted = () => ({
  type: APP_HAS_STARTED
});

export const refresh = () => ({
  type: REFRESH
});
