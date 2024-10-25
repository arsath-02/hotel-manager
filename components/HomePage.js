// src/components/HomePage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons
import RoomsScreen from './RoomsScreen'; // Import the RoomsScreen component
import ServicesScreen  from './ServicesScreen'; // Import the RoomsScreen component
import FoodScreen from './FoodScreen';
import CustomerCareScreen from './CustomerCareScreen';
import DashboardScreen from './DashboardScreen';
const Tab = createBottomTabNavigator();
const HomePage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Rooms" 
        component={RoomsScreen} 
        options={{
          tabBarIcon: ({ color }) => <Icon name="bed" color="#FFA500" size={24}   options={{ headerShown: false }}/>, // Bed icon for Rooms
        }} 
      />
      <Tab.Screen 
        name="Services" 
        component={ServicesScreen} 
        options={{
          tabBarIcon: ({ color }) => <Icon name="bell" color="#FFA500" size={24}  options={{ headerShown: false }}/>, // Bell icon for Services
        }} 
      />
      <Tab.Screen 
        name="Food" 
        component={FoodScreen} 
        options={{
          tabBarIcon: ({ color }) => <Icon name="cutlery" color="#FFA500" size={24}  options={{ headerShown: false }}/>, // Cutlery icon for Food
        }} 
      />
      <Tab.Screen 
        name="Customer Care" 
        component={CustomerCareScreen} 
        options={{
          tabBarIcon: ({ color }) => <Icon name="phone" color="#FFA500" size={24}  options={{ headerShown: false }} />, // Phone icon for Customer Care
        }} 
      />
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{
          tabBarIcon: ({ color }) => <Icon name="user" color="#FFA500" size={24}  options={{ headerShown: false }}/>, // User icon for Dashboard
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

export default HomePage;
