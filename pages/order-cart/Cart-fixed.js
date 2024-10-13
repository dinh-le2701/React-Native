import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function CartScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Food cart</Text>

      {/* Spaghetti item */}
      <View style={styles.cartItem}>
        <Image source={{ uri: 'https://link-to-spaghetti-image' }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.itemName}>Spaghetti</Text>
          <Text style={styles.price}>$32.50</Text>
          <Text style={styles.customize}>Cheese  ✘  Petty  ✘</Text>
        </View>
        <View style={styles.quantity}>
          <Button title="-" />
          <Text>1</Text>
          <Button title="+" />
        </View>
        <TouchableOpacity>
          <Text style={styles.remove}>✘</Text>
        </TouchableOpacity>
      </View>

      {/* Pizza item */}
      <View style={styles.cartItem}>
        <Image source={{ uri: 'https://link-to-pizza-image' }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.itemName}>Pizza</Text>
          <Text style={styles.price}>$32.50</Text>
          <Text style={styles.customize}>Cheese  ✘  Petty  ✘</Text>
        </View>
        <View style={styles.quantity}>
          <Button title="-" />
          <Text>1</Text>
          <Button title="+" />
        </View>
        <TouchableOpacity>
          <Text style={styles.remove}>✘</Text>
        </TouchableOpacity>
      </View>

      {/* Promo Code */}
      <View style={styles.promoCode}>
        <TextInput placeholder="Promo Code" style={styles.promoInput} />
        <Button title="Apply" />
      </View>

      {/* Summary */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Cart total: $2565.00</Text>
        <Text style={styles.summaryText}>Tax: $25.65</Text>
        <Text style={styles.summaryText}>Delivery: $4.99</Text>
        <Text style={styles.summaryText}>Promo discount: - $0.00</Text>
        <Text style={styles.subtotal}>Subtotal: $2565.00</Text>
      </View>

      {/* Checkout button */}
      <Button title="Proceed to Checkout" color="#007BFF" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  cartItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 16 },
  details: { flex: 1 },
  itemName: { fontSize: 18, fontWeight: 'bold' },
  price: { color: '#007BFF' },
  customize: { fontSize: 14, color: '#888' },
  quantity: { flexDirection: 'row', alignItems: 'center', marginRight: 16 },
  remove: { color: '#FF0000', fontSize: 18 },
  promoCode: { flexDirection: 'row', marginBottom: 20, alignItems: 'center' },
  promoInput: { borderColor: '#ccc', borderWidth: 1, flex: 1, marginRight: 10, padding: 8 },
  summary: { marginBottom: 20 },
  summaryText: { fontSize: 16, marginBottom: 8 },
  subtotal: { fontSize: 18, fontWeight: 'bold' },
});
