import { FC } from 'react';
import SVG from 'react-inlinesvg';
import * as S from './styled';
import { CDN_ICON_URL } from '@/configs';

export type IconSVGProps = {
  name: string;
  className?: string;
  maxWidth?: string;
  maxHeight?: string;
  type?: string;
  color?: string;
  onClick?: () => void;
};

const IconSVG: FC<IconSVGProps> = ({
  name,
  className = '',
  maxWidth = '',
  maxHeight = '',
  type = '',
  color = '',
  onClick,
}) => {
  return (
    <S.Container
      className={className}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      type={type}
      color={color}
      onClick={onClick}
    >
      <SVG src={`${CDN_ICON_URL}/${name}`} />
    </S.Container>
  );
};

export default IconSVG;
