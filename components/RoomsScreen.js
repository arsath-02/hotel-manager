// src/components/RoomsScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Sample data for available rooms
const availableRooms = [
  { id: '1', name: 'Deluxe Room', price: 120, discount: 20 },
  { id: '2', name: 'Suite Room', price: 200, discount: 50 },
  { id: '3', name: 'Standard Room', price: 80, discount: 10 },
];

// Sample data for occupied rooms
const occupiedRooms = [
  { id: '4', name: 'Presidential Suite', price: 300, discount: 0 },
  { id: '2', name: 'Suite Room', price: 200, discount: 50 },
  { id: '3', name: 'Standard Room', price: 80, discount: 10 },
];

// Sample data for discounted rooms
const discountedRooms = [
  { id: '5', name: 'Economy Room', price: 60, discount: 15 },
  { id: '2', name: 'Suite Room', price: 200, discount: 50 },
  { id: '3', name: 'Standard Room', price: 80, discount: 10 },
];

const RoomsScreen = () => {
  const renderRoomItem = ({ item }) => {
    return (
      <View style={styles.roomContainer}>
        <Text style={styles.roomName}>{item.name}</Text>
        <Text style={styles.roomPrice}>Price: ${item.price}</Text>
        <Text style={styles.roomDiscount}>Discount: ${item.discount}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderRoomList = (data) => {
    return (
      <FlatList
        data={data}
        renderItem={renderRoomItem}
        keyExtractor={item => item.id}
        horizontal // Makes the FlatList horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.roomList}
      />
    );
  };

  return (
    <View style={styles.screen}>

      <Text style={styles.subTitle}>Discounted Rooms</Text>
      {renderRoomList(discountedRooms)}

      <Text style={styles.subTitle}>Occupied Rooms</Text>
      {renderRoomList(occupiedRooms)}

      <Text style={styles.subTitle}>Available Rooms</Text>
      {renderRoomList(availableRooms)}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8,
    backgroundColor:'orange'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  roomContainer: {
    padding: 16,
    marginHorizontal: 8, // Space between room items
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 2,
    width: 200, // Set a fixed width for horizontal alignment
  },
  roomName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  roomPrice: {
    fontSize: 16,
    color: '#4caf50',
  },
  roomDiscount: {
    fontSize: 14,
    color: '#f44336',
  },
  roomList: {
    paddingVertical: 8,
  },
  button: {
    marginTop: -1,
    padding: 10,
    backgroundColor: '#ff9800', // Orange color for button
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default RoomsScreen;
