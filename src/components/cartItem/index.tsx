import React from 'react';
import {View, Image} from 'react-native';

import SecondaryButton from './button';
import Counter from './counter';
import Description from './description';

import styles from './styles';

interface Props {
  description: string;
  price: number;
  count: number;
  source: any;
  onItemAddPress: () => void;
  onItemSubtractPress: () => void;
  onItemRemovePress: () => void;
}

function CartItem({
  description,
  price,
  count,
  source,
  onItemAddPress,
  onItemSubtractPress,
  onItemRemovePress,
}: Props): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={source} style={styles.image} />
      </View>
      <View style={styles.right}>
        <Description description={description} price={price} count={count} />
        <View style={styles.container}>
          <SecondaryButton onItemRemovePress={onItemRemovePress} />
          <Counter
            count={count}
            onItemAddPress={onItemAddPress}
            onItemSubtractPress={onItemSubtractPress}
          />
        </View>
      </View>
    </View>
  );
}

export default CartItem;
