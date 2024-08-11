import { AppRegistry } from 'react-native';
import React from 'react';
import App from './src/App';
import { name as appName } from './app.json';
import { ThemeProvider } from 'react-native-theme';

AppRegistry.registerComponent(appName, () => App1);

const App1 = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};
