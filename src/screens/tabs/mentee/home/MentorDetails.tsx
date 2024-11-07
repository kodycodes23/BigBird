import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Checkbox } from 'react-native-paper';

// TypeScript types for component props
interface MentorDetailsProps {}

const MentorDetails: React.FC<MentorDetailsProps> = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isHeartFilled, setIsHeartFilled] = useState<boolean>(false);
  const [selectedCallOption, setSelectedCallOption] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleRequestClick = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);
  const toggleHeart = () => setIsHeartFilled(!isHeartFilled);

  const handleCheckboxChange = (option: string) => {
    setSelectedOption(selectedOption === option ? null : option);
  };
  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.pageContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('@/assets/images/back.png')} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mentor Details</Text>
        <TouchableOpacity onPress={handleFavoritePress}>
          <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={28} color={isFavorite ? '#2ab07c' : 'gray'} />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Mentor Profile */}
        <View style={styles.mentorProfile}>
          <Image source={require('@/assets/images/preference.png')} style={styles.mentorImage} />
          <Text style={styles.mentorName}>Danny Alexs</Text>
          <Text style={styles.mentorPosition}>Social Media at Twitter</Text>
          <Text style={styles.location}>📍 Manchester, UK</Text>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.sectionText}>
            I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, UK.
            I’m passionate about designing digital products that have a positive impact on the world.
          </Text>
        </View>

        {/* Experiences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiences</Text>
          <View style={styles.experience}>
            <Image source={require('@/assets/images/twitter.png')} style={styles.companyLogo} />
            <View>
              <Text style={styles.jobTitle}>Product Designer</Text>
              <Text style={styles.jobDetails}>Twitter • Full-Time</Text>
              <Text style={styles.jobDuration}>Jun 2019 - Present (1y 1m)</Text>
              <Text style={styles.jobDescription}>Responsible for designing features and experiences for 10 brands...</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Request Call Button */}
      <TouchableOpacity style={styles.requestButton} onPress={handleRequestClick}>
        <Text style={styles.requestButtonText}>Request Call</Text>
      </TouchableOpacity>

      {/* Request Call Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <Pressable style={styles.modalOverlay} onPress={handleCloseModal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalIcon}>📞</Text>
            <Text style={styles.modalTitle}>Request a Call</Text>
            <Text style={styles.modalText}>Choose your preferred call duration</Text>

            <View style={styles.callOptions}>
              {/* Option 1 */}
              <View style={styles.callOption}>
                <Checkbox
                  status={selectedOption === '18 minutes' ? 'checked' : 'unchecked'}
                  onPress={() => handleCheckboxChange('18 minutes')}
                  color="#28a745"
                  uncheckedColor="#666"
                  // style={styles.checkbox} // Style to make it circular
                />
                <Text>18 minutes - $12</Text>
              </View>

              {/* Option 2 */}
              <View style={styles.callOption}>
                <Checkbox
                  status={selectedOption === '1 hour' ? 'checked' : 'unchecked'}
                  onPress={() => handleCheckboxChange('1 hour')}
                  color="#28a745"
                  uncheckedColor="#666"
                  // style={styles.checkbox} // Style to make it circular
                />
                <Text>1 hour - $30</Text>
              </View>
            </View>
            <Text style={styles.modalNotice}>Please ensure you have sufficient funds before proceeding.</Text>
            <TouchableOpacity style={styles.sendRequestButton}>
              <Text style={styles.sendRequestButtonText}>Send Request</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  BackButton: {
    padding: 8,
  },
  backButton: {
    width: 30, // Adjust the width to your preference
    height: 30, // Adjust the height to your preference
    position: 'absolute', // This makes the back button appear on the left
    left: 10, // Adjust the left position as needed
  },
  heartIcon: {
    padding: 8,
  },
  iconText: {
    fontSize: 24,
    color: '#6c757d',
  },
  heartFilled: {
    color: '#28a745', // Green color for the heart when filled
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    padding: 16,
  },
  mentorProfile: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mentorImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  mentorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  mentorPosition: {
    fontSize: 14,
    color: '#666',
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 14,
    color: '#333',
  },
  experience: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  companyLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    marginRight: 10,
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  jobDetails: {
    fontSize: 14,
    color: '#666',
  },
  jobDuration: {
    fontSize: 13,
    color: '#888',
  },
  jobDescription: {
    fontSize: 14,
    color: '#333',
  },
  requestButton: {
    backgroundColor: '#28a745',
    paddingVertical: 14,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  requestButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalIcon: {
    fontSize: 40,
    color: '#ffca28',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  modalText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  // callOptions: {
  //   marginTop: 15,
  //   width: '100%',
  // },
  // callOption: {
  //   paddingVertical: 10,
  //   alignItems: 'center',
  //   borderBottomWidth: 1,
  //   borderColor: '#e0e0e0',
  // },
  callOptions: {
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
    textAlign: 'center'
  },
  callOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    borderRadius: 50, // To make it circular
    marginRight: 10,
  },
  modalNotice: {
    fontSize: 12,
    color: '#888',
    marginTop: 10,
  },
  sendRequestButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  sendRequestButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MentorDetails;
