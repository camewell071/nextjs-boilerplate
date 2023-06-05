import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from '@/state';
import Meta from '@/components/Meta';
import { Provider } from 'react-redux';
import ThemeProvider, { ThemedGlobalStyle } from '@/theme/theme';

let persistor = persistStore(store);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Meta />
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <ThemedGlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
