import {StyleSheet} from 'react-native';
import COLOURS from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: COLOURS.WHITE,
  },
  exploreContainer: {
    alignItems: 'flex-end',
  },
  exploreText: {
    color: COLOURS.OLIVE,
    fontFamily: 'Avenir',
    fontSize: 14,
    lineHeight: 20,
  },
  bannerText: {
    color: COLOURS.OLIVE,
    fontFamily: 'AGaramondPro-Bold',
    fontSize: 40,
    lineHeight: 50,
    fontStyle: 'italic',
  },
  divider: {
    borderWidth: 1,
    borderColor: COLOURS.OLIVE,
    marginVertical: 20,
  },
});

export default styles;
