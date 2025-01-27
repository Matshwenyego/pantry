import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../screens/signup';
import BottomTab from './tab/BottomTab';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Signup" component={Signup} />
      <Screen name="BottomTab" component={BottomTab} />
    </Navigator>
  );
};

export default RootStack;
