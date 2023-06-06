import * as S from './styles';
import Button from '@/components/Button';
import { useContext } from 'react';
import { ConnectorContext } from '@/contexts/connector.context';

const Home = () => {
  const { onConnectMetamask } = useContext(ConnectorContext);

  return (
    <S.Container>
      <Button sizes="stretch" onClick={onConnectMetamask}>
        Transfer
      </Button>
    </S.Container>
  );
};

export default Home;
