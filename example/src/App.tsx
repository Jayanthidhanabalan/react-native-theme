import React, { useContext } from 'react';

import { SafeAreaView, Text, Button } from 'react-native';
import { ThemeContext } from 'react-native-theme';

const App = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <SafeAreaView>
      <Text style={{ backgroundColor: theme.primary, color: theme.secondary }}>
        {theme.primary}
      </Text>
      <Button onPress={() => changeTheme('LIGHT')} title="Toggle Theme" />
    </SafeAreaView>
  );
};
export default App;
