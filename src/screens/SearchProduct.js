// SearchProduct.js
import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import HomeProductData from '../data/HomeProductData';
import { useNavigation } from '@react-navigation/native';


const SearchProduct = ({ route }) => {
  const { searchTerm } = route.params;
  const navigation = useNavigation();

  // Filter products based on the search term
  const filteredProducts = HomeProductData.filter((item) =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigateToProductDetail = (product) => {
    // Navigate to the ProductDetailPage with the product information
    navigation.navigate('PDP', { product });
  };
 

  return (
    <View style={{height:'100%', bottom:25}}>
      <Header />
      <Text style={styles.heading}>Search Results for "{searchTerm}"</Text>

      {filteredProducts.length > 0 ? (
         
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToProductDetail(item)}>
            <View style={styles.productContainer}>
              <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.imageName}</Text>
                <View style={styles.detailsContainer}>
                  <Text style={styles.detailHeading}>{` \u2022 Announced :`}</Text>
                  <Text style={styles.detailText}>{item.Announced}</Text>
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.detailHeading}>{` \u2022 Status:`}</Text>
                  <Text style={styles.detailText}>{item.Status}</Text>
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.detailHeading}>{` \u2022 Dimensions:`}</Text>
                  <Text style={styles.detailText}>{item.Dimensions}</Text>
                </View>
              </View>
            </View>
            </TouchableOpacity>
          )}
        />
         
      ) : (
        <Text style={styles.noResults}>No products available for the search term.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  noResults: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  productContainer: {
    flexDirection: 'row',
    padding: 10,
    height: 200, // Adjust the height as needed
  },
  productImage: {
    width: 130,
    height: 180,
    resizeMode: 'contain',
    borderRadius: 5,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    padding: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 5,
    margin: 2,
  },
  detailHeading: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  detailText: {
    flex: 1,
    flexWrap: 'wrap',
  },
  sectionHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
});

export default SearchProduct;
