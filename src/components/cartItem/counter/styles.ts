import {StyleSheet} from 'react-native';
import COLOURS from '../../../assets/colours';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 84,
    height: 30,
  },
  button: {
    borderWidth: 2,
    borderColor: COLOURS.OLIVE,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLOURS.OLIVE,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Geomanist-Book',
    fontWeight: '500',
  },
});

export default styles;
