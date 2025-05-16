import React, { useState } from 'react';
import { ContextoJuego } from './JuegoContext';

const paresCartas = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];

export const ProveedorJuego: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartas, setCartas] = useState<string[]>([]);
  const [cartasVolteadas, setCartasVolteadas] = useState<number[]>([]);
  const [cartasEmparejadas, setCartasEmparejadas] = useState<number[]>([]);
  const [juegoIniciado, setJuegoIniciado] = useState(false);
  const [partidasJugadas, setPartidasJugadas] = useState(0);
  const [mensaje, setMensaje] = useState('');

  const iniciarJuego = () => {
    const cartasMezcladas = [...paresCartas].sort(() => Math.random() - 0.5);
    setCartas(cartasMezcladas);
    setCartasVolteadas([]);
    setCartasEmparejadas([]);
    setJuegoIniciado(true);
    setMensaje('');
    setPartidasJugadas(prev => prev + 1);
  };

  const reiniciarJuego = () => {
    setCartas([]);
    setCartasVolteadas([]);
    setCartasEmparejadas([]);
    setJuegoIniciado(false);
    setMensaje('');
  };

  const voltearCarta = (indice: number) => {
    
    if (cartasVolteadas.includes(indice)) return;
    if (cartasEmparejadas.includes(indice)) return;

    const nuevasVolteadas = [...cartasVolteadas, indice];
    setCartasVolteadas(nuevasVolteadas);

    if (nuevasVolteadas.length === 2) {
      const [primera, segunda] = nuevasVolteadas;
      
      if (cartas[primera] === cartas[segunda]) {
        setCartasEmparejadas([...cartasEmparejadas, primera, segunda]);
        setCartasVolteadas([]);
        setMensaje('Haz encontrado un Par!');
        
        if (cartasEmparejadas.length + 2 === cartas.length) {
          setMensaje('Haz Ganado el Juego!');
        }
      } else {
     setMensaje('No son iguales, vuelve a intentarlo');
        setTimeout(() => {
          setCartasVolteadas([]);
        }, 1000);
      }
    }
  };

  return (
    <ContextoJuego.Provider
      value={{
        cartas,
        cartasVolteadas,
        cartasEmparejadas,
        juegoIniciado,
        partidasJugadas,
        mensaje,
        iniciarJuego,
        voltearCarta,
        reiniciarJuego,
      }}
    >
      {children}
    </ContextoJuego.Provider>
  );
};