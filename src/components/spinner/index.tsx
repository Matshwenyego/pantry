import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import COLOURS from '../../assets/colours';

import styles from './styles';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={COLOURS.WHITE} />
    </View>
  );
};

export default Spinner;
