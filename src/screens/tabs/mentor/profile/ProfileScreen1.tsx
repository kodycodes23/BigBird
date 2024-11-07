import React, { useState } from 'react';
import {
  View, Text, Image, TextInput, Modal,
  TouchableOpacity, ScrollView, StyleSheet
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface ExperienceEntryProps {
  title: string;
  company: string;
  EmploymentType: string;
  period: string;
  location: string;
  Description: string;
  onEdit?: () => void;
}

interface EducationEntryProps {
  school: string;
  degree: string;
  FieldOfStudy: string;
  period: string;
  Grade: string;
  Description: string;
  onEdit?: () => void;
}

export default function Profile() {
  const [aboutModalVisible, setAboutModalVisible] = useState(false);
  const [experienceModalVisible, setExperienceModalVisible] = useState(false);
  const [educationModalVisible, setEducationModalVisible] = useState(false);
  const [aboutMe, setAboutMe] = useState("I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world.");
  const [experiences, setExperiences] = useState([
    {
      title: "Product Designer",
      company: "Twitter",
      EmploymentType: "Full-Time",
      location: "Manchester, UK",
      period: "Jun 2019 - Present",
      Description: "Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.",
    },
    {
      title: "Growth Marketing Designer",
      company: "GoDaddy",
      EmploymentType: "Full-Time",
      location: "Manchester, UK",
      period: "Jun 2011 - May 2018",
      Description: "Developed digital marketing strategies, activation plans, proposals, contests and promotions for client initiatives",
    },
  ]);
  const navigation = useNavigation();
  const [educations, setEducations] = useState([
    {
      school: "Harvard University",
      degree: "Postgraduate",
      FieldOfStudy: "Applied Psychology",
      period: "2010 - 2012",
      Grade: "Second Class Upper",
      Description: "As an Applied Psychologist in the field of Consumer and Society, I am specialized in creating business opportunities by observing, analysing, researching and changing behaviour.",
    },
  ]);

  const openExperienceModal = (exp: ExperienceEntryProps) => {
    setExperienceModalVisible(true);
  };

  const openEducationModal = (edu: EducationEntryProps) => {
    setEducationModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('@/assets/images/back.png')} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.title}>My Profile</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image source={require('@/assets/images/avatar.png')} style={styles.avatar} />
        <Text style={styles.name}>Danny Alexs</Text>
        <Text style={styles.occupation}>Social Media at Twitter</Text>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={16} color="#4a4a4a" />
          <Text style={styles.locationText}>Manchester, UK</Text>
        </View>
      </View>

      {/* About Me Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <TouchableOpacity onPress={() => setAboutModalVisible(true)}>
            <Image source={require('@/assets/images/edit.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionContent}>{aboutMe}</Text>
      </View>
      <Separator />

      {/* Experiences Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Experiences</Text>
          <TouchableOpacity onPress={() => setExperienceModalVisible(true)}>
            <Image source={require('@/assets/images/addnew.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        {experiences.map((exp, index) => (
  <View key={index}>
    <ExperienceEntry
      {...exp}
      onEdit={() => openExperienceModal(exp)} // Add onEdit here
    />
    <Separator/>
          </View>
        ))}
        <TouchableOpacity>
          <Text style={styles.showMoreText}>Show 3 more experiences</Text>
        </TouchableOpacity>
        <Separator />
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Education</Text>
          <TouchableOpacity onPress={() => setEducationModalVisible(true)}>
            <Image source={require('@/assets/images/addnew.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        {educations.map((edu, index) => (
          <View key={index}>
            <EducationEntry {...edu} onEdit={() => openEducationModal(edu)} />
            <Separator />
          </View>
        ))}
        <TouchableOpacity>
          <Text style={styles.showMoreText}>Show 2 more educations</Text>
        </TouchableOpacity>
        <Separator />
      </View>

      {/* Modals */}
      <AboutMeModal visible={aboutModalVisible} onClose={() => setAboutModalVisible(false)} onSave={setAboutMe} />
      <ExperienceModal visible={experienceModalVisible} onClose={() => setExperienceModalVisible(false)} onSave={(newExp) => setExperiences([...experiences, newExp])} />
      <EducationModal visible={educationModalVisible} onClose={() => setEducationModalVisible(false)} onSave={(newEdu) => setEducations([...educations, newEdu])} />
    </ScrollView>
  );
}

