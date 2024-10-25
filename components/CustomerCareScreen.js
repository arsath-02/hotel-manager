// src/components/CustomerCareScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For icons

const CustomerCareScreen = () => {
  
  // Function to handle button press
  const handleOptionPress = (option) => {
    Alert.alert(`${option} selected`, `You chose the ${option} option.`, [{ text: 'OK' }]);
  };

  return (
    <View style={styles.screen}>

      {/* Room Service Option */}
      <TouchableOpacity style={styles.optionContainer} onPress={() => handleOptionPress('Room Service')}>
        <Icon name="bed" size={24} color="#FFA500" />
        <Text style={styles.optionText}>Room Service</Text>
      </TouchableOpacity>

      {/* Laundry */}
      <TouchableOpacity style={styles.optionContainer} onPress={() => handleOptionPress('Laundry Service')}>
        <Icon name="tint" size={24} color="#FFA500" />
        <Text style={styles.optionText}>Laundry Service</Text>
      </TouchableOpacity>

      {/* Wi-Fi Support */}
      <TouchableOpacity style={styles.optionContainer} onPress={() => handleOptionPress('Wi-Fi Support')}>
        <Icon name="wifi" size={24} color="#FFA500" />
        <Text style={styles.optionText}>Wi-Fi Support</Text>
      </TouchableOpacity>

      {/* Billing Assistance */}
      <TouchableOpacity style={styles.optionContainer} onPress={() => handleOptionPress('Billing Assistance')}>
        <Icon name="credit-card" size={24} color="#FFA500" />
        <Text style={styles.optionText}>Billing Assistance</Text>
      </TouchableOpacity>

      {/* Complaint Registration */}
      <TouchableOpacity style={styles.optionContainer} onPress={() => handleOptionPress('Complaint Registration')}>
        <Icon name="exclamation-triangle" size={24} color="#FFA500" />
        <Text style={styles.optionText}>Complaint Registration</Text>
      </TouchableOpacity>

      {/* Feedback */}
      <TouchableOpacity style={styles.optionContainer} onPress={() => handleOptionPress('Feedback')}>
        <Icon name="comment" size={24} color="#FFA500" />
        <Text style={styles.optionText}>Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'orange',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    width: '90%',
    borderRadius: 10,
    elevation: 3, // Adds shadow to buttons
  },
  optionText: {
    marginLeft: 15,
    fontSize: 18,
    color: '#333',
  },
});

export default CustomerCareScreen;
