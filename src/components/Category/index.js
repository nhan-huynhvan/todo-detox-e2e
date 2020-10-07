import React, {memo} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import {CategoryStyles as styles} from './index.styles';
import {areEqual} from '../../helper';

const CategoryBase = (props) => {
  const {category, tasks} = props;

  return (
    <View style={styles.wrapper}>
      <View>
        <FastImage
          style={styles.icon}
          source={{
            uri: category.media,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.descWrapper}>
        <Text style={styles.category}>{category.title}</Text>
        <Text style={styles.count}>
          {tasks} {tasks > 1 ? 'Tasks' : 'Task'}
        </Text>
      </View>
      <FastImage
        style={styles.more}
        source={{
          uri: 'https://nhanhv-release-apk.s3-ap-southeast-1.amazonaws.com/more.png',
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export const Category = memo(CategoryBase, areEqual);
