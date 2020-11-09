import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useRoute} from '@react-navigation/native';

import {data} from '../../__mock__';
import {Task} from '../../components/Task';
import {AddTask} from '../../components/AddTask';
import {TasksStyles as styles} from './index.styles';
import {TasksIDs as ids} from './index.ids';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [category, setCategory] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const route = useRoute();

  useEffect(() => {
    setCategory(data.categories.find((it) => it.id === route.params.category));
  }, []);

  useEffect(() => {
    setTasks(
      data.tasks.filter((it) => it.categoryId === route.params.category),
    );
  }, []);

  const toggleTask = (item) => {
    const temp = tasks.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });
    setTasks(temp);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.full} testID={ids.screenName}>
      <View style={styles.header}>
        <FastImage
          style={styles.icon}
          source={{
            uri: category.media,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View>
          <Text style={styles.tasks}>
            {tasks.length > 1
              ? `${tasks.length} Tasks`
              : `${tasks.length} Task`}
          </Text>
          <Text style={styles.category}>{category.title}</Text>
        </View>
      </View>
      <FlatList
        data={tasks}
        renderItem={({item, index}) => (
          <Task
            task={item}
            onChange={toggleTask}
            id={`${ids.checkbox}-${index}`}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listWrapper}
        testID={ids.list}
      />
      <TouchableOpacity
        style={styles.button}
        testID={ids.plus}
        onPress={toggleModal}>
        <FastImage
          style={styles.plus}
          source={{
            uri: 'https://nhanhv-release-apk.s3-ap-southeast-1.amazonaws.com/plus.png',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </TouchableOpacity>
      <AddTask visible={modalVisible} onClose={toggleModal} id={ids.modal} />
    </View>
  );
};

export default Tasks;
