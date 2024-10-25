import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';

// Sample Room Data
const roomsData = [
  { id: '1', roomType: 'Deluxe Suite', available: 5, occupied: 10, discount: '20%' },
  { id: '2', roomType: 'Executive Room', available: 3, occupied: 12, discount: '15%' },
  { id: '3', roomType: 'Standard Room', available: 8, occupied: 7, discount: '10%' },
  { id: '4', roomType: 'Presidential Suite', available: 2, occupied: 1, discount: '25%' },
  { id: '5', roomType: 'Economy Room', available: 10, occupied: 0, discount: null },
];

// Filtering Room Categories
const discountedRooms = roomsData.filter(room => room.discount);
const occupiedRooms = roomsData.filter(room => room.occupied > 0);
const availableRooms = roomsData.filter(room => room.available > 0 && room.occupied === 0);

const RoomCard = ({ room }) => (
  <View style={styles.roomCard}>
    <Text style={styles.roomType}>{room.roomType}</Text>
    <Text style={styles.roomDetails}>Available: {room.available}</Text>
    <Text style={styles.roomDetails}>Occupied: {room.occupied}</Text>
    {room.discount && <Text style={styles.roomDetails}>Discount: {room.discount}</Text>}
    <TouchableOpacity style={styles.bookButton}>
      <Text style={styles.bookButtonText}>Book Now</Text>
    </TouchableOpacity>
  </View>
);

const Home = () => {
  const renderRoomCategory = (rooms, categoryTitle) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{categoryTitle}</Text>
      <FlatList
        data={rooms}
        renderItem={({ item }) => <RoomCard room={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.title}>Hotel Room Details</Text>
        </View>
      </View>

      {/* Discounted Rooms Section */}
      {renderRoomCategory(discountedRooms, 'Discounted Rooms')}

      {/* Occupied Rooms Section */}
      {renderRoomCategory(occupiedRooms, 'Occupied Rooms')}

      {/* Available (Free) Rooms Section */}
      {renderRoomCategory(availableRooms, 'Available Rooms')}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'tomato',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'tomato',
    marginBottom: 10,
  },
  horizontalList: {
    paddingBottom: 20,
  },
  header: {
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'tomato',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerInner: {
    backgroundColor: '#ffe5e5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  roomCard: {
    backgroundColor: '#ffe5e5',
    padding: 20,
    borderRadius: 10,
    marginRight: 15,
    width: 250,
    elevation: 3,
  },
  roomType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c44e3c',
    marginBottom: 10,
  },
  roomDetails: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  bookButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Home;
