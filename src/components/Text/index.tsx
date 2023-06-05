import React, { CSSProperties, PropsWithChildren, useRef } from 'react';
import cs from 'classnames';
import { BaseText } from './styled';
import { ColorsTheme } from '@/theme/colors';

type TText = {
  fontWeight?: 'bold' | 'semibold' | 'medium' | 'regular' | 'light';
  style?: CSSProperties;
  size?: '12' | '14' | '16' | '18' | '20' | '24' | '36' | '40' | '48' | '56' | '72' | '96' | '128';
  align?: 'center' | 'left' | 'right' | 'unset';
  color?: keyof ColorsTheme;
  className?: string;
  maxWidth?: CSSProperties['maxWidth'];
  onClick?: () => void;
};

const Text = ({
  children,
  fontWeight = 'regular',
  size = '16',
  align = 'unset',
  style,
  color,
  className,
  maxWidth = 'none',
  onClick,
  ...props
}: PropsWithChildren<TText>) => {
  const comp = useRef<any>(null);
  return (
    <BaseText
      {...props}
      ref={comp}
      className={cs(`size-${size}`, `weight-${fontWeight}`, className)}
      color={color}
      align={align}
      maxWidth={maxWidth}
      style={{ ...style }}
      onClick={onClick}
    >
      {children}
    </BaseText>
  );
};

export default Text;
