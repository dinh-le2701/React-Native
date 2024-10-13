import React from 'react'
import { View, Text, StyleSheet } from 'react-native';


export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Food Cart</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },

  text: {
    fontSize: 25,
    color: "green",
    fontWeight: 700

  }
});