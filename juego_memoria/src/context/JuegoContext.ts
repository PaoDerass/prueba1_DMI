import { createContext } from 'react';

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