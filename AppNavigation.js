import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './View/HomePage';
import ExampleClass from './View/ExampleClass';
import Hello from './View/Hello';
import CoreComponent from './View/coreComponent/CoreComponent';
const AppNavigator = createStackNavigator({
    Home: {
      screen: HomePage,
      
    },
    ClassComponent:{
        screen:ExampleClass,
    },
    FunctionComponent:{
        screen:Hello,
    },
    Core:{
        screen:CoreComponent,
    }
  });
  export default createAppContainer(AppNavigator);