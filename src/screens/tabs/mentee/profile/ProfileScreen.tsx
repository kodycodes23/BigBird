import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import avatar from '@/assets/images/avatar.png'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SessionContext } from '@/src/context/SessionContext';

const ProfileScreen: React.FC = () => {

  const {navigate: navigateProfile} : NavigationProp<ProfileNavigationType>= useNavigation()
  const {navigate: navigateHome} : NavigationProp<AuthNavigationType>= useNavigation()

  const sessionContext = useContext(SessionContext);


  const onSubmit = () => {
    // Navigate to HomeNav when login is successful
    if (sessionContext) {
      sessionContext.setSession(false);
 // Update session state to true
       navigateHome('Login'); // Navigate to HomeNav tab
    }
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('@/assets/svg/backbutton.svg')} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
      </View>

      {/* Avatar and Greeting */}
      <View style={styles.avatarContainer}>
        <Image source={require('@/assets/images/avatar.png')} style={styles.avatar} />
        <Text style={styles.greeting}>Hello, Johnson</Text>
        <Text style={styles.subtext}>Manage your account & Preferences</Text>
      </View>

      {/* Menu Options */}
      <TouchableOpacity style={styles.menuItem} onPress={() => navigateProfile("Edit")}>
        <Image source={require('@/assets/images/profile.png')} style={styles.menuIcon} />
        <View>
          <Text style={styles.menuTitle}>My Profile</Text>
          <Text style={styles.menuDescription}>Your profile and personal information</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}  onPress={() => navigateProfile("Settings")}>
        <Image source={require('@/assets/images/security.png')} style={styles.menuIcon} />
        <View>
          <Text style={styles.menuTitle}>Security</Text>
          <Text style={styles.menuDescription}>Manage how you access your account</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigateProfile("Preference")} >
        <Image source={require('@/assets/images/preference.png')} style={styles.menuIcon} />
        <View>
          <Text style={styles.menuTitle}>Preferences</Text>
          <Text style={styles.menuDescription}>Settings and configurations</Text>
        </View>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={onSubmit}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    width: 24,
    height: 24,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e0e0e0', // Placeholder color for avatar
    marginBottom: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtext: {
    color: 'gray',
    fontSize: 14,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    marginVertical: 8,
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  menuDescription: {
    color: 'gray',
    fontSize: 14,
  },
  logoutButton: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logoutText: {
    color: 'red',
    fontSize: 16,
  },
});

export default ProfileScreen;
