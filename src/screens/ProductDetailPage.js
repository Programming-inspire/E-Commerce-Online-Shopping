// ProductDetailPage.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { useCart } from '../components/CartContext';

const ProductDetailPage = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    console.log(`Added ${product.imageName} to the cart`);
  };

  return (
    <View style={{ flex: 1, bottom: 25 }}>
      <Header showBackButton />
      <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productContainer}>
        <Text style={styles.productName}>{product.imageName}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailHeading}>Announced:</Text>
          <Text style={styles.detailText}>{product.Announced}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailHeading}>Status:</Text>
          <Text style={styles.detailText}>{product.Status}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailHeading}>Dimensions:</Text>
          <Text style={styles.detailText}>{product.Dimensions}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailHeading}>Weight:</Text>
          <Text style={styles.detailText}>{product.Weight}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailHeading}>Build:</Text>
          <Text style={styles.detailText}>{product.Build}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailHeading}>SIM:</Text>
          <Text style={styles.detailText}>{product.SIM}</Text>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
  },
  addToCartText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 5,
    margin: 2,
  },
  detailText: {
    fontSize: 16,
    flex:1,
    flexWrap:'wrap'
  },
  detailHeading: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  productContainer:{
    padding:10
  }
});

export default ProductDetailPage;
