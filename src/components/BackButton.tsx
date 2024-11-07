// import { Pressable } from 'react-native';
// import React from 'react';
// import { useNavigation } from '@react-navigation/native';
// import BackArrow from '../../assets/svg/backarrow.svg'; // Importing the SVG as a component

// const BackButton = () => {
//   const navigation = useNavigation();

//   return (
//     <Pressable className='justify-start'
//       onPress={() => navigation.goBack()}

//     >
//       <BackArrow/>
//     </Pressable>
//   );
// };

// export default BackButton;
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import BackArrow from '../../assets/images/backarrow.png';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

const BackButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        width: 24, // Adjust the width to your preference
        height: 24, // Adjust the height to your preference
        position: 'absolute', // This makes the back button appear on the left
        left: 10,
      }}
      onPress={() => navigation.goBack()}
    >
      {/* <BackArrow width={24} height={24} /> */}
      <Image source={require('@/assets/images/back.png')} />
    </TouchableOpacity>
  );
};

export default BackButton;
