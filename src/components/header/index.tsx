import React, {JSX} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import BackIcon from '../../assets/icons/Back.svg';
import FilterIcon from '../../assets/icons/Filter.svg';

import styles from './styles';

interface Props {
  headerLeft?: boolean;
  headerRight?: boolean;
  onBackPress?: () => void;
  onFilterPress?: () => void;
}

const Header = ({headerLeft, headerRight, onBackPress, onFilterPress}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.button}>
        <View style={[styles.icon, styles.mr]}>
          <BackIcon height={11} width={10} />
        </View>
        {headerLeft && <Text style={styles.text}>Back</Text>}
      </TouchableOpacity>

      {headerRight && (
        <TouchableOpacity onPress={onFilterPress} style={styles.button}>
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
