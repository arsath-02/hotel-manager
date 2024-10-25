// src/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; // Import stack navigator
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Components/Home';
import Profile from './Components/StaffProfile';
import Messages from './Components/Notifications';
import Settings from './Components/Settings';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); 

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    <Stack.Screen name="Settings" component={Settings} options={{ title: 'Settings' }} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Messages') {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } 

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} 
        />
        <Tab.Screen 
          name="Messages" 
          component={Messages} 
          options={{ headerShown: false }} 
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileStack} // Use the ProfileStack here
          options={{ headerShown: false }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
