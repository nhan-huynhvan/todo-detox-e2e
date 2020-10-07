import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CategoriesStyles as styles} from './index.styles';
import {data} from './../../__mock__';
import {CategoriesIDs as ids} from './index.ids';
import {Category} from '../../components/Category';
import {Header} from '../../components/Header';

const Categories = () => {
  const navigation = useNavigation();

  const nextScreen = (id) => {
    navigation.navigate('Tasks', {
      category: id,
    });
  };

  const countOfTasks = (id) => {
    return data.tasks.filter((it) => it.categoryId === id).length;
  };

  return (
    <View testID={ids.screenName} style={styles.full}>
      <FlatList
        data={data.categories}
        ListHeaderComponent={<Header />}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => nextScreen(item.id)}
            testID={`${ids.category}-${index}`}>
            <Category category={item} tasks={countOfTasks(item.id)} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        testID={ids.list}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

export default Categories;