/** Components for Entries **/

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({ title, company, location, period, Description, EmploymentType, onEdit }) => (
  <View style={styles.entryContainer}>
    <Text style={styles.entryTitle}>{title}</Text>
    <Text style={styles.entryDetails}>{company} ・ {EmploymentType}</Text>
    <Text style={styles.entryLocation}>{period}</Text>
    <Text style={styles.entryLocation}>{location}</Text>
    <Text style={styles.entryDescription}>{Description}</Text>
    <TouchableOpacity style={styles.editIcon} onPress={onEdit} >
      <Image source={require('@/assets/images/edit.png')} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

const EducationEntry: React.FC<EducationEntryProps> = ({ school, degree, period, FieldOfStudy, Grade, Description, onEdit }) => (
  <View style={styles.entryContainer}>
    <Text style={styles.entryTitle}>{school}</Text>
    <Text style={styles.entryDetails}>{degree}, {FieldOfStudy}</Text>
    <Text style={styles.entryPeriod}>{period}</Text>
    <Text style={styles.entryPeriod}>{Description}</Text>
    <TouchableOpacity style={styles.editIcon} onPress={onEdit}  >
      <Image source={require('@/assets/images/edit.png')} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

/** Modal Components **/

const AboutMeModal: React.FC<{ visible: boolean, onClose: () => void, onSave: (text: string) => void }> = ({ visible, onClose, onSave }) => {
  const [text, setText] = useState('');

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>About Me</Text>
        <TextInput style={styles.textArea} placeholder="Describe yourself..." value={text} onChangeText={setText} multiline />
        <TouchableOpacity onPress={() => { onSave(text); onClose(); }}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const ExperienceModal: React.FC<{ visible: boolean, onClose: () => void, onSave: (newExperience: ExperienceEntryProps) => void }> = ({ visible, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');
  const [isCurrent, setIsCurrent] = useState(false);

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Modal Header */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Add experience</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          {/* ScrollView for content */}
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {/* Title */}
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle} />

            {/* Employment Type */}
            <Text style={styles.label}>Employment Type</Text>
            <Picker
              selectedValue={employmentType}
              onValueChange={(value) => setEmploymentType(value)}
              style={styles.picker}
            >
              <Picker.Item label="Select" value="" />
              <Picker.Item label="Full-Time" value="Full-Time" />
              <Picker.Item label="Part-Time" value="Part-Time" />
              <Picker.Item label="Contract" value="Contract" />
              <Picker.Item label="Internship" value="Internship" />
            </Picker>

            {/* Company */}
            <Text style={styles.label}>Company or Organization</Text>
            <TextInput style={styles.input} value={company} onChangeText={setCompany} />

            {/* Current Role Checkbox */}
            <View style={styles.checkboxContainer}>
              <TouchableOpacity onPress={() => setIsCurrent(!isCurrent)}>
                <Ionicons
                  name={isCurrent ? "checkbox-outline" : "square-outline"}
                  size={20}
                  color="#6200EE"
                />
              </TouchableOpacity>
              <Text style={styles.checkboxLabel}>I am currently working in this role</Text>
            </View>

            {/* Start Date */}
            <Text style={styles.label}>Start Date</Text>
            <View style={styles.dateContainer}>
              <Picker
                selectedValue={startMonth}
                onValueChange={(value) => setStartMonth(value)}
                style={[styles.picker, styles.datePicker]}
              >
                <Picker.Item label="Month" value="" />
                <Picker.Item label="January" value="January" />
                <Picker.Item label="February" value="February" />
                {/* Add more months as needed */}
              </Picker>

              <Picker
                selectedValue={startYear}
                onValueChange={(value) => setStartYear(value)}
                style={[styles.picker, styles.datePicker]}
              >
                <Picker.Item label="Year" value="" />
                <Picker.Item label="2023" value="2023" />
                <Picker.Item label="2022" value="2022" />
                {/* Add more years as needed */}
              </Picker>
            </View>

            {/* End Date */}
            {!isCurrent && (
              <>
                <Text style={styles.label}>End Date</Text>
                <View style={styles.dateContainer}>
                  <Picker
                    selectedValue={endMonth}
                    onValueChange={(value) => setEndMonth(value)}
                    style={[styles.picker, styles.datePicker]}
                  >
                    <Picker.Item label="Month" value="" />
                    <Picker.Item label="January" value="January" />
                    <Picker.Item label="February" value="February" />
                    {/* Add more months as needed */}
                  </Picker>

                  <Picker
                    selectedValue={endYear}
                    onValueChange={(value) => setEndYear(value)}
                    style={[styles.picker, styles.datePicker]}
                  >
                    <Picker.Item label="Year" value="" />
                    <Picker.Item label="2023" value="2023" />
                    <Picker.Item label="2022" value="2022" />
                    {/* Add more years as needed */}
                  </Picker>
                </View>
              </>
            )}

            {/* Location */}
            <Text style={styles.label}>Location</Text>
            <TextInput style={styles.input} value={location} onChangeText={setLocation} />

            {/* Description */}
            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.textArea} value={description} onChangeText={setDescription} multiline />

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton} onPress={() => {
              onSave({
                title,
                company,
                EmploymentType: employmentType,
                period: `${startMonth} ${startYear} - ${isCurrent ? "Present" : `${endMonth} ${endYear}`}`,
                location,
                Description: description,
                onEdit: () => {}
              });
              onClose();
            }}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};




const EducationModal: React.FC<{ visible: boolean, onClose: () => void, onSave: (newEducation: EducationEntryProps) => void }> = ({ visible, onClose, onSave }) => {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [FieldOfStudy, setFieldOfStudy] = useState('');
  const [Grade, setGrade] = useState('');
  const [description, setDescription] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');
  const [isCurrent, setIsCurrent] = useState(false);

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Modal Header */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Add Education</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          {/* ScrollView for content */}
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {/* Title */}
            <Text style={styles.label}>School</Text>
            <TextInput style={styles.input} value={school} onChangeText={setSchool} />

            {/* Employment Type */}
            <Text style={styles.label}>Degree</Text>
            <TextInput style={styles.input} value={degree} onChangeText={setDegree} />

            {/* Company */}
            <Text style={styles.label}>Field Of Study</Text>
            <TextInput style={styles.input} value={FieldOfStudy} onChangeText={setFieldOfStudy} />

            {/* Current Role Checkbox */}
            <View style={styles.checkboxContainer}>
              <TouchableOpacity onPress={() => setIsCurrent(!isCurrent)}>
                <Ionicons
                  name={isCurrent ? "checkbox-outline" : "square-outline"}
                  size={20}
                  color="#6200EE"
                />
              </TouchableOpacity>
              <Text style={styles.checkboxLabel}>I am currently working in this role</Text>
            </View>

            {/* Start Date */}
            <Text style={styles.label}>Start Date</Text>
            <View style={styles.dateContainer}>
              <Picker
                selectedValue={startMonth}
                onValueChange={(value) => setStartMonth(value)}
                style={[styles.picker, styles.datePicker]}
              >
                <Picker.Item label="Month" value="" />
                <Picker.Item label="January" value="January" />
                <Picker.Item label="February" value="February" />
                {/* Add more months as needed */}
              </Picker>

              <Picker
                selectedValue={startYear}
                onValueChange={(value) => setStartYear(value)}
                style={[styles.picker, styles.datePicker]}
              >
                <Picker.Item label="Year" value="" />
                <Picker.Item label="2023" value="2023" />
                <Picker.Item label="2022" value="2022" />
                {/* Add more years as needed */}
              </Picker>
            </View>

            {/* End Date */}
            {!isCurrent && (
              <>
                <Text style={styles.label}>End Date</Text>
                <View style={styles.dateContainer}>
                  <Picker
                    selectedValue={endMonth}
                    onValueChange={(value) => setEndMonth(value)}
                    style={[styles.picker, styles.datePicker]}
                  >
                    <Picker.Item label="Month" value="" />
                    <Picker.Item label="January" value="January" />
                    <Picker.Item label="February" value="February" />
                    {/* Add more months as needed */}
                  </Picker>

                  <Picker
                    selectedValue={endYear}
                    onValueChange={(value) => setEndYear(value)}
                    style={[styles.picker, styles.datePicker]}
                  >
                    <Picker.Item label="Year" value="" />
                    <Picker.Item label="2023" value="2023" />
                    <Picker.Item label="2022" value="2022" />
                    {/* Add more years as needed */}
                  </Picker>
                </View>
              </>
            )}

            {/* Location */}
            <Text style={styles.label}>Grade</Text>
            <TextInput style={styles.input} value={Grade} onChangeText={setGrade} />

            {/* Description */}
            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.textArea} value={description} onChangeText={setDescription} multiline />

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton} onPress={() => {
              onSave({
                school,
                degree,
                FieldOfStudy,
                period: `${startMonth} ${startYear} - ${isCurrent ? "Present" : `${endMonth} ${endYear}`}`,
                Grade,
                Description: description
              });
              onClose();
            }}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

