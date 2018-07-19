import { StyleSheet, Dimensions } from 'react-native';
import { textGrayColor, paddingTop, lightGray, baseColor, blackGray } from '../utils/common-styles';

const { width, height } = Dimensions.get('window');
const classifyListHeight = 50;
const searchBoxHeight = 50;

export const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    paddingTop: paddingTop,
  },
  loadingBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  emptyBox: {
    width,
    height: height - 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerBox: {
    width: '100%',
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerMidLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: textGrayColor
  },
  footerText: {
    color: textGrayColor,
    marginLeft: 20,
    marginRight: 20
  },
  textGray: {
    color: textGrayColor
  }
});

export const classifyListStyles = StyleSheet.create({
  tabBox: {
    height: classifyListHeight,
    borderBottomWidth: 1,
    borderBottomColor: lightGray,
    backgroundColor: 'white'
  },
  tabItem: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
  },

  curTab: {
    borderBottomColor: baseColor,
    borderBottomWidth: 3,
  },
  tabText: {
    color: textGrayColor
  },
  curTabText: {
    color: blackGray,
    fontSize: 16
  }
});

const paddingTB = 10;
const paddingLR = 10;
export const searchBoxStyles = StyleSheet.create({
  header: {
    width,
    height: searchBoxHeight,
    backgroundColor: baseColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: paddingLR,
    paddingRight: paddingLR,
    paddingTop: paddingTB,
    paddingBottom: paddingTB
  },
  searchBacground: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    borderRadius: 3
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingLeft: 10
  },
  preIcon: {
    marginRight: 10,
    color: textGrayColor
  },
  searchText: {
    color: textGrayColor
  }
});