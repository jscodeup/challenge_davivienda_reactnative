import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DraxView } from 'react-native-drax';
import TaskCard from './TaskCard';

interface Task { id: string; title: string; description?: string; status: string }
interface Props {
  title: string;
  tasks: Task[];
  onDrop: (newStatus: string, task: Task) => void;
}

export default function Column({ title, tasks, onDrop }: Props) {
  return (
    <DraxView
      style={styles.column}
      receptive={true}
      onReceiveDragDrop={({ dragged: { payload } }) => onDrop(title, payload)}
    >
      <Text style={styles.columnTitle}>{title}</Text>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </DraxView>
  );
}

const styles = StyleSheet.create({
  column: { flex: 1, marginHorizontal: 5 },
  columnTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
});
