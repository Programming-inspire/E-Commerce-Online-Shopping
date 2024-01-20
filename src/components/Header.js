// Header.js

import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, TextInput, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useCart } from './CartContext';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();
  const { cartItems } = useCart();

  const handleSearch = () => {
    navigation.navigate('SearchScreen', { searchTerm });
  };

  const handleCartPress = () => {
    navigation.navigate('Cart');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={require('../assets/shoping_logo.jpeg')} style={styles.img} />

        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          onSubmitEditing={handleSearch}
        />

        <TouchableOpacity onPress={handleCartPress}>
          <View style={styles.cartIconContainer}>
            <MaterialCommunityIcons name="cart" size={30} color="black" />
            {cartItems.length > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartItems.length}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
  },
  img: {
    width: 95,
    height: 40,
    right: 30,
  },
  searchInput: {
    flex: 1,
    marginLeft: 5,
    paddingHorizontal: 5,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    color: 'black',
    right: 30,
    paddingStart: 10,
  },
  cartIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
    marginLeft: 5,
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;
