import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Switch } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AvailabilityScreen() {
  const [isAvailable, setIsAvailable] = useState(false);
  const [isScheduled, setIsScheduled] = useState(true);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date(2024, 9, 12, 9, 45)); // Default date: 12 October, 2024 at 09:45 AM

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
        <Image source={ require('@/assets/images/back.png' )} style={styles.backImage} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Availability</Text>
      </View>

      {/* Available Time Section */}
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Available time</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)} >
            <Image source={ require('@/assets/images/calender.png' )} style={styles.calendarImage} />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionSubtitle}>Adjust to your schedule</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.availableButton}>
            <Text style={styles.availableButtonText}>Available</Text>
          </TouchableOpacity>
          {/* Switch for Availability */}
          <Switch
            value={isAvailable}
            onValueChange={setIsAvailable}
            trackColor={{ false: '#BDBDBD', true: '#6DBD6A' }}
            thumbColor={isAvailable ? '#fff' : '#f4f3f4'}
            style={styles.switch}
          />
        </View>
      </View>

      {/* Schedule Date & Time */}
      <View style={styles.section}>
        <Text style={styles.subSectionTitle}>Schedule date & time</Text>
        <View style={styles.row}>
          {/* Switch for Scheduled Status */}
          <Switch
            value={isScheduled}
            onValueChange={setIsScheduled}
            trackColor={{ false: '#BDBDBD', true: '#6DBD6A' }}
            thumbColor={isScheduled ? '#fff' : '#f4f3f4'}
            style={styles.switch}
          />
          <Text style={styles.dateText}>
            {date.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })} at {date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </View>
      </View>

      {/* Set Button */}
      <TouchableOpacity style={styles.setButton}>
        <Text style={styles.setButtonText}>Set</Text>
      </TouchableOpacity>

      {/* DateTime Picker */}
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    paddingRight: 10,
  },
  switch: {
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center', // Center the text horizontally
    flex: 1, // Ensure it takes up the full width to center properly
  },
  backImage: {
    width: 30,
    height: 30,
  },
  section: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    flex: 1,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 10,
  },
  availableButton: {
    backgroundColor: '#6DBD6A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
  },
  availableButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  calendarIcon: {
    backgroundColor: '#BDBDBD',
    padding: 8,
    borderRadius: 8,
  },
  calendarImage: {
    width: 50,
    height: 50,
  },
  checkIcon: {
    marginLeft: 10,
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#8E8E93',
    marginLeft: 10,
  },
  setButton: {
    backgroundColor: '#6DBD6A',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 20,
  },
  setButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
