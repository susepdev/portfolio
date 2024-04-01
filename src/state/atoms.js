import { atom } from 'recoil';

export const darkModeState = atom({
  key: 'darkModeState',
  default: false,
});

export const categoryState = atom({
  key: 'categoryState',
  default: [],
});