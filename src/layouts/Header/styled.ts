import styled from 'styled-components';
import px2rem from '@/utils/rem';
import Link from 'next/link';

const Container = styled.div`
  min-height: 98px;
  padding-left: ${px2rem(60)};
  padding-right: ${px2rem(60)};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${px2rem(16)};
  text-decoration: none;
`;

export { Container, Logo };
