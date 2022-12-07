/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import MyStack from './src/navigation/stack';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <MyStack />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
