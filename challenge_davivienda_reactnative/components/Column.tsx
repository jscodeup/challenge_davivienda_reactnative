// Column.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DraxView } from 'react-native-drax';
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
  onDrop: (newStatus: string, task: Task) => void;
}

export default function Column({ title, tasks, onDrop }: Props) {
  return (
    <DraxView
      style={styles.draxContainer}
      receptive={true}
      onReceiveDragDrop={({ dragged: { payload } }) => onDrop(title, payload)}
      renderContent={() => (
        <View style={styles.column}>
          <Text style={styles.columnTitle}>{title}</Text>
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  draxContainer: {
    flex: 1,   // Se expande para ocupar el espacio disponible en el board
  },
  column: { 
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#fff',      // Fondo blanco para mantener uniformidad
    borderRadius: 5,
    minHeight: 400,               // Altura mínima fija para columnas sin elementos
  },
  columnTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10,
    color: '#333',
  },
});
