import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '@/src/components/BackButton';

export default function BankWithdrawal() {
  const [amountToWithdraw, setAmountToWithdraw] = useState("₦1,540.00");
  const [selectedAccount, setSelectedAccount] = useState(1); // 1 or 2 for selected account
  const [isModalVisible, setIsModalVisible] = useState(false); // modal visibility state
  const [selectedBank, setSelectedBank] = useState(''); // bank selection state
  const [accountNumber, setAccountNumber] = useState(''); // account number input state
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSelectAccount = (accountNumber: number) => {
    setSelectedAccount(accountNumber);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };
  const handleNext = () => {
    setShowSuccessModal(true);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <BackButton/>
        <Text style={styles.headerTitle}>Withdraw</Text>
      </View>

      {/* Centered Amount Section */}
      <View style={styles.centeredSection}>
        <Text style={styles.sectionTitle}>Amount to Withdraw</Text>
        <Text style={styles.amountText}>{amountToWithdraw}</Text>
      </View>

      {/* Select Account */}
      <View style={styles.selectAccountRow}>
        <Text style={styles.sectionTitle}>Select Account</Text>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.newAccountText}>+ New Account</Text>
        </TouchableOpacity>
      </View>

      {/* Account Options */}
        <TouchableOpacity
          style={[
            styles.accountCard,
            selectedAccount === 1 && styles.accountCardSelected,
          ]}
          onPress={() => handleSelectAccount(1)}
        >
          {/* GTBank Logo */}
          <View style={styles.bankLogoContainer}>
            <Image source={require('@/assets/images/gtbank.png')} style={styles.bankLogo} />
          </View>

          {/* Check Icon at the Top Right */}
          {selectedAccount === 1 && (
            <Ionicons name="checkmark-circle" size={24} color="#28a745" style={styles.checkIcon} />
          )}

          {/* Account Details */}
          <View style={styles.accountDetails}>
            <Text style={styles.bankName}>Access Bank</Text>
            <Text style={styles.accountNumber}>******1234</Text>
          </View>

          {/* Account Holder Name at the Bottom Right */}
          <Text style={styles.accountHolderName}>Janet Crimson</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={[
          styles.accountCard,
          selectedAccount === 2 && styles.accountCardSelected,
        ]}
        onPress={() => handleSelectAccount(2)}
      >
        <View style={styles.bankLogoContainer}>
        <Image source={require('@/assets/images/access.png')} style={styles.bankLogo} />
        </View>
        <View style={styles.accountDetails}>
          <Text style={styles.bankName}>Access Bank</Text>
          <Text style={styles.accountNumber}>******1234</Text>
        </View>
        <Text style={styles.accountHolderName}>Janet Crimson</Text>
        {selectedAccount === 2 && (
          <Ionicons name="checkmark-circle" size={24} color="#28a745" style={styles.checkIcon} />
        )}
      </TouchableOpacity>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      {/* Modal for Adding New Account */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Account</Text>
            <Text style={styles.modalSubtitle}>Add a new account number to your details</Text>

            {/* Bank Dropdown */}
            <Text style={styles.modalLabel}>Bank</Text>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>{selectedBank || "Select Bank"}</Text>
            </TouchableOpacity>

            {/* Account Number Input */}
            <Text style={styles.modalLabel}>Account Number</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter your 10 digit account number"
              keyboardType="numeric"
              maxLength={10}
              onChangeText={setAccountNumber}
              value={accountNumber}
            />

            {/* Add Account Button */}
            <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
              <Text style={styles.addButtonText}>Add Account</Text>
            </TouchableOpacity>

            {/* Close Modal */}
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        visible={showSuccessModal}
        animationType="slide"
        transparent
        onRequestClose={handleCloseSuccessModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.successModalContent}>
            <Image source={require('@/assets/images/done.png')} style={styles.successIcon} />
            <Text style={styles.successText}>Successful</Text>
            <Text style={styles.successDescription}>Your transaction was completed successfully.</Text>
            <TouchableOpacity style={styles.doneButton} onPress={handleCloseSuccessModal}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
    marginRight: 24,
  },
  centeredSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  amountText: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  selectAccountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  newAccountText: {
    fontSize: 16,
    color: '#28a745',
    fontWeight: 'bold',
  },
  accountCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: 'transparent',
    borderWidth: 1,
  },
  accountCardSelected: {
    borderColor: '#28a745',
    backgroundColor: '#f0f9f4',
  },
  bankLogoContainer: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
    marginRight: 15,
  },
  accountDetails: {
    flex: 1,
  },
  bankName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  accountNumber: {
    fontSize: 14,
    color: '#888',
  },
  accountHolderName: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  checkIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  nextButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  modalLabel: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  dropdown: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  dropdownText: {
    color: '#888',
    fontSize: 16,
  },
  inputField: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
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
  bankLogo: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
});
