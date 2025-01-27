import {StyleSheet} from 'react-native';
import COLOURS from '../../assets/colours';

const styles = StyleSheet.create({
  name: {
    color: COLOURS.OLIVE,
    fontFamily: 'Avenir',
    lineHeight: 20,
  },
  prefixContainer: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  prefix: {
    color: COLOURS.OLIVE,
    fontFamily: 'AGaramondPro-Bold',
    fontStyle: 'italic',
    fontSize: 18,
    lineHeight: 24,
  },
  input: {
    height: 30,
    flex: 0.9,
    borderBottomColor: COLOURS.OLIVE,
    color: COLOURS.OLIVE,
    fontFamily: 'AGaramondPro-Bold',
    fontStyle: 'italic',
    fontSize: 18,
    marginLeft: 5,
  },
  rightComponent: {
    height: 24,
    width: 24,
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontFamily: 'Avenir',
    fontSize: 12,
    lineHeight: 16,
    paddingTop: 4,
  },
});

export default styles;
