import {StyleSheet} from 'react-native';
export const TaskStyles = StyleSheet.create({
  wrapper: {
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10
  },
  titleActive: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#DEDEDE',
    color: '#DEDEDE',
  },
});
