// Preferences.tsx
import BackButton from '@/src/components/BackButton';
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Preference = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotification, setEmailNotification] = useState(true);
  const [smsNotification, setSmsNotification] = useState(false);

  return (
    <View style={styles.container}>
      <BackButton/>
      <Text style={styles.title}>Preferences</Text>

      {/* Dark Mode Toggle */}
      <View style={styles.preference}>
        <View>
          <Text style={styles.preferenceTitle}>Dark Mode</Text>
          <Text style={styles.preferenceSubtitle}>Use dark mode theme</Text>
        </View>
        <Switch
          value={darkMode}
          onValueChange={() => setDarkMode(!darkMode)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkMode ? "#34C759" : "#f4f3f4"}
        />
      </View>

      {/* Notification Toggles */}
      <View style={styles.preference}>
        <View>
          <Text style={styles.preferenceTitle}>Email</Text>
          <Text style={styles.preferenceSubtitle}>Get notifications via email</Text>
        </View>
        <Switch
          value={emailNotification}
          onValueChange={() => setEmailNotification(!emailNotification)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={emailNotification ? "#34C759" : "#f4f3f4"}
        />
      </View>

      <View style={styles.preference}>
        <View>
          <Text style={styles.preferenceTitle}>SMS</Text>
          <Text style={styles.preferenceSubtitle}>Get notifications via app (For Any call)</Text>
        </View>
        <Switch
          value={smsNotification}
          onValueChange={() => setSmsNotification(!smsNotification)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={smsNotification ? "#34C759" : "#f4f3f4"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  preferenceTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  preferenceSubtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default Preference;
