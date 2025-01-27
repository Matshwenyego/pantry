import {StyleSheet} from 'react-native';
import COLOURS from '../../../assets/colours';

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    height: 30,
    width: 84,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    borderColor: '#54634B',
  },
  text: {
    color: COLOURS.OLIVE,
    fontFamily: 'Avenir',
    fontSize: 12,
    lineHeight: 20,
  },
});

export default styles;
