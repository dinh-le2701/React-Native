import React, { useState } from 'react';
import { FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Screen_03({ navigation }) {
  const [data, setData] = useState([
    { key: '1', type: 'Vegetable', name: 'Apple', price: "28.00", image: require('../assets/Data/Image_101.png'), sl: 1 },
    { key: '2', type: 'Vegetable', name: 'Pear', price: "28.00", image: require('../assets/Data/Image_102.png'), sl: 2 },
    { key: '3', type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/Data/Image_103.png'), sl: 3 },
    { key: '4', type: 'Seafood', name: 'Seafood 1', price: '28.00', image: require('../assets/Data/Image_95.png'), sl: 1 },
    { key: '5', type: 'Drink', name: 'Drink 1', price: '28.00', image: require('../assets/Data/Image_96.png'), sl: 1 },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const totalAmount = data.reduce((total, item) => total + (parseFloat(item.price) * item.sl), 0);

  const handlePayment = () => {
    setModalVisible(true);
  };
  
  // const confirmPayment = () => {
  //   Alert.alert(
  //     "Confirm Payment",
  //     "Do you want to return to the main screen?",
  //     [
  //       { text: "Cancel", style: "cancel" },
  //       { text: "Confirm Payment", onPress: () => {
  //         setModalVisible(false);
  //         navigation.navigate("Screen_01"); // Chuyển về màn hình 1
  //       }}
  //     ]
  //   );
  // };
  const confirmPayment = () => {
    setModalVisible(false);
    navigation.navigate("Screen_01"); // Chuyển về màn hình 1
  }
  const updateQuantity = (key, delta) => {
    setData(prevData =>
      prevData.map(item =>
        item.key === key ? { ...item, sl: Math.max(1, item.sl + delta) } : item
      )
    );
  };

  return (
    <ScrollView stickyHeaderIndices={[0]} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Screen_02")}>
          <Image source={require('../assets/Data/Image_183.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>My Basket</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemPrice}>${item.price}</Text>
              <Text style={styles.itemName}>{item.name}</Text>
              <View style={styles.ratingContainer}>
                {[...Array(5)].map((_, index) => (
                  <Image key={index} source={require('../assets/Data/Image_180.png')} style={styles.starIcon} />
                ))}
              </View>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => updateQuantity(item.key, -1)}>
                <Image source={require('../assets/Data/Image_176.png')} style={styles.quantityButton} />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.sl}</Text>
              <TouchableOpacity onPress={() => updateQuantity(item.key, 1)}>
                <Image source={require('../assets/Data/Image_175.png')} style={styles.quantityButton} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Payment</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Invoice</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={styles.invoiceItem}>
                <Text>{item.name} (x{item.sl}) - ${parseFloat(item.price) * item.sl}</Text>
              </View>
            )}
          />
          <Text style={styles.modalTotal}>Total: ${totalAmount.toFixed(2)}</Text>
          <TouchableOpacity style={styles.button} onPress={confirmPayment} >
            <Text style={styles.buttonText}>Confirm Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
    elevation: 2,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  title: {
    fontSize: 25,
    color: 'green',
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  itemName: {
    fontSize: 18,
    color: 'silver',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  starIcon: {
    width: 15,
    height: 15,
    marginRight: 2,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 15,
    height: 15,
    marginHorizontal: 10,
  },
  quantityText: {
    fontSize: 15,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  totalText: {
    fontSize: 30,
  },
  totalAmount: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 40,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  invoiceItem: {
    marginVertical: 5,
  },
  modalTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  confirmButton: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
  },
  cancelButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
  },
});