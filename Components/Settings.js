import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Settings = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={isDarkMode ? darkStyles.container : lightStyles.container}>
      
      <TouchableOpacity style={styles.option} onPress={toggleTheme}>
        <Text style={styles.optionText}>Toggle Dark/Light Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => {/* Handle profile update logic */}}>
        <Text style={styles.optionText}>Update Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={() => {/* Handle logout logic */}}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};


const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    padding: 20,
  },
});

const styles = StyleSheet.create({
  option: {
    padding: 15,
    backgroundColor: '#3498db',
    borderRadius: 8,
    marginVertical: 10,
  },
  optionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 15,
    backgroundColor: '#e74c3c',
    borderRadius: 8,
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButton: {
    marginTop: 30,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#3498db',
    fontWeight: 'bold',
  },
});

export default Settings;
