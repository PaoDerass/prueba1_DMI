import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface CartaProps {
  valor: string;
  volteada: boolean;
  emparejada: boolean;
  onPress: () => void;
}

export const Carta: React.FC<CartaProps> = ({ valor, volteada, emparejada, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={volteada || emparejada}>
      <View style={[
        styles.carta,
        volteada || emparejada ? styles.cartaVolteada : styles.cartaNoVolteada,
        emparejada && styles.cartaEmparejada
      ]}>
        {(volteada || emparejada) && <Text style={styles.textoCarta}>{valor}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  carta: {
    width: 70,
    height: 100,
    margin: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartaNoVolteada: {
    backgroundColor: '#9c64a6', 
  },
  cartaVolteada: {
    backgroundColor: '#d8bfd8', 
  },
  cartaEmparejada: {
    backgroundColor: '#e6e6fa', 
  },
  textoCarta: {
    fontSize: 24,
    color: '#4b0082', 
    fontWeight: 'bold',
  },
});