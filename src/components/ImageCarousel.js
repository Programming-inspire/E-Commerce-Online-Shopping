
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import imageCarousalData from '../data/image_carousalData';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCarousalData.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const handlePaginationPress = (index) => {

    setCurrentIndex(index);
  };

  return (
    <View>
      <Image source={{ uri: imageCarousalData[currentIndex].imageUrl }} style={styles.image} resizeMode="cover" />

      <View style={styles.pagination}>
        {imageCarousalData.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handlePaginationPress(index)}>
            <View style={[styles.dot, index === currentIndex && styles.activeDot]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 370,
    height: 200,
    borderRadius: 8,
    resizeMode:'cover',
    left:10,
    top:20
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#008E97', 
  },
});

export default ImageCarousel;
