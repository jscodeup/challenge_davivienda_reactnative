// KanbanBoard.tsx
import React, { useState } from 'react';
import { Modal, StyleSheet, View, Button } from 'react-native';
import Column from './Column';
import TaskDetail, { Task } from './TaskDetail';
import { auth } from '../services/firebaseConfig';
import { signOut } from 'firebase/auth';


const initialTasks: Task[] = [
  { id: '1', title: 'Conectar base de datos Firebase', description: 'Crear conexión para almacenar la información de las tareas', status: 'Por Hacer' },
  { id: '2', title: 'Funcionalidad de arrastrar tarjetas', description: 'Implementar librería necesaria para poder arrastrar tarjetas entre estados', status: 'En Progreso' },
  { id: '3', title: 'Estructura Pantalla Inicial', description: 'Crear las clases necesarias para gestión de columnas y tarjetas de cada tarea', status: 'Listo' },
];

const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    console.error('Logout error:', error.message);
  }
};

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleDrop = (newStatus: string, draggedTask: Task) =>
    setTasks(prev =>
      prev.map(task =>
        task.id === draggedTask.id ? { ...task, status: newStatus } : task
      )
    );

  const handleSaveTask = (updatedTask: Task) => {
    setTasks(prev => prev.map(task => task.id === updatedTask.id ? updatedTask : task));
    setSelectedTask(null);
  };

  return (
    <View style={styles.container}>

      <Button title="Cerrar sesión" onPress={handleLogout} />
      <View style={styles.board}>
        {['Por Hacer', 'En Progreso', 'Listo'].map(status => (
          <Column
            key={status}
            title={status}
            tasks={tasks.filter(t => t.status === status)}
            onDrop={handleDrop}
            onTaskPress={(task: Task) => setSelectedTask(task)}
          />
        ))}
      </View>
      <Modal visible={!!selectedTask} animationType="slide">
        {selectedTask && (
          <TaskDetail task={selectedTask} onSave={handleSaveTask} />
        )}
        <Button title="Cerrar" onPress={() => setSelectedTask(null)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  board: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  },
});
