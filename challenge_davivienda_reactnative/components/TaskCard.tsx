// TaskCard.tsx
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { DraxView } from 'react-native-drax';
import { Task } from './TaskDetail';

interface Props {
  task: Task;
  onPress: (task: Task) => void;
}

export default function TaskCard({ task, onPress }: Props) {
  return (
    <DraxView 
      payload={task} 
      renderContent={() => (
        <TouchableOpacity style={styles.card} onPress={() => onPress(task)}>
          <Text style={styles.title}>{task.title}</Text>
          {task.description && <Text style={styles.description}>{task.description}</Text>}
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
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
    color: '#000',
  },
  description: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
});
