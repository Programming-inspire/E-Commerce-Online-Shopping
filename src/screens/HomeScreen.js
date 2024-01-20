// HomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { FontAwesome } from '@expo/vector-icons';
import ImageCarousel from '../components/ImageCarousel';
import HomeProductData from '../data/HomeProductData'; 
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../components/UserContext';

const HomeScreen = () => {

const navigation = useNavigation();
const {user} = useUser();

const navigateToProductDetail = (product) => {
   navigation.navigate('PDP',{product});
};


  return (
    <>
     <Header />
    <ScrollView style={{backgroundColor:'white'}}>
      <View style={styles.greeting}>
        <FontAwesome name="handshake-o" size={26} color="black" />
        <Text style={{ left: 10, fontWeight: '800', fontSize: 18 }}>Welcome {user.name}</Text>
      </View>


     <View style={styles.products}>
     <ImageCarousel />
      {/* Top Mobile Brands */}
      <View style={styles.scrollableView}>
        <Text style={styles.heading}>Top Mobile Brands</Text>
        <FlatList
          horizontal
          data={HomeProductData.filter((item) => item.category === 'Mobile')}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToProductDetail(item)}>
            <View style={styles.productContainer}>
              <Image source={{ uri: item.imageUrl }} style={styles.productImage} resizeMode='contain'/>
              <Text style={styles.productName}>{item.imageName}</Text>
            </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      {/* Top TV Brands */}
      <View style={styles.scrollableView}>
        <Text style={styles.heading}>Top TV Brands</Text>
        
        <FlatList
        showsHorizontalScrollIndicator={false}
          horizontal
          data={HomeProductData.filter((item) => item.category === 'TV')}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToProductDetail(item)}>
            <View style={styles.productContainer}>
              <Image source={{ uri: item.imageUrl }} style={styles.productImage} resizeMode="cover" />
              <Text style={styles.productName}>{item.imageName}</Text>
            </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  greeting: {
    flexDirection: 'row',
    padding: 20,
   
  },
  scrollableView: {
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  productContainer: {
    marginRight: 15,
    padding:5
  },
  productImage: {
    width: 200,
    height: 130,
    borderRadius: 8,
  },
  productName: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
  
});

export default HomeScreen;
