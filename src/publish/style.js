import { StyleSheet } from 'react-native';
import { narrowRow, textGrayColor, gray } from '../utils/common-styles';

export const rowStyles = StyleSheet.create({
  row: narrowRow.toJS(),
  
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    color: textGrayColor
  },

  imageIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  imageMore: {
    width: 15,
    height: 15,
    marginLeft: 15,
  },
  sufIcon: {
    marginLeft: 10
  }
});