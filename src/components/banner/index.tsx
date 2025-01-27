import React, {JSX} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

interface Props {
  header?: JSX.Element;
  withDescription?: boolean;
}

const Banner = ({header, withDescription}: Props): JSX.Element => {
  return (
    <>
      <View>
        {header}
        {withDescription && (
          <Text style={styles.text}>
            Sign up for easy payment collection{'\n'}and much more
          </Text>
        )}
      </View>
      <View style={styles.divider} />
    </>
  );
};

export default Banner;
