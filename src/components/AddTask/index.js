import React, {memo} from 'react';
import {Modal, Text, View, TouchableOpacity} from 'react-native';

import {AddTaskStyles as styles} from './index.styles';
import {areEqual} from '../../helper';

const AddTaskBase = (props) => {
  const {visible, onClose, id} = props;
  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <View style={styles.full} testID={id}>
        <Text style={styles.text}>Add task modal</Text>
        <TouchableOpacity onPress={onClose} style={styles.close}>
          <Text style={styles.textStyle}>Hide</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export const AddTask = memo(AddTaskBase, areEqual);
