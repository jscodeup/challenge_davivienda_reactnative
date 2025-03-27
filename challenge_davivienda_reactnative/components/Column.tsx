import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskCard from './TaskCard';

interface Task {
  id: string;
  title: string;
  description?: string;
  status: string;
}

interface Props {
  title: string;
  tasks: Task[];
}

export default function Column({ title, tasks }: Props) {
  return (
    <View style={styles.column}>
      <Text style={styles.columnTitle}>{title}</Text>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    marginHorizontal: 5,
  },
  columnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
