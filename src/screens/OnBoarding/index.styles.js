import {StyleSheet} from 'react-native';
export const OnBoardingStyles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  logo: {
    width: 280,
    height: 236,
    alignSelf: 'center',
  },
  wrapper: {
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  title: {
    paddingTop: 50,
    fontSize: 22,
  },
  description: {
    color: '#333',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#08DAB7',
    borderRadius: 5,
    marginTop: 24,
  },
  buttonText: {
    color: '#fff', fontSize: 18, fontWeight: '600'
  }
});
