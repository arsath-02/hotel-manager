// src/components/HomePage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons
import Home from './Home';
import Notifications from './Notifications';
import Settings from './Settings';
import StaffProfile from './StaffProfile';
const Tab = createBottomTabNavigator();

const Navigation= () => {
    return (
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({ color }) => <Icon name="bed" color="#FFA500" size={24}   options={{ headerShown: false }}/>, // Bed icon for Rooms
          }} 
        />
        <Tab.Screen 
          name="Notifications" 
          component={Notifications} 
          options={{
            tabBarIcon: ({ color }) => <Icon name="bell" color="#FFA500" size={24}  options={{ headerShown: false }}/>, // Bell icon for Services
          }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            tabBarIcon: ({ color }) => <Icon name="cutlery" color="#FFA500" size={24}  options={{ headerShown: false }}/>, // Cutlery icon for Food
          }} 
        />
        <Tab.Screen 
          name="StaffProfile" 
          component={StaffProfile} 
          options={{
            tabBarIcon: ({ color }) => <Icon name="person" color="#FFA500" size={24}  options={{ headerShown: false }} />, // Phone icon for Customer Care
          }} 
        />
      </Tab.Navigator>
    );
  };
  
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
  });
  
  export default Navigation;