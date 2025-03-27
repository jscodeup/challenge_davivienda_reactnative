import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/'); 
    } catch (error: any) {
      Alert.alert('Error en Login', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} autoCapitalize="none"/>
      <TextInput placeholder="Contraseña" style={styles.input} secureTextEntry value={password} onChangeText={setPassword}/>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.linkText}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: 20,
      backgroundColor: '#fff',
    },
    title: { fontSize: 24, marginBottom: 20 },
    input: { width: '100%', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginVertical: 8 },
    button: { backgroundColor: '#007bff', padding: 12, borderRadius: 5, width: '100%', alignItems: 'center', marginVertical: 8 },
    buttonText: { color: '#fff', fontSize: 16 },
    linkText: { color: '#007bff', marginTop: 12 },
  });
