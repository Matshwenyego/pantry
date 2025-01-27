import React, {JSX} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//icons
import AddIcon from '../../../assets/icons/Add.svg';
import RemoveIcon from '../../../assets/icons/Remove.svg';

import styles from './styles';

interface Props {
  onItemAddPress: () => void;
  onItemSubtractPress: () => void;
  count: number;
  iconStyle?: any;
}

const Counter = ({
  onItemAddPress,
  onItemSubtractPress,
  count,
  iconStyle,
}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onItemAddPress} style={[styles.button, iconStyle]}>
        <AddIcon />
      </TouchableOpacity>
      <Text style={styles.text}>{count.toString()}</Text>
      <TouchableOpacity onPress={onItemSubtractPress} style={[styles.button, iconStyle]}>
        <RemoveIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
