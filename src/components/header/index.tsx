import React, {JSX} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import BackIcon from '../../assets/icons/Back.svg';
import FilterIcon from '../../assets/icons/Filter.svg';

import styles from './styles';

interface Props {
  headerLeft?: boolean;
  headerRight?: boolean;
  onBackPress?: () => void;
}

const Header = ({headerLeft, headerRight, onBackPress}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.button}>
        <View style={[styles.icon, styles.mr]}>
          <BackIcon height={11} width={10} />
        </View>
        {headerLeft && <Text style={styles.text}>Back</Text>}
      </TouchableOpacity>

      {headerRight && (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Filter</Text>
          <View style={[styles.icon, styles.ml]}>
            <FilterIcon />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
