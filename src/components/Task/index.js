import React from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {TaskStyles as styles} from './index.styles';

const TaskBase = (props) => {
  const {task, onChange, id} = props;

  const handleOnChange = (newValue) => {
    onChange(newValue);
  };

  return (
    <View style={styles.wrapper}>
      <CheckBox
        value={task.done}
        accessibilityLabel={task.done ? 'checked' : 'unchecked'} // Use accessibilityLabel for testing
        onValueChange={() => handleOnChange(task)}
        testID={id}
      />
      <Text style={{...styles.title, ...(task.done ? styles.titleActive : '')}}>
        {task.name}
      </Text>
    </View>
  );
};

export const Task = TaskBase;
