import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useJuego } from '../context/JuegoContext';

export const EstadisticasJuego: React.FC = () => {
  const { partidasJugadas } = useJuego();

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Estadísticas del Juego</Text>
      <Text style={styles.texto}>Partidas jugadas: {partidasJugadas}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e6e6fa', 
    borderRadius: 8,
    width: '80%',
    alignSelf: 'center',
  },
  titulo: {
    color: '#4b0082', 
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  texto: {
    color: '#4b0082', 
    fontSize: 16,
    textAlign: 'center',
  },
});