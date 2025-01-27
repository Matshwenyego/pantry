import React, {JSX, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  ImageProps,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/header';
import Banner from '../../components/banner';
import Counter from '../../components/cartItem/counter';

import CartIcon from '../../assets/icons/Cart.svg';

import useProductsStore from '../../store/products';
import useCartStore from '../../store/cart';

import COLOURS from '../../assets/colours';

import styles from './styles';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: ImageProps;
  count: number;
}

const Products = (): JSX.Element => {
  const navigation = useNavigation();
  const [showFilters, setShowFilters] = useState(false);
  const {products, categories, options, filteredProducts, filter} =
    useProductsStore();
  const {addItem, subtractItem, cartItems} = useCartStore();
  const headerComponent = () => (
    <View style={styles.headerContainer}>
      <Header
        onFilterPress={() => setShowFilters(prev => !prev)}
        onBackPress={() => navigation.goBack()}
        headerLeft
        headerRight
      />
      <View style={styles.mt20} />
      <Banner header={<Text style={styles.bannerText}>Meat</Text>} />
      {showFilters && (
        <View style={styles.categoryContainer}>
          {categories.map((item, index) => (
            <TouchableOpacity
              onPress={() => filter(item)}
              key={index.toString() + item}
              style={styles.pr40}>
              <Text
                style={[
                  styles.categoryText,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    fontWeight:
                      (index === 0 && options.length < 1) ||
                      options?.includes(item)
                        ? '800'
                        : '400',
                  },
                ]}
                key={item + index.toString()}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <Text style={styles.selectionParagraphText}>Based on your selection</Text>
      <Text style={styles.selectionHeaderText}>Our products</Text>
    </View>
  );

  const renderItem = ({item}: {item: Product}) => {
    const currentProduct = cartItems.find(product => product?.id === item?.id);
    return (
      <View style={[styles.renderItemContainer, styles.mt20]}>
        <View style={styles.imageContainer}>
          <Image source={item?.image} style={styles.image} />
        </View>
        <Text style={styles.nameText}>{item.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>R {item.price.toString()}</Text>
          {currentProduct?.count ? (
            <View style={styles.counterContainer}>
              <Counter
                iconStyle={styles.counter}
                count={currentProduct?.count}
                onItemAddPress={() => addItem(item)}
                onItemSubtractPress={() => subtractItem(item)}
              />
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => addItem(item)}
              style={styles.cartButton}>
              <CartIcon color={COLOURS.OLIVE} height={10} width={10} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <FlatList
      initialNumToRender={40}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      horizontal={false}
      columnWrapperStyle={styles.column}
      style={styles.container}
      contentContainerStyle={styles.content}
      ListHeaderComponent={headerComponent}
      keyExtractor={item => item.id}
      data={options.includes('All') || options.includes('')  ? products : filteredProducts}
      renderItem={renderItem}
    />
  );
};

export default Products;
