import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const RegisterScreen: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {navigate: navigateHome} : NavigationProp<AuthNavigationType>= useNavigation()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />

      <TextInput placeholder="Fullname" style={styles.input} />
      <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          style={styles.passwordInput}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.icon}
        >
          <Ionicons
            name={passwordVisible ? 'eye' : 'eye-off'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.phoneContainer}>
        <View style={styles.countryCode}>
          <Text style={styles.flag}>🇳🇬</Text>
        </View>
        <TextInput
          placeholder="+234"
          keyboardType="phone-pad"
          style={styles.phoneInput}
        />
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={() => navigateHome('Login')} >
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.facebookButton}>
      <Image source={require('@/assets/images/facebook1.png')}  style={styles.socialIcon}/>
        <Text style={styles.facebookText}>Log in with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
      <Image source={require('@/assets/images/google.png')}  style={styles.socialIcon}/>
        <Text style={styles.googleText}>Log in with Google</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        By signing up you accept the{' '}
        <Text style={styles.link} onPress={() => console.log('Terms of Service')}>
          Terms of Service
        </Text>{' '}
        and{' '}
        <Text style={styles.link} onPress={() => console.log('Privacy Policy')}>
          Privacy Policy
        </Text>
      </Text>

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => navigateHome('Login')}>
          Log in
        </Text>
      </Text>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
  },
  icon: {
    padding: 10,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
  },
  countryCode: {
    padding: 10,
    borderRightWidth: 1,
    borderColor: '#e6e6e6',
  },
  flag: {
    fontSize: 18,
  },
  phoneInput: {
    flex: 1,
    padding: 12,
  },
  socialIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  signUpButton: {
    backgroundColor: '#3bb54a',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  signUpText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  orText: {
    marginHorizontal: 10,
    color: '#7d7d7d',
  },
  facebookButton: {
    backgroundColor: '#1877f2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  facebookText: {
    color: '#fff',
    fontWeight: '600',
  },
  googleButton: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  googleText: {
    color: '#000',
    fontWeight: '600',
  },
  termsText: {
    textAlign: 'center',
    marginBottom: 15,
    color: '#7d7d7d',
  },
  link: {
    color: '#1e90ff',
  },
  footerText: {
    textAlign: 'center',
    color: '#7d7d7d',
  },
});
