import {StyleSheet} from 'react-native';
import COLOURS from '../../assets/colours';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: COLOURS.CREAM,
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
  itemDivider: {
    borderWidth: 1,
    borderColor: COLOURS.OLIVE,
    marginVertical: 20,
  },
  pb40: {
    paddingBottom: 40,
  },
  mt20: {
    marginTop: 20,
  },
  headerContainer: {
    backgroundColor: COLOURS.CREAM,
  },
  emptyText: {
    color: COLOURS.OLIVE,
    fontFamily: 'Avenir',
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'center',
  },
  footerContainer: {
    marginTop: 40,
    borderWidth: 1,
    height: 40,
    borderRadius: 80,
    borderColor: COLOURS.OLIVE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: COLOURS.CREAM,
    shadowColor: COLOURS.OLIVE,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 14,
  },
  codeText: {
    color: COLOURS.OLIVE,
    fontFamily: 'Avenir',
    fontSize: 12,
    lineHeight: 20,
  },
  applyButton: {
    borderLeftWidth: 1,
    borderColor: COLOURS.OLIVE,
    width: 80,
  },
  applyText: {
    textAlign: 'right',
    color: COLOURS.OLIVE50,
    fontFamily: 'Avenir',
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '800',
  },
  cartTotalsContainer: {
    backgroundColor: COLOURS.LIGHT_OLIVE,
    padding: 16,
    justifyContent: 'space-between',
  },
  divider: {
    borderWidth: 1,
    borderColor: COLOURS.OLIVE,
  },
  subtotalTitleText: {
    color: COLOURS.OLIVE,
    fontFamily: 'Avenir',
    fontSize: 12,
    lineHeight: 16,
  },
  subtotalAmountText: {
    color: COLOURS.OLIVE,
    fontFamily: 'Avenir',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '800',
  },
  totalText: {
    color: COLOURS.OLIVE,
    fontFamily: 'AGaramondPro-Regular',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
