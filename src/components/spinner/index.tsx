import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import COLOURS from '../../assets/colors';

const Spinner = () => {
  return (
    <View
      style={{
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000080',
      }}>
      <ActivityIndicator size={'large'} color={COLOURS.WHITE} />
    </View>
  );
};

export default Spinner;
