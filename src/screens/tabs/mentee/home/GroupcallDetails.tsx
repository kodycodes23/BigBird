import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const CourseDetailsScreen = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  const handleJoinPress = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
        <Image source={require('@/assets/images/back.png')} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Group Call Details</Text>
        <TouchableOpacity onPress={handleFavoritePress}>
          <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={28} color={isFavorite ? '#2ab07c' : 'gray'} />
        </TouchableOpacity>
      </View>

      {/* Video Thumbnail */}
      <View style={styles.videoContainer}>
        <Image source={require('@/assets/images/groupvid.png')} style={styles.videoThumbnail} />
        <View style={styles.playButton}>
          <FontAwesome name="play-circle" size={50} color="white" />
        </View>
      </View>

      {/* Course Info */}
      <Text style={styles.courseTitle}>Step design sprint for beginner</Text>
      <View style={styles.tagContainer}>
        <View style={[styles.tag, { backgroundColor: '#cff4e0' }]}>
          <Text style={styles.tagText}>6 lessons</Text>
        </View>
        <View style={[styles.tag, { backgroundColor: '#d4ebff' }]}>
          <Text style={styles.tagText}>Design</Text>
        </View>
        <View style={[styles.tag, { backgroundColor: '#e9dbfc' }]}>
          <Text style={styles.tagText}>Free</Text>
        </View>
      </View>
      <Text style={styles.description}>
        In this course I'll show the step by step, day by day process to build better products, just as Google, Slack, KLM and many others do.
      </Text>

      {/* Profile */}
      <View style={styles.profileContainer}>
        <Image source={require('@/assets/images/avatar1.png')} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Laurel Seilha</Text>
          <Text style={styles.profileRole}>Product Designer</Text>
        </View>
        <View style={styles.extraInfo}>
          <Ionicons name="time-outline" size={18} color="gray" />
          <Text style={styles.timeText}>21m</Text>
        </View>
        <View style={styles.ebookBadge}>
          <Text style={styles.ebookText}>Free e-book</Text>
        </View>
      </View>

      {/* Next Lesson */}
      <View style={styles.lessonContainer}>
        <Ionicons name="play" size={20} color="#ff6e6e" />
        <Text style={styles.lessonTitle}>How to get feedback on their products in just 5 days</Text>
        <Text style={styles.lessonTime}>04:10m</Text>
      </View>

      {/* Join Button */}
      <TouchableOpacity style={styles.joinButton} onPress={handleJoinPress}>
        <Text style={styles.joinButtonText}>Join</Text>
      </TouchableOpacity>

      {/* Modal for Insufficient Funds */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <Pressable style={styles.modalOverlay} onPress={closeModal}>
          <View style={styles.modalContent}>
            <Ionicons name="warning-outline" size={40} color="#FFC107" />
            <Text style={styles.modalTitle}>Insufficient Funds</Text>
            <Text style={styles.modalText}>
              You don't have any funds left to Join this call. Please add credit to your account to continue.
            </Text>
            <TouchableOpacity style={styles.fundButton}>
              <Text style={styles.fundButtonText}>Fund</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  videoContainer: {
    position: 'relative',
    marginTop: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  videoThumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 20,
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tag: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: 'gray',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInfo: {
    marginLeft: 10,
    flex: 1,
  },
  profileName: {
    fontWeight: '700',
  },
  profileRole: {
    fontSize: 12,
    color: 'gray',
  },
  extraInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  timeText: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 5,
  },
  ebookBadge: {
    backgroundColor: '#ffe9d6',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginLeft: 10,
  },
  ebookText: {
    fontSize: 12,
    color: '#ff8c00',
    fontWeight: '600',
  },
  lessonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  lessonTitle: {
    flex: 1,
    marginLeft: 10,
    fontWeight: '500',
  },
  lessonTime: {
    color: 'gray',
    fontSize: 12,
  },
  joinButton: {
    backgroundColor: '#2ab07c',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  joinButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 10,
  },
  modalText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginVertical: 10,
  },
  backButton: {
    width: 30, // Adjust the width to your preference
    height: 30, // Adjust the height to your preference
    position: 'absolute', // This makes the back button appear on the left
    left: 10, // Adjust the left position as needed
  },
  fundButton: {
    backgroundColor: '#2ab07c',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 15,
  },
  fundButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default CourseDetailsScreen;
