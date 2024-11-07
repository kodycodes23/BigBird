import React from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import mentorImage from '@/assets/images/mentor2.png';
import mentorImage2 from '@/assets/images/mentor.png';
import BackButton from '@/src/components/BackButton';

type Mentor = {
  id: string;
  name: string;
  role: string;
  image: ImageSourcePropType;
  isTopMentor: boolean;
};

const mentorsData: Mentor[] = [
  { id: '1', name: 'Danny Alexs', role: 'Social Media', image: mentorImage, isTopMentor: true },
  { id: '2', name: 'Danny Alexs', role: 'Designer', image: mentorImage2, isTopMentor: true },
  { id: '3', name: 'Danny Alexs', role: 'Developer', image: mentorImage, isTopMentor: true },
  { id: '4', name: 'Danny Alexs', role: 'Developer', image: mentorImage2, isTopMentor: false },
  { id: '5', name: 'Danny Alexs', role: 'Social Media', image: mentorImage, isTopMentor: false },
  { id: '6', name: 'Danny Alexs', role: 'Designer', image: mentorImage2, isTopMentor: false },
  // Add more mentors as needed
];

export default function Explore() {
  const renderMentor = ({ item }: { item: Mentor }) => (
    <View style={styles.mentorCard}>
      <View style={styles.mentorImageWrapper}>
        <Image source={item.image} style={styles.mentorImage} />
        <View style={[styles.statusDot, item.isTopMentor ? styles.topMentorDot : styles.mentorDot]} />
      </View>
      <Text style={styles.mentorName}>{item.name}</Text>
      <Text style={styles.mentorRole}>{item.role}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.topNav}>
        <BackButton/>
        {/* <Text style={styles.timeText}>9:41</Text> */}
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search here" style={styles.searchInput} />
        <View style={styles.searchButton}>
          <Ionicons name="search" size={24} color="white" />
        </View>
      </View>

      {/* Top Mentors Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Mentors</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={mentorsData.filter((mentor) => mentor.isTopMentor)}
        renderItem={renderMentor}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/* Mentors Section */}
      <Text style={styles.sectionTitle}>Mentors</Text>
      <FlatList
        data={mentorsData}
        renderItem={renderMentor}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.mentorsList}
      />

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <MaterialIcons name="grid-view" size={24} color="grey" />
        <MaterialIcons name="eco" size={24} color="green" />
        <MaterialIcons name="mail-outline" size={24} color="grey" />
        <Ionicons name="person-outline" size={24} color="grey" />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
  topNav: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 },
  timeText: { flex: 1, textAlign: 'center', color: '#000' },

  searchContainer: { flexDirection: 'row', alignItems: 'center', margin: 15, backgroundColor: '#f0f5f0', borderRadius: 10, padding: 10 },
  searchInput: { flex: 1, fontSize: 16, color: '#aaa' },
  searchButton: { backgroundColor: '#ffc107', padding: 8, borderRadius: 8 },

  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15, marginTop: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  viewAllText: { fontSize: 14, color: '#000' },

  mentorsList: { paddingHorizontal: 15 },
  mentorCard: {
    width: 90,
    alignItems: 'center',
    margin: 10,
  },
  mentorImageWrapper: {
    width: 70,
    height: 70,
    position: 'relative', // Allows the dot to be placed in the corner of the image
    marginBottom: 5,
  },
  mentorImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  statusDot: {
    position: 'absolute',
    bottom: 2,  // Adjusted to touch the image's bottom edge
    right: 2,   // Adjusted to touch the image's right edge
    width: 12,
    height: 12,
    borderRadius: 6, // Circular shape for the dot
    borderWidth: 2,
    borderColor: '#fff', // Optional: adds a white border for visibility
  },
  topMentorDot: { backgroundColor: '#ffc107' },
  mentorDot: { backgroundColor: '#d9534f' },

  mentorName: { fontSize: 14, fontWeight: '600', color: '#000' },
  mentorRole: { fontSize: 12, color: '#555' },

  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderTopWidth: 1, borderColor: '#ddd' },
});
