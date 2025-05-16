import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Carta } from './carta';
import { useJuego } from '../context/JuegoContext';
import { MensajeJuego } from './mensaje';

export const TableroJuego: React.FC = () => {
  const {
    cartas,
    cartasVolteadas,
    cartasEmparejadas,
    juegoIniciado,
    iniciarJuego,
    voltearCarta,
    reiniciarJuego,
    mensaje,
  } = useJuego();

  return (
    <View style={styles.contenedor}>
      {!juegoIniciado ? (
        <Button title="Iniciar a jugar" onPress={iniciarJuego} color="#9c64a6" />
      ) : (
        <>
          <View style={styles.tablero}>
            {cartas.map((valor, indice) => (
              <Carta
                key={indice}
                valor={valor}
                volteada={cartasVolteadas.includes(indice)}
                emparejada={cartasEmparejadas.includes(indice)}
                onPress={() => voltearCarta(indice)}
              />
            ))}
          </View>
          <MensajeJuego mensaje={mensaje} />
          <Button title="Reiniciar juego" onPress={reiniciarJuego} color="#9c64a6" />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f0fa',
  },
  tablero: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
});