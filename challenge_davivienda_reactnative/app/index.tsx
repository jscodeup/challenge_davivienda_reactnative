import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import BoardScreen from '../components/KanbanBoard';
import LoginScreen from '../screens/LoginScreen';
import { auth } from '../services/firebaseConfig';
import { onAuthStateChanged, User } from 'firebase/auth';

export default function Home() {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Mientras se verifica el estado de autenticación mostramos un loader
  if (user === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  // Si el usuario está autenticado, se muestra el tablero; de lo contrario, se muestra el login
  return user ? <BoardScreen /> : <LoginScreen navigation={{ navigate: () => {} }} />;
}
