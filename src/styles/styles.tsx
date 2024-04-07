import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import "./styles.scss";

interface ThemeInterface {
  color: {
    primary: string;
    secondary: string;
    black: string;
    white: string;
  };
}


interface ThemeProps {
  children: ReactNode;
}

const theme: ThemeInterface = {
  color: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)', 
    black: 'var(--color-black)',
    white: 'var(--color-white)'
  },
};

export const Theme: React.FC<ThemeProps> = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
