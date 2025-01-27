import {StyleSheet} from 'react-native';
import COLOURS from '../../assets/colours';

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
  p3: {
    color: '#54634B',
    fontFamily: 'Avenir',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '800',
  },
  mt40: {
    marginTop: 40,
  },
  mt20: {
    marginTop: 20,
  },
  pb40: {
    paddingBottom: 40,
  },
});

export default styles;
