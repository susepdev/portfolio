import { atom } from 'recoil';

export const darkModeState = atom({
  key: 'darkModeState',
  default: false,
});

export const categoryState = atom({
  key: 'categoryState',
  default: [],
});

export const skillState = atom({
  key: 'skillState',
  default: [],
});

export const socialState = atom({
  key: 'socialState',
  default: [],
});

export const projectState = atom({
  key: 'projectState',
  default: [],
});