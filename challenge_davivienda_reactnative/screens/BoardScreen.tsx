import React from 'react';
import { View, StyleSheet } from 'react-native';
import KanbanBoard from '../components/KanbanBoard';

export default function BoardScreen() {
  return (
    <View style={styles.container}>
      <KanbanBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});