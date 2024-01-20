// AuthScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../components/UserContext';

const AuthScreen = () => {
  const navigation = useNavigation();
  const {updateUser} = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmission = () => {
    if (!name || !email || !phone) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    updateUser({name, email, phone});

    // Redirect to the Home Page or the desired screen
    navigation.navigate('BottomTab');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.welcomeText}>Welcome to Best Buy</Text>

        <TextInput
          style={styles.inputBox}
          placeholder="Enter your Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Enter your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Enter your Mobile Number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmission}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  innerContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputBox: {
    width: '100%',
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AuthScreen;
