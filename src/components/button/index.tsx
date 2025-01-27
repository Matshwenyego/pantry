import React, {JSX} from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import COLOURS from '../../assets/colours';

import styles from './styles';

interface Props {
  onPress: () => void;
  name: string;
  disabled?: boolean;
  props?: TouchableOpacityProps;
}

const Button = ({onPress, name, disabled, props}: Props): JSX.Element => {
  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.9}
      style={[
        styles.container,
        {backgroundColor: disabled ? COLOURS.OLIVE50 : COLOURS.OLIVE},
      ]}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
