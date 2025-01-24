import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../screens/signup';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator>
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
};

export default RootStack;
