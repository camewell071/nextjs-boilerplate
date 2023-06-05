import { darkTheme, lightTheme } from '@/theme/colors';
import { css } from 'styled-components';

export const BREAKPOINTS = {
  xs: 396,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
  xxxl: 1920,
  xxxxl: 2048,
};

const fonts = {
  code: 'serif',
};

function getSettings() {
  return {
    grids: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '24px',
      xl: '32px',
    },
    fonts,
    breakpoint: BREAKPOINTS,
  };
}

type MediaWidthsType = typeof BREAKPOINTS;
type MediaWidthsKeysType = keyof MediaWidthsType;

export const MediaQueryBuilder = (key: MediaWidthsKeysType, innerCSS?: any) =>
  css`
    @media (max-width: ${BREAKPOINTS[key]}px) {
      ${innerCSS};
    }
  `;

export function getTheme(darkMode: boolean) {
  return {
    darkMode,
    ...(darkMode ? darkTheme : lightTheme),
    ...getSettings(),
  };
}
