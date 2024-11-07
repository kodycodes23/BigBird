import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assumes Expo or react-native-vector-icons is installed
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SessionContext } from '@/src/context/SessionContext';

const LoginScreen: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const {navigate: navigateTab} : NavigationProp<TabNavigationType>= useNavigation()
  const {navigate: navigateAuth} : NavigationProp<AuthNavigationType>= useNavigation()
  
  const sessionContext = useContext(SessionContext);


  const onSubmit = () => {
    // Navigate to HomeNav when login is successful
    if (sessionContext) {
      sessionContext.setSession(true);
      sessionContext.setUserRole('mentee');  // Update session state to true
      // navigateTab('HomeNav'); // Navigate to HomeNav tab
    }
  };

  const onSubmit2 = () => {
    // Navigate to HomeNav when login is successful
    if (sessionContext) {
      sessionContext.setSession(true);
      sessionContext.setUserRole('mentor');  // Update session state to true
      // navigateTab('HomeNav'); // Navigate to HomeNav tab
    }
  };



  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input with Eye Icon */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <FontAwesome name={passwordVisible ? "eye" : "eye-slash"} size={24} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>


      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Login Buttons */}
      <TouchableOpacity style={[styles.socialButton, styles.facebookButton]} onPress={onSubmit2}>
        <Image source={require('@/assets/images/facebook1.png')}  style={styles.socialIcon}/>
        <Text style={styles.socialButtonText}>Log in with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
      <Image source={require('@/assets/images/google.png')}  style={styles.socialIcon}/>
        <Text className='color-black' style={[styles.socialButtonText, { color: '#000' }]}>Log in with Google</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigateAuth("Register")}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
  },
  loginButton: {
    width: '90%',
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#0A84FF',
    fontSize: 16,
    marginVertical: 15,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginVertical: 15,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#888',
    fontSize: 16,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderRadius: 8,
    paddingVertical: 15,
    marginVertical: 8,
    justifyContent: 'center',
  },
  facebookButton: {
    backgroundColor: '#1877F2',
  },
  googleButton: {
    backgroundColor: '#F2F2F2',
  },
  socialIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: '#888',
  },
  signupLink: {
    fontSize: 16,
    color: '#0A84FF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