/** Additional Components **/

const Separator = () => <View style={styles.separator} />;

/** Styles **/

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '85%', // Reduced width to make the modal more compact
    maxHeight: '90%', // Added max height to avoid long modal
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  scrollViewContent: {
    paddingBottom: 20, // Adds some space at the bottom for the content
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#333',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  datePicker: {
    flex: 1,
    marginRight: 5,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    height: 80,
    textAlignVertical: 'top',
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: '#6200EE',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: { flex: 1, padding: 20, backgroundColor: '#f8f8f8' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centering the title
    padding: 10,
  },
  backButton: {
    width: 24, // Adjust the width to your preference
    height: 24, // Adjust the height to your preference
    position: 'absolute', // This makes the back button appear on the left
    left: 10, // Adjust the left position as needed
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    flex: 1, // Makes the title take up available space and centers it
  },
  profileSection: { alignItems: 'center', marginBottom: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 8 },
  name: { fontSize: 18, fontWeight: 'bold' },
  occupation: { fontSize: 14, color: '#666' },
  locationContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  locationText: { marginLeft: 4, color: '#4a4a4a' },
  section: { marginBottom: 20 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold' },
  sectionContent: { fontSize: 14, color: '#333' },
  entryPeriod: { color: '#777', fontSize: 14 },
  showMoreText: { color: '#34C759', marginTop: 5, justifyContent: 'center',  textAlign: 'center'},
  entryContainer: { marginBottom: 15 },
  entryTitle: { fontWeight: 'bold', fontSize: 15 },
  entryDetails: { fontSize: 14, color: '#555' },
  entryLocation: { color: '#777' },
  entryDescription: { color: '#00000' },
  editIcon: { position: 'absolute', top: 5, right: 5 },
  icon: { width: 20, height: 20 },
  // modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  // modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#fff' },
  // textArea: { width: '80%', height: 100, backgroundColor: '#fff', padding: 10, borderRadius: 5, textAlignVertical: 'top' },
  // input: { width: '80%', padding: 10, backgroundColor: '#fff', borderRadius: 5, marginBottom: 10 },
  // saveButton: { color: '#007bff', fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 8,
  },
});
