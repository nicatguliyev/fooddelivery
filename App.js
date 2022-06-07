
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './src/components/Header';
import {colors} from './src/global/styles'
import SignInScreen from './src/screens/authScreens/SignInScreen';



const App: () => Node = () => {

  return (
     <View style = {styles.container}>
       <StatusBar 
       barStyle='light-content'
       backgroundColor={colors.statusbar}/>
       <SignInScreen />
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
  }
});

export default App;
