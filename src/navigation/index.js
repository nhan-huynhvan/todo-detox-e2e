import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Categories from '../screens/Categories';
import OnBoarding from '../screens/OnBoarding';
import Tasks from '../screens/Tasks';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tasks"
          component={Tasks}
          options={{headerTitle: 'Tasks'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
