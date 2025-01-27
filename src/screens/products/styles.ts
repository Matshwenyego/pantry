import {StyleSheet} from 'react-native';
import COLOURS from '../../assets/colours';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOURS.CREAM,
    paddingHorizontal: 16,
  },
  content: {
    backgroundColor: COLOURS.CREAM,
    paddingBottom: 40,
  },
  column: {
    justifyContent: 'space-between',
  },
  bannerText: {
    color: COLOURS.OLIVE,
    fontFamily: 'AGaramondPro-Bold',
    fontSize: 40,
    lineHeight: 50,
  },
  headerContainer: {
    backgroundColor: COLOURS.CREAM,
  },
  mt20: {
    marginTop: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  categoryText: {
    color: COLOURS.OLIVE,
    fontFamily: 'Avenir',
    fontSize: 14,
    lineHeight: 20,
  },
  pr40: {
    paddingRight: 40,
  },
  selectionParagraphText: {
    color: COLOURS.OLIVE,
    fontFamily: 'Avenir',
    fontSize: 12,
    lineHeight: 16,
    paddingTop: 10,
  },
  selectionHeaderText: {
    color: COLOURS.OLIVE,
    fontFamily: 'AGaramondPro-Bold',
    fontSize: 30,
    lineHeight: 40,
  },
  renderItemContainer: {
    width: '45%',
  },
  imageContainer: {
    height: 163,
    borderRadius: 4,
  },
  image: {
    height: 163,
    width: '100%',
    borderRadius: 4,
  },
  nameText: {
    color: COLOURS.OLIVE,
    fontFamily: 'Avenir',
    fontSize: 14,
    lineHeight: 20,
    paddingVertical: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  priceText: {
    color: COLOURS.OLIVE,
    fontFamily: 'Avenir',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '900',
  },
  counterContainer: {
    position: 'absolute',
    right: 0,
    top: -8,
  },
  counter: {
    height: 22,
    width: 22,
  },
  cartButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOURS.OLIVE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
