import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Welcome from '@/assets/svg/welcome.svg';
import Button from '@/src/components/Button'
import { NavigationProp, useNavigation } from '@react-navigation/native';

const Onboarding: React.FC = () => {
    const {navigate: navigateAuth} : NavigationProp<AuthNavigationType>= useNavigation()

  return (
      <View style={styles.container}>
        {/* Images for title and description */}
        <View style={styles.imagesContainer}>
          <Image source={require('../../../assets/images/firstpage.png')} style={styles.image1} />
          <Image source={require('../../../assets/images/onboard.png')} style={styles.image2} />
        </View>

        {/* Join now button */}
        <TouchableOpacity style={styles.joinButton} onPress={() => navigateAuth('Register')}>
          <Text style={styles.joinButtonText}>Join now</Text>
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
    imagesContainer: {
      flexDirection: 'column', // Stack images vertically
      alignItems: 'center',
      marginTop: 20,
    },
    image1: {
      width: 300, // Adjust width to fit nicely
      height: 250, // Adjust height proportionally
      marginBottom: 10,
      resizeMode: 'contain', // Ensures the image fits without distortion
    },
    image2: {
      width: 300, // Adjust width to fit nicely
      height: 250, // Adjust height proportionally
      resizeMode: 'contain',
    },
    joinButton: {
      marginTop: 30,
      backgroundColor: '#000',
      borderRadius: 30,
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    joinButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default Onboarding;
