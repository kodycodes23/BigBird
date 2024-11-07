import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const EditProfile: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          {/* Removed SVG to focus on core structure */}
          {/* <BackButton width={24} height={24} /> */}
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>

      {/* Form Fields */}
      <View style={styles.form}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Jonson"
          placeholderTextColor="#A0A0A0"
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Doe"
          placeholderTextColor="#A0A0A0"
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="johndoe@mail.com"
          placeholderTextColor="#A0A0A0"
        />

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.phoneContainer}>
          {/* Country Code Button */}
          <TouchableOpacity style={styles.countryCodeButton}>
            <Text style={styles.flag}>+234</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.phoneInput}
            placeholder="+2348065650633"
            placeholderTextColor="#A0A0A0"
            keyboardType="phone-pad"
          />
        </View>

        {/* Update Button */}
        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F0F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#333333',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  countryCodeButton: {
    backgroundColor: '#F0F5F5',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  flag: {
    fontSize: 18,
  },
  phoneInput: {
    flex: 1,
    backgroundColor: '#F0F5F5',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    color: '#333333',
  },
  updateButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EditProfile;
