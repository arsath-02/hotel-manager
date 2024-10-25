// src/components/FoodScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

// Sample data for food items
const foodItems = [
  { id: '1', name: 'Butter Chicken', price: 250, type: 'Indian', imageUrl: './images/butterchicken.jpg' },
  { id: '2', name: 'Paneer Tikka', price: 200, type: 'Indian', imageUrl: 'https://example.com/paneer_tikka.jpg' },
  { id: '3', name: 'Chow Mein', price: 150, type: 'Chinese', imageUrl: 'https://example.com/chow_mein.jpg' },
  { id: '4', name: 'Spring Rolls', price: 120, type: 'Chinese', imageUrl: 'https://example.com/spring_rolls.jpg' },
  { id: '5', name: 'Pizza', price: 300, type: 'Italian', imageUrl: 'https://example.com/pizza.jpg' },
  { id: '6', name: 'Pasta', price: 220, type: 'Italian', imageUrl: 'https://example.com/pasta.jpg' },
  { id: '7', name: 'Tacos', price: 180, type: 'Mexican', imageUrl: 'https://example.com/tacos.jpg' },
  { id: '8', name: 'Burritos', price: 220, type: 'Mexican', imageUrl: 'https://example.com/burritos.jpg' },
  { id: '9', name: 'Sushi', price: 350, type: 'Japanese', imageUrl: 'https://example.com/sushi.jpg' },
  { id: '10', name: 'Ramen', price: 250, type: 'Japanese', imageUrl: 'https://example.com/ramen.jpg' },
  { id: '11', name: 'Shawarma', price: 180, type: 'Mediterranean', imageUrl: 'https://example.com/shawarma.jpg' },
  { id: '12', name: 'Falafel', price: 160, type: 'Mediterranean', imageUrl: 'https://example.com/falafel.jpg' },
  { id: '13', name: 'Burger', price: 220, type: 'American', imageUrl: 'https://example.com/burger.jpg' },
  { id: '14', name: 'Steak', price: 400, type: 'American', imageUrl: 'https://example.com/steak.jpg' },
];

// Expanded categories for food types
const foodCategories = ['All', 'Indian', 'Chinese', 'Italian', 'Mexican', 'Japanese', 'Mediterranean', 'American'];

const FoodScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Function to filter food items based on selected category
  const filteredFoodItems = selectedCategory === 'All'
    ? foodItems
    : foodItems.filter(item => item.type === selectedCategory);

  // Function to render each food item
  const renderFoodItem = ({ item }) => {
    return (
      <View style={styles.foodItemContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.foodImage} />
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodPrice}>Price: ₹{item.price}</Text>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      {/* Render food categories */}
      <View style={styles.categoryContainer}>
        {foodCategories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Render filtered food items */}
      <FlatList
        data={filteredFoodItems}
        renderItem={renderFoodItem}
        keyExtractor={item => item.id}
        numColumns={2} // To display food items in grid format
        contentContainerStyle={styles.foodList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'orange',
    padding: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap', // Wraps the categories into multiple rows
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#FFA500',
    margin: 5,
  },
  selectedCategoryButton: {
    backgroundColor: 'green',
  },
  categoryText: {
    color: '#000',
    fontWeight: 'bold',
  },
  foodList: {
    paddingBottom: 20,
  },
  foodItemContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    elevation: 3, // Add shadow to food item container
  },
  foodImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  foodPrice: {
    fontSize: 14,
    color: '#4caf50',
    marginBottom: 10,
  },
  orderButton: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default FoodScreen;
