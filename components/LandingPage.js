// src/components/LandingPage.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Hotel</Text>
        <View style={styles.hubContainer}>
          <Text style={styles.hubText}>Hub</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000FF', 
    // Blue background
  },
  innerContainer: {
    backgroundColor: '#FFFFFF', // White background for the container
    borderRadius: 15, // Rounded edges
    padding: 20, // Padding inside the container
    alignItems: 'center',
    width:150
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold', // Bold text
    color: 'black', // Black text color
    marginBottom: 10, 
  },
  hubContainer: {
    backgroundColor: 'black', // Black background for "Hub" container
    borderRadius: 10, // Rounded edges for the "Hub" container
    padding: 10, // Padding inside the "Hub" container
  },
  hubText: {
    fontSize: 24,
    color: 'white', // White text color for "Hub"
  },
});

export default LandingPage;
