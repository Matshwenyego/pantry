import React, {JSX} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// components
import Header from '../../components/header';
import Banner from '../../components/banner';

import styles from './styles';

const Account = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header onBackPress={() => navigation.goBack()} />
      <View style={styles.mt} />
      <Banner header={<Text style={styles.text}>Accounts</Text>} />
      <View style={styles.mt} />
    </View>
  );
};

export default Account;
