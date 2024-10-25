import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const notifications = [
  { id: '1', title: 'Meeting Reminder', body: 'You have a meeting at 3 PM today.', timestamp: '10:30 AM' },
  { id: '2', title: 'New Task Assigned', body: 'You have been assigned a new task.', timestamp: '9:15 AM' },
  { id: '3', title: 'Shift Change', body: 'Your shift has been changed to 2 PM.', timestamp: 'Yesterday' },
  { id: '4', title: 'Performance Review', body: 'Your monthly performance review is available.', timestamp: '2 days ago' },
];

const Notifications = () => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationBody}>{item.body}</Text>
      <Text style={styles.notificationTimestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.title}>Notifications</Text>
        </View>
      </View>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 20,
    marginTop:20,
    backgroundColor: 'tomato',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  headerInner: {
    backgroundColor: '#ffe5e5',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    color: 'tomato',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  notificationItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: 'tomato',
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
  },
  notificationBody: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  notificationTimestamp: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'right',
  },
});

export default Notifications;