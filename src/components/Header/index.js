import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import {HeaderStyles as styles} from './index.styles';

export const Header = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.getting}>Hello Ender</Text>
        <Text>Today you have 4 tasks</Text>
      </View>
      <View>
      <FastImage
        style={styles.avatar}
        source={{
          uri: 'https://nhanhv-release-apk.s3-ap-southeast-1.amazonaws.com/man.png',
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      </View>
    </View>
  );
};
