// src/components/ProfileUpdate.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProfileUpdate = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Update your profile here!</Text>
    <Button title="Go Back" onPress={() => navigation.goBack()} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileUpdate;
