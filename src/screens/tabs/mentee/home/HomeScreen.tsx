import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Profile from '@/assets/svg/profile.svg'; // Adjusted SVG import for React Native
import { Menu, Provider } from 'react-native-paper';

export default function HomeScreen() {
  const navigation = useNavigation();
  const {navigate: navigateHome} : NavigationProp<HomeNavigationType>= useNavigation()
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const navigateToGroupCall = () => {
    closeMenu();
    navigateHome('GroupCall'); // Navigate to GroupCallDetails screen
  };

  return (
    <Provider>
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image source={require('@/assets/images/profile1.png')} style={styles.avatar} />
          <View>
            <Text style={styles.greeting}>Hallo, Samuel!</Text>
            <View style={styles.balanceRow}>
              <MaterialIcons name="emoji-events" size={16} color="gold" />
              <Text style={styles.balanceText}>$74.00 Remaining</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigateHome("Notifications")}>
        <Feather name="bell" size={24} color="black" />
        </TouchableOpacity>

      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput placeholder="Search here" style={styles.searchInput} />
        <TouchableOpacity style={styles.searchIcon}>
          <FontAwesome name="search" size={18} color="white" />
        </TouchableOpacity>
      </View>

      {/* Ongoing Group Call */}
      <View style={styles.callDetails}>
        <Text style={styles.sectionTitle}>Ongoing Group Call</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.liveContainer}>
            <View style={styles.liveIndicator}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
            <Text style={styles.liveText}>Live</Text>
          </View>
          {/* Menu Button */}
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={
              <TouchableOpacity onPress={openMenu}>
                <Feather name="more-vertical" size={24} color="black" />
              </TouchableOpacity>
            }
          >
            <Menu.Item onPress={navigateToGroupCall} title="Group Call Details" />
          </Menu>
        </View>
        <View style={styles.separator} />
        <Text style={styles.callTitle}>Navigating Dietary Trends: Keto, Paleo, Vegan, and More 🌱</Text>
        <View style={styles.participants}>
          <Image source={require('@/assets/images/participant.png')} style={styles.participantAvatar} />
          <Image source={require('@/assets/images/participant1.png')} style={styles.participantAvatar} />
          <Image source={require('@/assets/images/participant2.png')} style={styles.participantAvatar} />
          <Text style={styles.participantText}>and 52 others are listening</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.hostInfo}>
          <Image source={require('@/assets/images/participant.png')} style={styles.hostAvatar} />
          <Text style={styles.hostName}>Anamika Jain</Text>
          <Text style={styles.hostTag}>Host</Text>
        </View>
        <Text style={styles.hostDescription}>Passionate Fitness Enthusiast and Vegan Advocate | Achieving My Health ...</Text>
      </View>

      {/* Available Mentors */}
      <View style={styles.mentorsSection}>
        <Text style={styles.sectionTitle}>Available Mentors</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mentorsList}>
        {[1, 2, 3, 4].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.mentorCard}
            onPress={() => navigateHome('MentorDetails')}
          >
            <Image source={require('@/assets/images/mentor.png')} style={styles.mentorAvatar} />
            <Text style={styles.mentorName}>Danny Alexs</Text>
            <Text style={styles.mentorRole}>Social Media</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Mentors Section */}
      <View style={styles.mentorsSection}>
        <Text style={styles.sectionTitle}>Mentors</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mentorsList}>
        {[1, 2, 3, 4].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.mentorCard}
            onPress={() => navigateHome('MentorDetails')}
          >
            <Image source={require('@/assets/images/mentor2.png')} style={styles.mentorAvatar} />
            <Text style={styles.mentorName}>Danny Alexs</Text>
            <Text style={styles.mentorRole}>Developer</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  profile: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  greeting: { fontSize: 18, fontWeight: 'bold' },
  balanceRow: { flexDirection: 'row', alignItems: 'center' },
  balanceText: { color: '#FFC107', marginLeft: 5 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 10, paddingHorizontal: 10, marginBottom: 20 },
  searchInput: { flex: 1, padding: 10 },
  searchIcon: { backgroundColor: '#34C759', padding: 10, borderRadius: 10 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  liveContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  liveIndicator: { flexDirection: 'row', marginRight: 5 },
  dot: { width: 5, height: 5, borderRadius: 2.5, backgroundColor: '#34C759', marginHorizontal: 2 },
  liveText: { color: '#34C759' },
  callDetails: { padding: 15, backgroundColor: '#fafafa', borderRadius: 10, marginBottom: 20 },
  callTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  participants: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  participantAvatar: { width: 30, height: 30, borderRadius: 15, marginRight: -10 },
  participantText: { marginLeft: 10 },
  separator: { height: 1, backgroundColor: '#1E60A2', marginVertical: 10 },
  hostInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  hostAvatar: { width: 30, height: 30, borderRadius: 15, marginRight: 10 },
  hostName: { fontWeight: 'bold' },
  hostTag: { backgroundColor: '#E3F2FD', color: '#1976D2', padding: 5, borderRadius: 5, marginLeft: 5 },
  hostDescription: { color: '#777' },
  mentorsSection: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 },
  viewAll: { color: '#1976D2' },
  mentorsList: { flexDirection: 'row' },
  mentorCard: { alignItems: 'center', marginRight: 15 },
  mentorAvatar: { width: 70, height: 70, borderRadius: 35, marginBottom: 5 },
  mentorName: { fontWeight: 'bold' },
  mentorRole: { color: '#777' },
});
