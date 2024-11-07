// Notifications.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

const Notifications = () => {
  const [filter, setFilter] = useState('All'); // Filters: 'All', 'Unread', 'Read'

  const notifications = [
    { type: 'Call', description: 'Upcoming call', time: '12:25 am', status: 'Today' },
    { type: 'Welcome to Bigbird', description: 'Thank you for joining Bigbird', time: '1:20 am', status: 'Today' },
    { type: 'Deposit', description: 'Your deposit of $400 was successful.', time: '12:25 am', status: 'Today' },
    { type: 'Deposit', description: 'Your deposit of $500 was successful.', time: '1:20 am', status: 'Yesterday' },
    { type: 'Call Transfer', description: 'Your Call Transfer $200 was successful.', time: '1:20 am', status: 'Yesterday' },
  ];

  const renderNotifications = notifications.map((notification, index) => (
    <View key={index}>
      <Text style={styles.dateHeader}>{notification.status}</Text>
      <View style={styles.notification}>
        <View style={styles.circle}></View>
        <View style={styles.textContainer}>
          <Text style={styles.notificationTitle}>{notification.type}</Text>
          <Text style={styles.notificationDescription}>{notification.description}</Text>
        </View>
        <Text style={styles.notificationTime}>{notification.time}</Text>
      </View>
    </View>
  ));

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('@/assets/images/back.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'All' && styles.activeFilter]}
          onPress={() => setFilter('All')}
        >
          <Text style={[styles.filterText, filter === 'All' && styles.activeFilterText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'Unread' && styles.activeFilter]}
          onPress={() => setFilter('Unread')}
        >
          <Text style={[styles.filterText, filter === 'Unread' && styles.activeFilterText]}>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'Read' && styles.activeFilter]}
          onPress={() => setFilter('Read')}
        >
          <Text style={[styles.filterText, filter === 'Read' && styles.activeFilterText]}>Read</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      <ScrollView>{renderNotifications}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
  },
  filterText: {
    color: '#333',
  },
  activeFilter: {
    backgroundColor: '#000',
  },
  activeFilterText: {
    color: '#FFF',
  },
  dateHeader: {
    marginLeft: 16,
    marginTop: 8,
    color: '#666',
    fontWeight: 'bold',
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#34C759',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  notificationDescription: {
    color: '#666',
  },
  notificationTime: {
    color: '#999',
  },
});

export default Notifications;
