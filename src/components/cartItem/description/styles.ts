import {StyleSheet} from 'react-native';
import COLOURS from '../../../assets/colours';

const styles = StyleSheet.create({
  description: {
    color: COLOURS.OLIVE,
    fontSize: 14,
    lineHeight: 18,
    fontStyle: 'italic',
    fontFamily: 'AGaramondPro-Regular',
    width: 179,
    paddingBottom: 5,
  },
  price: {
    color: COLOURS.OLIVE,
    fontSize: 14,
    lineHeight: 18,
    fontStyle: 'italic',
    fontFamily: 'AGaramondPro-Bold',
    paddingBottom: 10,
  },
});

export default styles;
