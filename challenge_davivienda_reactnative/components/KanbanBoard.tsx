// KanbanBoard.tsx
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Column from './Column';

interface Task { 
  id: string; 
  title: string; 
  description?: string; 
  status: string; 
}

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
    <View style={styles.container}>
      <View style={styles.board}>
        {['Por Hacer', 'En Progreso', 'Listo'].map(status => (
          <Column
            key={status}
            title={status}
            tasks={tasks.filter(t => t.status === status)}
            onDrop={handleDrop}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff',  // Fondo blanco uniforme
    padding: 10,
  },
  board: { 
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-evenly',  // Espacio equitativo entre columnas
    alignItems: 'stretch',           // Forzamos que las columnas se estiren a toda la altura del board
  },
});
