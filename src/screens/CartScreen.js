import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart } from '../components/CartContext';
import { MaterialIcons } from '@expo/vector-icons'; // Import the delete icon
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const { cartItems, totalAmount, removeFromCart, clearCart } = useCart();
  const navigation = useNavigation();

  const handleRemoveItem = (item) => {
    removeFromCart(item);
  };

  const handleBuy = () => {
    clearCart();
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => item.id.toString() + index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.imageName}</Text>
              <Text style={styles.itemPrice}>Price: ${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemoveItem(item)}>
              <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Amount: ${totalAmount}</Text>
        <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
          <Text style={styles.buyButtonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    paddingTop: 16,
    flexDirection:'row'
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: 'green',
    width:90,
    height:40,
    marginLeft:60
   
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    top:10,
    left:35
  },
});

export default CartScreen;
