import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  View,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');

  const solveQuadraticEquation = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);
    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
      setResult('Vui lòng nhập các giá trị hợp lệ.');
      return;
    }

    const delta = numB * numB - 4 * numA * numC;
    if (delta < 0) {
      setResult('Phương trình vô nghiệm.');
    } else if (delta === 0) {
      const x = -numB / (2 * numA);
      setResult(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
      const x1 = (-numB + Math.sqrt(delta)) / (2 * numA);
      const x2 = (-numB - Math.sqrt(delta)) / (2 * numA);
      setResult(`Phương trình có hai nghiệm: x1 = ${x1}, x2 = ${x2}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Giải phương trình bậc 2</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập giá trị a"
          keyboardType="numeric"
          value={a}
          onChangeText={setA}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập giá trị b"
          keyboardType="numeric"
          value={b}
          onChangeText={setB}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập giá trị c"
          keyboardType="numeric"
          value={c}
          onChangeText={setC}
        />
      </View>
      <Button title="Giải" onPress={solveQuadraticEquation} />
      {result !== '' && <Text style={styles.result}>{result}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;
