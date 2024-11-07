import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const DepositScreen: React.FC = () => {

  const navigaton = useNavigation();

  const { navigate: navigateWallet } = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigaton.goBack()}>
          <Image source={require('@/assets/images/back.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Deposit</Text>
      </View>

      {/* Wallet Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.walletLabel}>Wallet Balance</Text>
        <View style={styles.currencySelector}>
          <Image source={require('@/assets/images/flag.png')} style={styles.flagIcon} />
          <Text style={styles.currencyText}>NGN</Text>
          <Text style={styles.dropdownArrow}>▼</Text>
        </View>
        <Text style={styles.balanceAmount}>₦ 6,600,540.00</Text>
        <Text style={styles.balanceEquivalent}>$8,540.00</Text>
      </View>

      {/* Enter Amount Section */}
      <Text style={styles.enterAmountText}>Enter Amount</Text>
      <View style={styles.amountInputContainer}>
        <View style={styles.currencyInput}>
          <Image source={require('@/assets/images/flag.png')} style={styles.flagIcon} />
          <Text style={styles.currencyText}>NGN</Text>
          <Text style={styles.dropdownArrow}>▼</Text>
        </View>
        <TextInput
          style={styles.amountInput}
          placeholder="0.00"
          placeholderTextColor="#888"
          keyboardType="numeric"
        />
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={() => navigateWallet('CardDeposit')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  balanceCard: {
    backgroundColor: '#1d1d1d',
    borderRadius: 12,
    padding: 24, // Increased padding for more spacing
    paddingBottom: 32, // More space at the bottom
    alignItems: 'center',
    marginBottom: 24,
    minHeight: 150, // Ensures more height for layout spacing
  },
  walletLabel: {
    fontSize: 14,
    color: '#888',
    alignSelf: 'flex-start',
  },
  currencySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 8,
    backgroundColor: '#333',
    borderRadius: 16,
  },
  flagIcon: {
    width: 24,           // Set width and height to the same value for a circle
    height: 24,
    borderRadius: 12,     // Half of width/height to make it circular
    marginRight: 8,
  },
  currencyText: {
    color: '#808080',
    fontSize: 14,
    fontWeight: '600',
  },
  dropdownArrow: {
    color: '#808080',
    marginLeft: 4,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 8,
  },
  balanceEquivalent: {
    fontSize: 20,
    color: '#888',
  },
  enterAmountText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 24,
  },
  currencyInput: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  amountInput: {
    flex: 1,
    fontSize: 20,
    color: '#333',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nextButton: {
    backgroundColor: '#28a745',
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#28a745',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DepositScreen;
