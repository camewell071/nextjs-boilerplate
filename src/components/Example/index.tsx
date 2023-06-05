import * as S from './styles';

const Example = ({
  title = 'Next.js Boilerplate',
  description = 'TypeScript, ReactJS, NextJS & Styled Components',
}) => (
  <S.Container>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Container>
);

export default Example;
