import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const LandingPage = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('SignIn'); // Navigate to the Sign In screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Hotel</Text>
        <TouchableOpacity style={styles.hubButton} onPress={handlePress}>
          <Text style={styles.hubText}>Hub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000FF', // Blue background
  },
  innerContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    width: 150,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  hubButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
  hubText: {
    fontSize: 24,
    color: 'white',
  },
});

export default LandingPage;
