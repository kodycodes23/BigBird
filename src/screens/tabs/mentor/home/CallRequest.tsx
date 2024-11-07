2
import React, { useState } from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, FlatList, ImageSourcePropType } from 'react-native';
import mentorImage from '@/assets/images/mentor2.png';
import mentorImage2 from '@/assets/images/mentor.png';
import BackButton from '@/src/components/BackButton';


type CallRequest = {
  id: number;
  name: string;
  avatar: ImageSourcePropType;
  accepted: boolean;
};

const data: CallRequest[] = [
  { id: 1, name: 'Janvi Purav', avatar: mentorImage, accepted: false },
  { id: 2, name: 'Janvi Purav', avatar: mentorImage2, accepted: false },
  { id: 3, name: 'Janvi Purav', avatar: mentorImage2, accepted: false },
  { id: 4, name: 'Janvi Purav', avatar: mentorImage2, accepted: false },
  { id: 5, name: 'Janvi Purav', avatar: mentorImage, accepted: false },
];

export default function CallRequestScreen() {
  const [requests, setRequests] = useState(data);

  const handleAccept = (id: number) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, accepted: true } : request
      )
    );
  };

  const renderItem = ({ item }: { item: CallRequest }) => (
    <View style={styles.requestContainer}>
      <Image source={item.avatar} style={styles.avatar} />
      <Text style={styles.name}>{item.name}</Text>
      {item.accepted ? (
        <TouchableOpacity style={styles.callButton}>
          <Text style={styles.callButtonText}>Call</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.acceptButton}
            onPress={() => handleAccept(item.id)}
          >
            <Text style={styles.acceptButtonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busyButton}>
            <Text style={styles.busyButtonText}>Busy Call</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <BackButton/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Call Request</Text>
      </View>

      {/* Call Requests List */}
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    padding: 8,
    marginRight: 16,
  },
  backButtonText: {
    fontSize: 24,
    color: '#000000',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  requestContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  acceptButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  busyButton: {
    backgroundColor: '#F44336',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  busyButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  callButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  callButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
