import React, { useMemo } from 'react';
import { createGlobalStyle, ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { getTheme } from '@/theme/index';
import { useAppSelector } from '@/state/hooks';
import { isDarkSelector } from '@/state/application/selector';

export default function ThemeProvider({ children }: { children: any }) {
  const darkMode = useAppSelector(isDarkSelector);
  const themeObject = useMemo(() => getTheme(darkMode), [darkMode]);
  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>;
}

export const ThemedGlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
  }

  html{
    font-size: 16px;
    background-color:  ${({ theme }) => theme['bg-primary']};
    color: ${({ theme }) => theme['text-primary']};
    letter-spacing: 0.01em;

    @media screen and (min-width: 1920px) {
      font-size: 18px;
    }

    @media screen and (min-width: 2048px) {
      font-size: 20px;
    }

    a{
      color: inherit;
      text-decoration: none;

      &:hover{
        color: inherit;
        text-decoration: underline;
      }
    }
  }

  summary::-webkit-details-marker {
    display:none;
  }
`;
