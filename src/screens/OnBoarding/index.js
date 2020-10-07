import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import {OnBoardingIDs as ids} from './index.ids';
import {OnBoardingStyles as styles} from './index.styles';

const OnBoarding = () => {
  const navigation = useNavigation();

  const nextScreen = () => {
    navigation.navigate('Categories');
  };

  return (
    <View style={styles.full} testID={ids.screenName}>
      <FastImage
        style={styles.logo}
        source={{
          uri:
            'https://nhanhv-release-apk.s3-ap-southeast-1.amazonaws.com/AppIcon.png',
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Get Organized Your Life</Text>
        <Text style={styles.description}>
          Tudy is simple and effective to-do list and task manager app which
          helps you manage time.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={nextScreen}
          testID={ids.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;
