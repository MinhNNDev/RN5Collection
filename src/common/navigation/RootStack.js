import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../../screens/splash';
import SignInScreen from '../../screens/auth/signin';
import SignUpScreen from '../../screens/auth/signup';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
