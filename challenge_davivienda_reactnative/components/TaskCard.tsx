
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    <View style={styles.card}>
      <Text style={styles.title}>{task.title}</Text>
      {task.description ? (
        <Text style={styles.description}>{task.description}</Text>
      ) : null}
    </View>
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
  },
  description: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
});
