import React from 'react';
import {Text} from 'react-native';

import styles from './styles';

interface Props {
  description: string;
  price: number;
  count: string;
}

function Description({count, description, price}: Props): React.JSX.Element {
  return (
    <>
      <Text style={styles.description}>
        {count} {description?.toUpperCase()}
      </Text>
      <Text style={styles.price}>R {price.toString()}</Text>
    </>
  );
}

export default Description;
