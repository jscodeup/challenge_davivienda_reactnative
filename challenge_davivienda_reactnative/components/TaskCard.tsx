// TaskCard.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DraxView } from 'react-native-drax';

interface Task {
  id: string;
  title: string;
  description?: string;
  status: string;
}

interface Props {
  task: Task;
}

export default function TaskCard({ task }: Props) {
  return (
    <DraxView payload={task} renderContent={() => (
      <View style={styles.card}>
        <Text style={styles.title}>{task.title}</Text>
        {task.description && <Text style={styles.description}>{task.description}</Text>}
      </View>
    )} />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',  // Fondo blanco para la tarjeta
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',  // Texto oscuro para que se lea sobre fondo blanco
  },
  description: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
});
