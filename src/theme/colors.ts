import { DefaultTheme } from 'styled-components';

export const colors = {
  white: '#FFFFFF',
  black: '#000000',

  dark: {
    '100': '#1B1E26',
  },

  light: {
    '100': '#FFFFFF',
  },

  blue: {
    A: '#3772FF',
  },
};

export type ColorsTheme = DefaultTheme;

const commonTheme = {
  ...colors,
  white: colors.white,
  black: colors.black,
  // colors system
};

export const darkTheme = {
  ...commonTheme,

  'bg-primary': colors.black,
  'bg-secondary': colors.dark['100'],

  'text-primary': colors.light['100'],
  'text-button': colors.light['100'],

  'button-primary': colors.blue.A,
};

export const lightTheme = {
  ...commonTheme,

  'bg-primary': colors.light['100'],
  'bg-secondary': colors.dark['100'],

  'text-primary': colors.dark['100'],
  'text-button': colors.light['100'],

  'button-primary': colors.blue.A,
};
