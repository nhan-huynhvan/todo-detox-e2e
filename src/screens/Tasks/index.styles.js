import {StyleSheet} from 'react-native';
export const TasksStyles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 24,
  },
  listWrapper: {
    paddingHorizontal: 6,
  },
  category: {
    fontSize: 24,
    fontWeight: '900',
  },
  tasks: {
    fontSize: 16,
    color: '#D1D1D1',
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 24,
    zIndex: 10,
  },
  plus: {
    width: 40,
    height: 40,
  },
});
