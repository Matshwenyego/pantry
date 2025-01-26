import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// navigation
import RootStack from './src/navigation';

// components
import Spinner from './src/components/spinner';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <View style={styles.container}>
          <RootStack />
        </View>
      </SafeAreaView>
      {/* delay then show spinner */}
      {/* <Spinner /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
