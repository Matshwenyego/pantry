import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import COLOURS from '../../assets/colours';
import useAppStore from '../../store/app';
import styles from './styles';

const Spinner = () => {
  const isLoading = useAppStore(state => state.isLoading);
  return (
    isLoading && (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={COLOURS.WHITE} />
      </View>
    )
  );
};

export default Spinner;
