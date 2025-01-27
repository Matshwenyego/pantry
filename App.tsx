import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigation';
import Spinner from './src/components/spinner';

import COLOURS from './src/assets/colours';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <View style={styles.container}>
          <RootStack />
        </View>
      </SafeAreaView>
      <Spinner />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.CREAM,
  },
});

export default App;
