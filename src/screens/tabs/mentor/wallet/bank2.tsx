import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Image, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const WithdrawScreen = () => {
  const [amount, setAmount] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [showAddAccountModal, setShowAddAccountModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleAddAccount = () => {
    setShowAddAccountModal(true);
  };

  const handleCloseAddAccountModal = () => {
    setShowAddAccountModal(false);
  };

  const handleNext = () => {
    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={{ uri: '@/assets/images/back.png' }} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Withdraw</Text>
      </View>

      <Text style={styles.sectionTitle}>Amount to Withdraw</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddAccount}>
        <Text style={styles.addButtonText}>Select Bank Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      {/* Add Account Modal */}
      <Modal
        visible={showAddAccountModal}
        animationType="slide"
        transparent
        onRequestClose={handleCloseAddAccountModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseAddAccountModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Image source={{ uri: '@/assets/images/gtbank.png' }} style={styles.bankLogo} />

            <Text style={styles.modalText}>Select Bank</Text>
            <Picker
              selectedValue={selectedBank}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedBank(itemValue)}
            >
              <Picker.Item label="Zenith Bank" value="zenith" />
              <Picker.Item label="Providus Bank" value="providus" />
              <Picker.Item label="Ecobank" value="ecobank" />
              <Picker.Item label="Palmpay" value="palmpay" />
              <Picker.Item label="Polaris Bank" value="polaris" />
            </Picker>

            <TextInput
              style={styles.accountInput}
              placeholder="Enter Account Number"
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.addAccountButton}>
              <Text style={styles.addButtonText}>Add Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Success Modal */}
      <Modal
        visible={showSuccessModal}
        animationType="slide"
        transparent
        onRequestClose={handleCloseSuccessModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.successModalContent}>
            <Image source={{ uri: '@/assets/images/done.png' }} style={styles.successIcon} />
            <Text style={styles.successText}>Successful</Text>
            <Text style={styles.successDescription}>Your transaction was completed successfully.</Text>
            <TouchableOpacity style={styles.doneButton} onPress={handleCloseSuccessModal}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WithdrawScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  nextButtonText: {
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
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    position: 'relative',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#666',
  },
  bankLogo: {
    width: 100,
    height: 30,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 20,
  },
  accountInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
  },
  addAccountButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  successModalContent: {
    width: '80%',
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
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
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
});
