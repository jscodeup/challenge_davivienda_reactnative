import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Column from './Column';

interface Task {
  id: string;
  title: string;
  description?: string;
  status: string;
}

//Texto de estados
/* Por Hacer = Tareas que se encuentran asiganadas en espera de gestion
En Progreso = Tareas que se estan impactando
Listo= Tareas Finalizadas*/

const initialTasks: Task[] = [
  { id: '1', title: 'Conectar base de datos Firebase', description: 'Crear conexión para almacenar la información de la tareas', status: 'Por Hacer' },
  { id: '2', title: 'Funcionalidad de arrastrar tarjetas', description: 'Implementar libreria necesaria para poder arrastrar tarjetas entre estados', status: 'En Progreso' },
  { id: '3', title: 'Estructura Pantalla Inicial', description: 'Crear las clases necesarias para gestion de columnas y tarjetas de cada tarea', status: 'Listo' },
];

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toDoTasks = tasks.filter((t) => t.status === 'Por Hacer');
  const inProgressTasks = tasks.filter((t) => t.status === 'En Progreso');
  const doneTasks = tasks.filter((t) => t.status === 'Listo');

  return (
    <ScrollView horizontal contentContainerStyle={styles.board}>
      <Column title="Por Hacer" tasks={toDoTasks} />
      <Column title="En Progreso" tasks={inProgressTasks} />
      <Column title="Listo" tasks={doneTasks} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  board: {
    flexGrow: 1,
    padding: 10,
  },
});
