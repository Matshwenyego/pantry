import React, {JSX} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

interface Props {
  onItemRemovePress: () => void;
}

const Button = ({onItemRemovePress}: Props): JSX.Element => {
  return (
    <TouchableOpacity onPress={onItemRemovePress} style={styles.container}>
      <Text style={styles.text}>Remove</Text>
    </TouchableOpacity>
  );
};

export default Button;
