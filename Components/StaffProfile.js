import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const StaffProfile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.settingsIcon} onPress={() => navigation.navigate('Settings')}>
        <Icon name="settings-outline" size={30} color="#000" />
      </TouchableOpacity>

      <View style={styles.profileSection}>
        <Image
          style={styles.profileImage}
          source={require('../assets/profile.png')}
        />
        <Text style={styles.managerName}>Sam</Text>
        <Text style={styles.managerRole}>Hotel Manager</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Task Management</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Assign Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>View Assigned Tasks</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Staff Performance</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>View Performance Reports</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  settingsIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginTop:60,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#e67e22',
  },
  managerName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  managerRole: {
    fontSize: 18,
    color: '#95a5a6',
  },
  section: {
    marginVertical: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 15,
  },
  actionButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  actionButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default StaffProfile;
