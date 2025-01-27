import {StyleSheet} from 'react-native';
import COLOURS from '../../assets/colours';

const styles = StyleSheet.create({
  container: {
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
  },
});

export default styles;
