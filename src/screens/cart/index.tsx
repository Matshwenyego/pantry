import React, {JSX} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// components
import Header from '../../components/header';
import Banner from '../../components/banner';
import Button from '../../components/button';
import CartItem from '../../components/cartItem';

import styles from './styles';

const data = [
  {
    description: 'WHOLE FREE RANGE CHICKEN',
    price: '79.99',
    count: '2',
  },
  {
    description: 'WHOLE FREE RANGE CHICKEN',
    price: '69.99',
    count: '1',
  },
  {
    description: 'WHOLE FREE RANGE CHICKEN',
    price: '49.99',
    count: '3',
  },
  {
    description: 'WHOLE FREE RANGE CHICKEN',
    price: '29.99',
    count: '1',
  },
  {
    description: 'WHOLE FREE RANGE CHICKEN',
    price: '19.99',
    count: '7',
  },
];

const Cart = (): JSX.Element => {
  const navigation = useNavigation();

  const headerComponent = () => (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <Header onBackPress={() => navigation.goBack()} />
      <View style={{marginTop: 20}} />
      <Banner header={<Text style={styles.bannerText}>Cart</Text>} />
      <View style={{marginTop: 20}} />
    </View>
  );

  const renderItem = ({item, index}) => (
    <>
      <CartItem
        description={item.description}
        price={item.price}
        count={item.count}
        onItemRemovePress={() => {}}
        onItemAddPress={() => {}}
        onItemSubtractPress={() => {}}
      />
      {index !== data.length - 1 && <View style={styles.divider} />}
    </>
  );

  return (
    <>
      <FlatList
        style={styles.container}
        contentContainerStyle={{paddingBottom: 40}}
        data={data}
        horizontal={false}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={headerComponent}
        keyExtractor={(item, index) =>
          index.toString() + item.price + item.count + item.description
        }
        renderItem={renderItem}
        ListFooterComponent={() =>        <View
          style={{
            marginTop: 40,
            borderWidth: 1,
            height: 40,
            borderRadius: 80,
            borderColor: '#54634B',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,
            
            elevation: 18,
          }}>
          <Text
            style={{
              color: '#54634B',
              fontFamily: 'Avenir',
              fontSize: 12,
              lineHeight: 20,
            }}>
            Add your promo code
          </Text>
          <TouchableOpacity
            style={{borderLeftWidth: 1, borderColor: '#54634B', width: 80}}>
            <Text
              style={{
                textAlign: 'right',
                color: '#54634B66',
                fontFamily: 'Avenir',
                fontSize: 12,
                lineHeight: 20,
                fontWeight: '800',
              }}>
              Apply
            </Text>
          </TouchableOpacity>
        </View>}
      />
      
      <View
        style={{
          height: '26%',
          backgroundColor: '#EBEAE4',
          padding: 16,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#54634B',
              fontFamily: 'Avenir',
              fontSize: 12,
              lineHeight: 16,
            }}>
            Sub total
          </Text>
          <Text
            style={{
              color: '#54634B',
              fontFamily: 'Avenir',
              fontSize: 14,
              lineHeight: 20,
              fontWeight: '800',
            }}>
            R XXX.XX
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#54634B',
              fontFamily: 'Avenir',
              fontSize: 12,
              lineHeight: 16,
            }}>
            Delivery
          </Text>
          <Text
            style={{
              color: '#54634B',
              fontFamily: 'Avenir',
              fontSize: 14,
              lineHeight: 20,
              fontWeight: '800',
            }}>
            R XXX.XX
          </Text>
        </View>
        <View style={{borderWidth: 1, borderColor: '#54634B'}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#54634B',
              fontFamily: 'AGaramondPro-Regular',
              fontSize: 18,
              lineHeight: 24,
              fontWeight: '700',
            }}>
            Total
          </Text>
          <Text
            style={{
              color: '#54634B',
              fontFamily: 'AGaramondPro-Regular',
              fontSize: 18,
              lineHeight: 24,
              fontWeight: '700',
            }}>
            R XXX.XX
          </Text>
        </View>
        {/* <Text>Sub total</Text> */}
        <Button name="Checkout" onPress={() => {}} />
      </View>
    </>
  );
};

export default Cart;
