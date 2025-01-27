import React, {JSX} from 'react';
import {Text, View, FlatList, TouchableOpacity, ImageProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/header';
import Banner from '../../components/banner';
import Button from '../../components/button';
import CartItem from '../../components/cartItem';

import useCartStore from '../../store/cart';

import styles from './styles';

interface CartItemType {
  id: string;
  name: string;
  price: number;
  category: string;
  image: ImageProps;
  count: number;
}

const Cart = (): JSX.Element => {
  const navigation = useNavigation();
  const {cartItems, cartInfo, addItem, subtractItem, removeItem} =
    useCartStore();

  const headerComponent = () => (
    <View style={styles.headerContainer}>
      <Header onBackPress={() => navigation.goBack()} />
      <View style={styles.mt20} />
      <Banner header={<Text style={styles.bannerText}>Cart</Text>} />
      <View style={styles.mt20} />
    </View>
  );

  const renderItem = ({item, index}: {item: CartItemType; index: number}) => (
    <>
      <CartItem
        description={item.name}
        price={item.price}
        count={item.count}
        source={item.image}
        onItemRemovePress={() => removeItem(item)}
        onItemAddPress={() => addItem(item)}
        onItemSubtractPress={() => subtractItem(item)}
      />
      {index !== cartItems.length - 1 && <View style={styles.itemDivider} />}
    </>
  );

  const emptyComponent = () => (
    <View>
      <Text style={styles.emptyText}>Add items to cart</Text>
    </View>
  );

  const footerComponent = () =>
    cartItems.length > 0 && (
      <View style={styles.footerContainer}>
        <Text style={styles.codeText}>Add your promo code</Text>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    );

  return (
    <>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.pb40}
        data={cartItems}
        horizontal={false}
        ListEmptyComponent={emptyComponent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={headerComponent}
        keyExtractor={(item, index) =>
          index.toString() + item.price + item.count + item.name
        }
        renderItem={renderItem}
        ListFooterComponent={footerComponent}
      />

      <View
        style={[
          styles.cartTotalsContainer,
          // eslint-disable-next-line react-native/no-inline-styles
          {height: cartItems?.length > 0 ? 200 : 'auto'},
        ]}>
        {cartItems?.length > 0 && (
          <>
            <View style={styles.row}>
              <Text style={styles.subtotalTitleText}>Sub total</Text>
              <Text style={styles.subtotalAmountText}>
                R {cartInfo?.total?.toFixed(2).toString()}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.subtotalTitleText}>Delivery</Text>
              <Text style={styles.subtotalAmountText}>R 30.00</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.row}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalText}>
                R {(cartInfo?.total + 30).toFixed(2).toString()}
              </Text>
            </View>
          </>
        )}
        <Button
          disabled={cartItems.length < 1}
          name="Checkout"
          onPress={() => {}}
        />
      </View>
    </>
  );
};

export default Cart;
