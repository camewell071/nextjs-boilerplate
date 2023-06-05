import React, { ReactNode } from 'react';
import * as S from './styles';
import { Header } from '@/layouts/Header';

interface IProp {
  children: ReactNode;
}

const DefaultLayout: React.FC<IProp> = ({ children }) => {
  return (
    <S.Container>
      <Header />
      {children}
    </S.Container>
  );
};

export default DefaultLayout;
