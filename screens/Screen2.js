import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';  

const DATA = [
  { id: '1', name: 'Pinarello', price: '$1800', image: require('../assets/image_3.png') },
  { id: '2', name: 'Pina Mountain', price: '$1700', image: require('../assets/image_1.png') },
  { id: '3', name: 'Pina Bike', price: '$1500', image: require('../assets/image2.png') },
  { id: '4', name: 'Pinarello', price: '$1900', image: require('../assets/image_3.png') },
  { id: '5', name: 'Pinarello', price: '$2700', image: require('../assets/image_1.png') },
  { id: '6', name: 'Pinarello', price: '$1350', image: require('../assets/image2.png') },
];

const Screen2 = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => navigation.navigate('Screen3', { image: item.image })} 
    >
      <View style={styles.heartIconContainer}>
        <FontAwesome name="heart-o" size={24} color="gray" /> 
      </View>
      <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The world's Best Bike</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
          <Text style={[styles.filterText, styles.activeFilterText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
    width: 100,
    alignItems: 'center',
  },
  filterText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
  },
  activeFilter: {
    backgroundColor: '#fff',
  },
  activeFilterText: {
    color: 'red',
  },
  item: {
    backgroundColor: '#fdf7dd',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
    height: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heartIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  itemImage: {
    width: '100%',
    height: '60%',
    marginBottom: 10,
    backgroundColor: '#fdf7dd',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: 14,
    color: 'orange',
    textAlign: 'center',
  },
});

export default Screen2;
