import {StyleSheet} from 'react-native';
import COLOURS from '../../assets/colours';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOURS.CREAM,
    paddingHorizontal: 16,
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
  loginText: {
    color: COLOURS.OLIVE,
    fontFamily: 'Avenir',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '800',
  },
  termsRegular: {
    color: COLOURS.OLIVE,
    fontFamily: 'Avenir',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
  },
  termsBold: {
    color: COLOURS.OLIVE,
    fontFamily: 'Avenir',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '800',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    height: 1,
    borderWidth: 0.8,
    width: '40%',
    borderColor: COLOURS.OLIVE,
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
  account: {
    color: COLOURS.OLIVE,
    fontFamily: 'Avenir',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default styles;
