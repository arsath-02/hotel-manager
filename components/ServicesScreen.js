// src/components/ServicesScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons'; // For icons to represent services

// Sample data for services provided by the hotel
const hotelServices = [
  { id: '1', name: 'Room Service', icon: 'bed', description: '24/7 room service to meet all your needs.' },
  { id: '2', name: 'Laundry', icon: 'shopping-bag', description: 'Same-day laundry services for your convenience.' },
  { id: '3', name: 'Spa', icon: 'leaf', description: 'Relax and rejuvenate with our full-service spa.' },
  { id: '4', name: 'Gym', icon: 'heartbeat', description: 'State-of-the-art fitness equipment and personal trainers.' },
  { id: '5', name: 'Swimming Pool', icon: 'water', description: 'Heated outdoor pool available year-round.' },
  { id: '6', name: 'Free WiFi', icon: 'wifi', description: 'High-speed WiFi access throughout the hotel.' },
  { id: '7', name: 'Parking', icon: 'car', description: 'Complimentary valet parking for all guests.' },
  { id: '8', name: 'Airport Shuttle', icon: 'plane', description: 'Free airport shuttle service available 24/7.' },
];

const ServicesScreen = () => {
  const renderServiceItem = ({ item }) => (
    <View style={styles.serviceContainer}>
      <FontAwesome name={item.icon} size={30} color="#FFA500" style={styles.serviceIcon} />
      <View style={styles.serviceInfo}>
        <Text style={styles.serviceName}>{item.name}</Text>
        <Text style={styles.serviceDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={hotelServices}
        renderItem={renderServiceItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.serviceList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFA500',
    textAlign: 'center',
  },
  serviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 2, // For Android shadow effect
    shadowColor: '#000', // For iOS shadow effect
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  serviceIcon: {
    marginRight: 16,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  serviceList: {
    paddingBottom: 20,
  },
});

export default ServicesScreen;
