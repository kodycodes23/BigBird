import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Switch,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '@/src/components/BackButton';

const SettingsScreen = () => {
  const [isMentee, setIsMentee] = useState(true);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const togglePasswordModal = () => {
    setIsPasswordModalVisible(!isPasswordModalVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button and Title */}
      <View style={styles.header}>
        <BackButton/>
        <Text style={styles.headerText}>Setting</Text>
      </View>

      {/* Password Section */}
      <TouchableOpacity style={styles.passwordContainer} onPress={togglePasswordModal}>
        <Ionicons name="lock-closed-outline" size={24} color="#A0A0A0" />
        <View style={styles.passwordTextContainer}>
          <Text style={styles.passwordTitle}>Password</Text>
          <Text style={styles.passwordSubtitle}>Change account password</Text>
        </View>
      </TouchableOpacity>

      {/* Mentee Switch */}
      <Text style={styles.sectionTitle}>I'M a Mentee</Text>
      <View style={styles.menteeSwitchContainer}>
        <Switch
          value={isMentee}
          onValueChange={(value) => setIsMentee(value)}
          thumbColor={isMentee ? "#2F80ED" : "#A0A0A0"}
        />
        <Text style={styles.menteeLabel}>Mentee</Text>
      </View>
      <Text style={styles.switchSubtitle}>Switch to Mentor Mode</Text>

      {/* Change Password Modal */}
      <Modal
        visible={isPasswordModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={togglePasswordModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Change Password</Text>
              <TouchableOpacity onPress={togglePasswordModal}>
                <Ionicons name="close-outline" size={28} color="#000" />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalSubtitle}>Update your account password</Text>

            {/* Old Password Input */}
            <Text style={styles.inputLabel}>Old Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your old password"
                secureTextEntry={!showOldPassword}
              />
              <TouchableOpacity onPress={() => setShowOldPassword(!showOldPassword)}>
                <Text style={styles.showHideText}>{showOldPassword ? "Hide" : "Show"}</Text>
              </TouchableOpacity>
            </View>

            {/* New Password Input */}
            <Text style={styles.inputLabel}>New Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your new password"
                secureTextEntry={!showNewPassword}
              />
              <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)}>
                <Text style={styles.showHideText}>{showNewPassword ? "Hide" : "Show"}</Text>
              </TouchableOpacity>
            </View>

            {/* Password Requirements */}
            <Text style={styles.passwordRequirements}>
              Must be more than 8 characters and contain at least one capital letter, one number and one special character
            </Text>

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    marginBottom: 30,
  },
  passwordTextContainer: {
    marginLeft: 12,
  },
  passwordTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  passwordSubtitle: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  menteeSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  menteeLabel: {
    fontSize: 16,
    marginLeft: 8,
  },
  switchSubtitle: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 40,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#A0A0A0',
    marginTop: 8,
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  showHideText: {
    color: '#2F80ED',
    fontWeight: '600',
  },
  passwordRequirements: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 24,
  },
  saveButton: {
    backgroundColor: '#34A853',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default SettingsScreen;
