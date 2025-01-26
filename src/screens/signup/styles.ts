import {StyleSheet} from 'react-native';
import COLOURS from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOURS.WHITE,
    padding: 16,
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
});

export default styles;
