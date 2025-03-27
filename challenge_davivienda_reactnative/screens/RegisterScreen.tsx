import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../services/firebaseConfig';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = credential.user.uid;

      // Guarda el usuario en Firestore
      await setDoc(doc(firestore, 'users', uid), {
        email,
        createdAt: serverTimestamp(),
      });

      Alert.alert('¡Registro exitoso!', 'Tu cuenta ha sido creada.');
      router.replace('/login');
    } catch (error: any) {
      Alert.alert('Error en el registro', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Registrarse" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 12,
  },
});
