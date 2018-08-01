import { StyleSheet } from 'react-native';
import { narrowRow, textGrayColor } from '../utils/common-styles';

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
  }, 
  dialogContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 1
  },
  dialogRow: {
    height: 44,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    width: 60
  },
  input: {
    flex: 1
  }
});