import React,{useState} from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import CategoryListView from '../components/CategoryListView';
import CategoryListData from '../data/CategoryList';
import HomeProductData from '../data/HomeProductData';
import { useNavigation } from '@react-navigation/native';

const ProductScreen = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigation = useNavigation();

  const onSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const navigateToProductDetail = (product) => {
    navigation.navigate('PDP', {product});
  }

  const renderProductItem = ({ item }) => {
    if(selectedCategory === 'All' || item.category === selectedCategory){
      return(
        <TouchableOpacity onPress={() =>navigateToProductDetail(item)}>
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
      )
    }
};

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <CategoryListView data={CategoryListData} onSelectCategory={onSelectCategory} />
      <Text style={styles.sectionHeading}>All Products</Text>

      <FlatList
        data={HomeProductData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
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

export default ProductScreen;
