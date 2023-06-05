import * as S from './styled';
import IconSVG from '@/components/IconSVG';
import ROUTE_PATH from '@/constants/route-path';
import Text from '@/components/Text';

const Header = () => {
  return (
    <S.Container>
      <S.Logo href={ROUTE_PATH.HOME}>
        <IconSVG name="logo.svg" maxWidth="48" />
        <Text size="24" fontWeight="semibold">
          Trustless Bridge
        </Text>
      </S.Logo>
    </S.Container>
  );
};

export default Header;
