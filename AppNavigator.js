// src/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './components/LandingPage'; // Import LandingPage

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingPage} // Set LandingPage as the first screen
          options={{ headerShown: false }} 
        />
        {/* You can add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
