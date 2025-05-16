import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MensajeJuegoProps {
  mensaje: string;
}

export const MensajeJuego: React.FC<MensajeJuegoProps> = ({ mensaje }) => {
  if (!mensaje) return null;

  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>{mensaje}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#e6e6fa', 
    borderRadius: 5,
  },
  texto: {
    color: '#4b0082', 
    fontSize: 16,
    textAlign: 'center',
  },
});