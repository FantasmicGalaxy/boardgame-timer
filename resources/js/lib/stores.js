import { writable } from 'svelte/store';

export const turnLength = createLocalStorageStore('turnLength', 300);
export const players = createLocalStorageStore('players', [
  { id: Date.now(), name: 'Jack' },
  { id: Date.now() + 1, name: 'Jill' }
]);
export const muteAlarm = createLocalStorageStore('muteAlarm', false);

function createLocalStorageStore(key, defaultValue) {
  let initialValue;
  try {
    initialValue = window ?
      JSON.parse(window.localStorage.getItem(key)) ?? defaultValue
      : defaultValue;
  } catch (error) {
    console.log('Malformed data found in localStorage, resetting to default');

    initialValue = defaultValue;
    if (window)
      window.localStorage.setItem(key, JSON.stringify(defaultValue));
  }


  const store = writable(initialValue);

  store.subscribe((value) => {
    if (window) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  });

  return store;
}