import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Welcome from '@/assets/svg/welcome.svg';
import Button from '@/src/components/Button'
import { NavigationProp, useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {

  const {navigate: navigateAuth} : NavigationProp<AuthNavigationType>= useNavigation()
  const [selectedOption, setSelectedOption] = useState<string | null>(null);


  return (
    <View style={styles.container}>
    <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
    <Text style={styles.title}>Welcome to Bigbird</Text>
    <Text style={styles.subtext}>
      Best and popular apps for live{'\n'}Live call Mentors from home
    </Text>

    <Text style={styles.selectText}>Select One Option</Text>

    <View style={styles.optionContainer}>
      <TouchableOpacity onPress={() => setSelectedOption('mentor')} style={styles.option}>
        <View style={[styles.radioCircle, selectedOption === 'mentor' && styles.radioCircleSelected]} />
        <Text style={styles.optionText}>I’m a Mentor</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSelectedOption('mentee')} style={styles.option}>
        <View style={[styles.radioCircle, selectedOption === 'mentee' && styles.radioCircleSelected]} />
        <Text style={styles.optionText}>I’m a Mentee</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.nextButton} onPress={() => navigateAuth('Onboarding')}>
      <Text style={styles.nextButtonText}>Next</Text>
    </TouchableOpacity>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  paddingTop: 80,
  backgroundColor: '#fff',
},
logo: {
  width: 80,
  height: 80,
  marginBottom: 20,
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
  marginVertical: 5,
},
subtext: {
  fontSize: 16,
  color: '#888',
  textAlign: 'center',
  marginVertical: 10,
},
selectText: {
  fontSize: 16,
  fontWeight: 'bold',
  marginTop: 30,
  color: '#333',
},
optionContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginVertical: 20,
},
option: {
  flexDirection: 'row',
  alignItems: 'center',
  marginHorizontal: 10,
},
radioCircle: {
  width: 20,
  height: 20,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 8,
},
radioCircleSelected: {
  backgroundColor: '#000',
},
optionText: {
  fontSize: 16,
  color: '#333',
},
nextButton: {
  marginTop: 30,
  backgroundColor: '#2ab07c',
  borderRadius: 30,
  paddingVertical: 15,
  paddingHorizontal: 80,
},
nextButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
});

export default WelcomeScreen;
