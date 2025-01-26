import {StyleSheet} from 'react-native';
import COLOURS from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOURS.OLIVE,
    height: 56,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FCF9F5', // move to colours
    fontFamily: 'Avenir',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default styles;
