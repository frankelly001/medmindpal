/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {globalStoreSliceState} from './src/redux/global-store/type';
import {storeSliceType} from './src/redux/storeSliceType';
import {NavigationContainer} from '@react-navigation/native';
import {navigationTheme} from './src/navigation/theme';
import {navigationRef} from './src/navigation/rootNavigation';
import MainNavigation from './src/navigation/main-navigation';
import {Host} from 'react-native-portalize';

function App(): JSX.Element {
  const {user} = useSelector(
    (state: storeSliceType) => state.globalStoreReducer,
  );

  return (
    <NavigationContainer theme={navigationTheme} ref={navigationRef}>
      {/* <SafeAreaView style={{flex: 1}}> */}
      <Host>
        <MainNavigation />
      </Host>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}

export default App;
