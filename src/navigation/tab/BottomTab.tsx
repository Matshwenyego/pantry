import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screens
import Products from '../../screens/products';
import Favourites from '../../screens/favourites';
import Search from '../../screens/search';
import Cart from '../../screens/cart';
import Account from '../../screens/account';

// icons
import ProductsIcon from '../../assets/icons/Products.svg';
import FavouritesIcon from '../../assets/icons/Favourites.svg';
import SearchIcon from '../../assets/icons/Search.svg';
import CartIcon from '../../assets/icons/Cart.svg';
import AccountIcon from '../../assets/icons/Account.svg';

import useCartStore from '../../store/cart';

import COLOURS from '../../assets/colours';

import styles from './styles';

const Tab = createBottomTabNavigator();

type IconType = FC<SvgProps>;

const TabIcon = ({Icon, color}: {Icon: IconType; color: string}) => (
  <Icon style={styles.mt} color={color} />
);

const tabBarIcon = ({Icon, color}: {Icon: IconType; color: string}) => (
  <TabIcon Icon={Icon} color={color} />
);

const TabBarBackground = () => <SafeAreaView style={styles.container} />;

const BottomTab = () => {
  const {Navigator, Screen} = Tab;
  const cartInfo = useCartStore(state => state.cartInfo);

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLOURS.CREAM,
        tabBarBackground: TabBarBackground,
      }}>
      <Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => tabBarIcon({Icon: ProductsIcon, color}),
        }}
        name="Products"
        component={Products}
      />
      <Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => tabBarIcon({Icon: FavouritesIcon, color}),
        }}
        name="Favourites"
        component={Favourites}
      />
      <Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => tabBarIcon({Icon: SearchIcon, color}),
        }}
        name="Search"
        component={Search}
      />
      <Screen
        options={{
          tabBarBadgeStyle: {display: cartInfo?.count ? 'flex' : 'none'},
          tabBarBadge: cartInfo?.count,
          tabBarStyle: {display: 'none'},
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => tabBarIcon({Icon: CartIcon, color}),
        }}
        name="Cart"
        component={Cart}
      />
      <Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => tabBarIcon({Icon: AccountIcon, color}),
        }}
        name="Account"
        component={Account}
      />
    </Navigator>
  );
};

export default BottomTab;
