
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryListView = ({ data, onSelectCategory }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Categories</Text>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelectCategory(item.category)}>
            <View style={styles.categoryContainer}>
              <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{item.category}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  sectionHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  categoryContainer: {
    marginRight: 10,
    alignItems: 'center',
    paddingStart:10
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  categoryName: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CategoryListView;
