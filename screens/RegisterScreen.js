import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Xử lý đăng ký
        alert(`Register with Email: ${email}, Password: ${password}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Register" onPress={handleRegister} />
            <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>
                Already have an account? Login here.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 32, marginBottom: 20, textAlign: 'center' },
    input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 },
    loginText: { textAlign: 'center', marginTop: 20, color: 'blue' },
});

export default RegisterScreen;
