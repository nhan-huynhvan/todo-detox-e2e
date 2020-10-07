import {StyleSheet} from 'react-native';

export const CategoryStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    padding: 24,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DFDFDF',
    marginBottom: 20,
  },
  descWrapper: {
    paddingLeft: 10,
    alignSelf: 'center',
  },
  category: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2A2A2A',
  },
  icon: {
    width: 50,
    height: 50,
  },
  count: {
    color: '#AEAEAE',
  },
  more: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 24,
    right: 24,
  },
});
