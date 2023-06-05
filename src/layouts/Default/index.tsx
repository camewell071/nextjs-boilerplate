import React, { ReactNode } from 'react';
import * as S from './styles';

interface IProp {
  children: ReactNode;
}

const DefaultLayout: React.FC<IProp> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default DefaultLayout;
