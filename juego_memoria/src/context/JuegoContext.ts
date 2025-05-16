import { createContext, useContext } from 'react';

interface ContextoJuegoType {
  cartas: string[];
  cartasVolteadas: number[];
  cartasEmparejadas: number[];
  juegoIniciado: boolean;
  partidasJugadas: number;
  mensaje: string;
  iniciarJuego: () => void;
  voltearCarta: (index: number) => void;
  reiniciarJuego: () => void;
}

export const ContextoJuego = createContext<ContextoJuegoType>({
  cartas: [],
  cartasVolteadas: [],
  cartasEmparejadas: [],
  juegoIniciado: false,
  partidasJugadas: 0,
  mensaje: '',
  iniciarJuego: () => {},
  voltearCarta: () => {},
  reiniciarJuego: () => {},
});

export const useJuego = () => {
  const context = useContext(ContextoJuego);
  if (!context) {
    throw new Error('useJuego debe usarse dentro de un ProveedorJuego');
  }
  return context;
};