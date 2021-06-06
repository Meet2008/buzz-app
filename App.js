import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import {CreateAppContainer} from 'react-navigation';
import {CreateBottomTabNavigator} from 'react-navigation-tabs';
import Facebook from './screens/facebook';
import Instagram from './screens/instagram';
import AppHeader from './components/Appheader'

export default class App extends React.Component {
  render(){
    return(
      <View>
       <AppContainer/>
       <AppHeader/>
      </View>
    )
  }
}

const TabNavigator =  CreateBottomTabNavigator({
  Face:{Screen:Facebook},
  Insta:{Screen:Instagram},
  
});

const AppContainer = CreateAppContainer(TabNavigator);