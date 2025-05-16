import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ProveedorJuego } from './src/context/JuegoProveedor';
import { TableroJuego } from './src/components/tablero';
import { EstadisticasJuego } from './src/components/estadisticas';

export default function App() {
  return (
    <ProveedorJuego>
      <View style={styles.contenedor}>
        <TableroJuego />
        <EstadisticasJuego />
      </View>
    </ProveedorJuego>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f5f0fa', 
    padding: 20,
  },
});