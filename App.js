import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import Navigation from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
      {/* <Navigation /> */}
    </>
  );
};

export default App;
