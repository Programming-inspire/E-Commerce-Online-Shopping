import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import Header from '../components/Header';
import { useUser } from '../components/UserContext';

const AccountScreen = () => {
  const navigation = useNavigation();
  const { user } = useUser();
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    if (profilePicture) {
      console.log('Profile Picture:', profilePicture);
    }
  }, [profilePicture]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (!result.cancelled) {
        setProfilePicture(result.uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Auth')}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>

        <View style={styles.profileContainer}>
          {profilePicture ? (
            <Image source={{ uri: profilePicture }} style={styles.profileImage} />
          ) : (
            <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
              <Text style={styles.uploadButtonText}>Upload Profile Picture</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Name: {user.name}</Text>
          <Text style={styles.infoText}>Email: {user.email}</Text>
          <Text style={styles.infoText}>Mobile Number: {user.phone}</Text>
        </View>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  editButtonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  profileContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    backgroundColor: '#CCCCCC',
    marginBottom: 20,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  uploadButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButtonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  infoContainer: {
    width: '100%',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AccountScreen;
