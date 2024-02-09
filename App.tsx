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
import HomePage from './src/components/HomePage';

function App(): React.JSX.Element {

  return (
    <View style={styles.body}>
      <HomePage></HomePage>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'blue',
    flex: 1
  },
});

export default App;
