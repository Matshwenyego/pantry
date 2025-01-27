import React from 'react';
import {View, Image} from 'react-native';

import SecondaryButton from './button';
import Counter from './counter';
import Description from './description';

import styles from './styles';

// refactor
// remove inline functions

interface Props {
  description: string;
  price: number;
  count: string;
  onItemAddPress: () => void;
  onItemSubtractPress: () => void;
  onItemRemovePress: () => void;
}

function CartItem({
  description,
  price,
  count,
  onItemAddPress,
  onItemSubtractPress,
  onItemRemovePress,
}: Props): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={{height: 126, flex: 0.4}}>
        <Image
          source={require('../../assets/images/Tomahawk.png')}
          style={{height: 126, width: 133}}
        />
      </View>
      <View style={{flex: 0.6, justifyContent: 'center'}}>
        <Description description={description} price={price} count={count} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
