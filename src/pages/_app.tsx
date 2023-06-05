import GlobalStyles from '@/styles/global';
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from '@/state';
import Meta from '@/components/Meta';
import { Provider } from 'react-redux';

let persistor = persistStore(store);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Meta />
        <GlobalStyles />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default App;
