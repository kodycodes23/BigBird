import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'react-native';
import BackButton from '@/src/components/BackButton';
import { useNavigation } from '@react-navigation/native';

const GroupCall = () => {
  const [accessType, setAccessType] = useState('Open');
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };
  const handleCreate = () => {
    setShowSuccessModal(true);
  };

  const handleConfirm = (selectedDate: Date) => {
    const formattedDate = selectedDate.toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    setDate(formattedDate);
    hideDatePicker();
};
const navigation = useNavigation();


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('@/assets/images/back.png')} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Group Call</Text>
        <TouchableOpacity onPress={handleCreate}>
          <Text style={styles.createButton}>Create</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} placeholder="Enter Title" />

      {/* Description */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.largeInput]}
        multiline
        // placeholder="Dive into the essentials of design in our live session - 'Fundamentals of Design,' where we unravel the core principles shaping visual aesthetics and creativity in the vibrant community of aspiring designers."
        placeholder="Enter Description"
      />

      {/* Upload Band */}
      <TouchableOpacity>
        <Text style={styles.uploadText}>Upload Band</Text>
      </TouchableOpacity>

      {/* Access */}
      <Text style={styles.label}>Access</Text>
      <View style={styles.accessContainer}>
        <TouchableOpacity
          style={[styles.accessButton, accessType === 'Open' && styles.selectedAccessButton]}
          onPress={() => setAccessType('Open')}
        >
          <Text style={[styles.accessText, accessType === 'Open' && styles.selectedAccessText]}>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.accessButton, accessType === 'Private' && styles.selectedAccessButton]}
          onPress={() => setAccessType('Private')}
        >
          <Text style={[styles.accessText, accessType === 'Private' && styles.selectedAccessText]}>Private</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.accessButton, accessType === 'Secret' && styles.selectedAccessButton]}
          onPress={() => setAccessType('Secret')}
        >
          <Text style={[styles.accessText, accessType === 'Secret' && styles.selectedAccessText]}>Secret</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.accessInfo}>Anyone can join the space as long as they are the member of community.</Text>

      {/* Date & Time */}
      <Text style={styles.label}>Date & time</Text>
      <TouchableOpacity style={styles.dateInput} onPress={showDatePicker}>
        <TextInput
          style={styles.dateTextInput}
          placeholder="Select date & time"
          value={date}
          editable={false} // Disable editing, only allow picker
        />
        <MaterialIcons name="calendar-today" size={20} color="#666" style={styles.calendarIcon} />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      {/* Buttons */}
      <TouchableOpacity style={styles.scheduleButton}>
        <Text style={styles.scheduleText}>Schedule</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.startNowButton}>
        <Text style={styles.startNowText}>Start Now</Text>
      </TouchableOpacity>


      <Modal
        visible={showSuccessModal}
        animationType="slide"
        transparent
        onRequestClose={handleCloseSuccessModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.successModalContent}>
            <Image source={require('@/assets/images/done.png')} style={styles.successIcon} />
            <Text style={styles.successText}>Success</Text>
            <Text style={styles.successDescription}>You have Successfully create a Group call.</Text>
            <Text style={styles.successDescription}>You can share it to Fan’s to Join with Link</Text>
            <TouchableOpacity style={styles.doneButton} onPress={handleCloseSuccessModal}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    padding: 8,
    height: 35,
    width: 35,
  },
  backIcon: {
    fontSize: 18,
    color: '#000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  createButton: {
    color: '#34C759',
    fontWeight: '600',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  largeInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  uploadText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  accessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  accessButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 20,
  },
  accessText: {
    color: '#333',
  },
  selectedAccessButton: {
    backgroundColor: '#000',
  },
  selectedAccessText: {
    color: '#FFF',
  },
  accessInfo: {
    fontSize: 12,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  dateTextInput: {
    flex: 1,
  },
  calendarIcon: {
    marginLeft: 10,
  },
  scheduleButton: {
    borderWidth: 1,
    borderColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  scheduleText: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  startNowButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  startNowText: {
    color: '#FFF',
    fontWeight: '600',
  },
  successModalContent: {
    width: '85%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
  },
  successIcon: {
    width: 60,
    height: 60,
    marginBottom: 15,
  },
  successText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  successDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  doneButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GroupCall;
