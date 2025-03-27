import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Column from './Column';

interface Task { id: string; title: string; description?: string; status: string }


const initialTasks: Task[] = [
  { id: '1', title: 'Conectar base de datos Firebase', description: 'Crear conexión para almacenar la información de las tareas', status: 'Por Hacer' },
  { id: '2', title: 'Funcionalidad de arrastrar tarjetas', description: 'Implementar librería necesaria para poder arrastrar tarjetas entre estados', status: 'En Progreso' },
  { id: '3', title: 'Estructura Pantalla Inicial', description: 'Crear las clases necesarias para gestión de columnas y tarjetas de cada tarea', status: 'Listo' },
];

export default function KanbanBoard() {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
  
    const handleDrop = (newStatus: string, draggedTask: Task) =>
      setTasks(prev =>
        prev.map(task =>
          task.id === draggedTask.id ? { ...task, status: newStatus } : task
        )
      );
  
    return (
      <ScrollView horizontal contentContainerStyle={styles.board}>
        {['Por Hacer', 'En Progreso', 'Listo'].map(status => (
          <Column
            key={status}
            title={status}
            tasks={tasks.filter(t => t.status === status)}
            onDrop={handleDrop}
          />
        ))}
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    board: { flexGrow: 1, padding: 10 },
  });