import React, { PropsWithChildren, useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useAppDispatch } from '@/state/hooks';
import { resetUser } from '@/state/user/reducer';
import { useSelector } from 'react-redux';
import { getUserSelector } from '@/state/user/selector';
import { getConnection } from '@/web3/connection';

export interface IConnectorContext {
  onDisconnect: () => Promise<void>;
  onConnectMetamask: () => Promise<string | null>;
}

const initialValue: IConnectorContext = {
  onDisconnect: () => new Promise<void>(r => r()),
  onConnectMetamask: () => new Promise<null>(r => r(null)),
};

export const ConnectorContext = React.createContext<IConnectorContext>(initialValue);

export const ConnectorProvider: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren): React.ReactElement => {
  const { connector } = useWeb3React();

  const dispatch = useAppDispatch();
  const user = useSelector(getUserSelector);

  const onDisconnect = React.useCallback(async () => {
    if (connector && connector.deactivate) {
      await connector.deactivate();
    }
    await connector.resetState();
    dispatch(resetUser());
  }, [connector, dispatch, user]);

  const onConnectMetamask = async () => {
    if (connector) {
      try {
        const connection = getConnection(connector);
        if (!connection) {
          throw new Error('Get connection error.');
        }
        await connection.connector.activate();
      } catch (err: unknown) {
        // todo handle connect error
      }
    }
    return null;
  };

  const contextValues = useMemo((): IConnectorContext => {
    return {
      onDisconnect,
      onConnectMetamask,
    };
  }, [onDisconnect, onConnectMetamask]);

  return <ConnectorContext.Provider value={contextValues}>{children}</ConnectorContext.Provider>;
};
