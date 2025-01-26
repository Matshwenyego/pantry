import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Signup from '../screens/signup';

//bottom tab
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
