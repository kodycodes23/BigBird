import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import BackButton from '@/src/components/BackButton';

const CardDeposit: React.FC = () => {
  // State to manage visibility of sensitive fields
  const [isCardVisible, setCardVisible] = useState(false);
  const [isExpiryVisible, setExpiryVisible] = useState(false);
  const [isCvvVisible, setCvvVisible] = useState(false);
  const [isPinVisible, setPinVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <BackButton/>
        <Text style={styles.title}>Deposit</Text>
      </View>

      {/* Card Info */}
      <View style={styles.cardInfo}>
        <Image source={require('@/assets/images/card.png')} style={styles.cardImage} />
        <Image source={require('@/assets/images/cardicon.png')} style={styles.cardicon} />
        <Text style={styles.cardInfoText}>Please enter your correct card info</Text>
      </View>

      {/* Card PAN Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your 16 digits card PAN</Text>
        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.input}
            placeholder="Enter card number"
            secureTextEntry={!isCardVisible}
          />
          <TouchableOpacity onPress={() => setCardVisible(!isCardVisible)}>
            <FontAwesome name={isCardVisible ? "eye-slash" : "eye"} size={24} color="#4CAF50" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Expiry Date and CVV */}
      {/* Expiry Date and CVV */}
<View style={styles.row}>
  {/* Expiry Date */}
  <View style={styles.halfWidthInputContainer}>
    <Text style={styles.label}>Expiry Date</Text>
    <View style={styles.inputWithIcon}>
      <TextInput
        style={styles.input}
        placeholder="MM/YY"
        secureTextEntry={!isExpiryVisible}
      />
      <TouchableOpacity onPress={() => setExpiryVisible(!isExpiryVisible)}>
        <FontAwesome name={isExpiryVisible ? "eye-slash" : "eye"} size={24} color="#4CAF50" />
      </TouchableOpacity>
    </View>
  </View>

  {/* CVV */}
  <View style={styles.halfWidthInputContainer}>
    <Text style={styles.label}>CVV</Text>
    <View style={styles.inputWithIcon}>
      <TextInput
        style={styles.input}
        placeholder="CVV"
        secureTextEntry={!isCvvVisible}
      />
      <TouchableOpacity onPress={() => setCvvVisible(!isCvvVisible)}>
        <FontAwesome name={isCvvVisible ? "eye-slash" : "eye"} size={24} color="#4CAF50" />
      </TouchableOpacity>
    </View>
  </View>
</View>


      {/* Secure PIN Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your secure 4-digit PIN</Text>
        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.input}
            placeholder="Enter PIN"
            secureTextEntry={!isPinVisible}
          />
          <TouchableOpacity onPress={() => setPinVisible(!isPinVisible)}>
            <FontAwesome name={isPinVisible ? "eye-slash" : "eye"} size={24} color="#4CAF50" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Change Deposit Method */}
      <TouchableOpacity>
        <Text style={styles.changeMethodText}>Change Deposit Method</Text>
      </TouchableOpacity>

      {/* Done Button */}
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 24,
    height: 24,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardInfo: {
    alignItems: 'center',
    marginTop: 20,
  },
  cardImage: {
    width: 200,
    height: 120,
    resizeMode: 'contain',
  },
  cardicon: {
    width: 40,
    height: 20,
    resizeMode: 'contain',
  },
  halfWidthInputContainer: {
    width: '48%',  // Half of the row width with a bit of space for margin
    marginVertical: 10,
  },
  cardInfoText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  changeMethodText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 20,
  },
  doneButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CardDeposit;
