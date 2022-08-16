import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AppLoading} from 'expo';
import { StyleSheet, View, SafeAreaView, ActivityIndicador } from 'react-native';
import MainStack  from './src/stacks/MainStack';

import SplashScreen from 'react-native-splash-screen';

export default () => { 
  return (
    <NavigationContainer>

    <MainStack/>

    </NavigationContainer>
  );
}


///const styles = StyleSheet.create({
 /// container: {
  //  flex: 1,
   // backgroundColor: '#fff',
    //alignItems: 'center',
   // justifyContent: 'center',
  //},
//});
