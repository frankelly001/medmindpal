import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationTheme} from './src/navigation/theme';
import {navigationRef} from './src/navigation/rootNavigation';
import MainNavigation from './src/navigation/main-navigation';
import {Host} from 'react-native-portalize';
import AppToast from './src/components/app-toast';
import {LogBox} from 'react-native';

function App(): JSX.Element {
  LogBox.ignoreLogs([
    'Using Math.random is not cryptographically secure! Use bcrypt.setRandomFallback to set a PRNG.',
    'redux-persist failed to create sync storage',
  ]);

  return (
    <NavigationContainer theme={navigationTheme} ref={navigationRef}>
      <Host>
        <MainNavigation />
      </Host>
      <AppToast />
    </NavigationContainer>
  );
}

export default App;
