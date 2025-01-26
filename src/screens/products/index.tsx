import React, {JSX} from 'react';
import {Text, TouchableOpacity, View, FlatList, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {Formik} from 'formik';
// import schema from '../../config/validation';

// components
import Header from '../../components/header';
import Banner from '../../components/banner';
// import Input from '../../components/input';
// import Button from '../../components/button';

// icons
import CartIcon from '../../assets/icons/Cart.svg';

import {products, categories} from './data';

import styles from './styles';

// refactor
// remove inline functions

const Products = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <FlatList
      initialNumToRender={40}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      horizontal={false}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      style={{backgroundColor: '#FFFFFF', paddingHorizontal: 16}}
      contentContainerStyle={{backgroundColor: '#FFFFFF', paddingBottom: 40}}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={() => (
        <View style={{backgroundColor: '#FFFFFF'}}>
          <Header
            onBackPress={() => navigation.goBack()}
            headerLeft
            headerRight
          />
          <View style={{marginTop: 20}} />
          <Banner header={<Text style={styles.bannerText}>Meat</Text>} />
          <View style={{flexDirection: 'row', marginVertical: 20}}>
            {categories.map((item, index) => (
              <TouchableOpacity style={{paddingRight: 40}}>
                <Text
                  style={{
                    color: '#54634B',
                    fontFamily: 'Avenir',
                    fontSize: 14,
                    lineHeight: 20,
                    fontWeight: item.active ? '800' : '400',
                  }}
                  key={index.toString()}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text
            style={{
              color: '#54634B',
              fontFamily: 'Avenir',
              fontSize: 12,
              lineHeight: 16,
              paddingTop: 10,
            }}>
            Based on your selection
          </Text>
          <Text
            style={{
              color: '#54634B',
              fontFamily: 'AGaramondPro-Bold',
              fontSize: 30,
              lineHeight: 40,
            }}>
            Our products
          </Text>
        </View>
      )}
      keyExtractor={(_, index) => index.toString()}
      data={products}
      renderItem={({item}) => (
        <TouchableOpacity style={{width: '45%', marginTop: 20}}>
          <View
            style={{
              height: 163,
              borderRadius: 4,
            }}>
            <Image
              source={item.image}
              style={{height: 163, width: '100%', borderRadius: 4}}
            />
          </View>
          <Text
            style={{
              color: '#54634B',
              fontFamily: 'Avenir',
              fontSize: 14,
              lineHeight: 20,
              paddingVertical: 10,
            }}>
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#54634B',
                fontFamily: 'Avenir',
                fontSize: 14,
                lineHeight: 20,
                fontWeight: '900',
              }}>
              R {item.price}
            </Text>
            <TouchableOpacity
              style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#54634B',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CartIcon color="#54634B" height={10} width={10} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

export default Products;
