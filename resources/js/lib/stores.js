import { writable } from 'svelte/store';

const defaultTurnLength = 300;
const defaultPlayers = [
  { id: Date.now(), name: '' },
  { id: Date.now() + 1, name: '' }
];

const initialTurnLength = window
  ? +window.localStorage.getItem('turnLength') ?? defaultTurnLength
  : defaultTurnLength;
const initialPlayers = window
  ? JSON.parse(window.localStorage.getItem('players')) ?? defaultPlayers
  : defaultPlayers;

export const turnLength = writable(initialTurnLength);
export const players = writable(initialPlayers);

turnLength.subscribe((value) => {
  if (window) {
    window.localStorage.setItem('turnLength', value.toString());
  }
});
players.subscribe((value) => {
  if (window) {
    window.localStorage.setItem('players', JSON.stringify(value));
  }
});
