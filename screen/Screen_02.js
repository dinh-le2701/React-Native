import React, { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Screen_02({ navigation }) {
  const [data, setData] = useState([
    { key: '1', type: 'Vegetable', name: 'Apple', price: '28.00', image: require('../assets/Data/Image_101.png') },
    { key: '2', type: 'Vegetable', name: 'Pear', price: '28.00', image: require('../assets/Data/Image_102.png') },
    { key: '3', type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/Data/Image_103.png') },
    { key: '4', type: 'Vegetable', name: 'Broccoli', price: '28.00', image: require('../assets/Data/Image_105.png') },
    { key: '5', type: 'Vegetable', name: 'Carrot', price: '28.00', image: require('../assets/Data/Image_106.png') },
    { key: '6', type: 'Seafood', name: 'Salmon', price: '28.00', image: require('../assets/Data/Image_95.png') },
    { key: '7', type: 'Seafood', name: 'Shrimp', price: '28.00', image: require('../assets/Data/Image_95.png') },
    { key: '8', type: 'Drink', name: 'Juice', price: '28.00', image: require('../assets/Data/Image_96.png') },
    { key: '9', type: 'Drink', name: 'Soda', price: '28.00', image: require('../assets/Data/Image_96.png') },
  ]);

  const [type, setType] = useState('Vegetable');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter(
    item => item.type === type && item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView stickyHeaderIndices={[0]} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Screen_01')}>
          <Image source={require('../assets/Data/Image_183.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Screen_03')}>
          <Image source={require('../assets/Data/Image_182.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.buttonContainer}>
        {['Vegetable', 'Seafood', 'Drink'].map(itemType => (
          <TouchableOpacity
            key={itemType}
            style={[styles.categoryButton, type === itemType && styles.selectedButton]}
            onPress={() => setType(itemType)}>
            <Text style={styles.buttonText}>{itemType}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.orderSection}>
        <Text style={styles.orderText}>Order your favorite</Text>
        <TouchableOpacity onPress={() => setSearchQuery('')}>
          <Text style={styles.clearSearchText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Screen_03')}>
              <Image source={item.image} style={styles.itemImage} />
            </TouchableOpacity>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        )}
        numColumns={2}
        keyExtractor={item => item.key}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  icon: {
    width: 25,
    height: 25,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    width: '90%',
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 20,
    fontSize: 18,
    backgroundColor: '#fafafa',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  selectedButton: {
    backgroundColor: '#4caf50',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  orderSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  orderText: {
    fontSize: 25,
    color: '#4caf50',
  },
  clearSearchText: {
    fontSize: 18,
    color: '#f44336',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    margin: '2.5%',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 1,
  },
  itemImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});