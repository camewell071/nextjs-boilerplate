import styled from 'styled-components';
import px2rem from '@/utils/rem';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: ${px2rem(32)};
  max-width: ${px2rem(600)};
  background-color: ${({ theme }) => theme['bg-secondary']};
  border-radius: 20px;
`;
