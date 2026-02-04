import { typeViaje } from "../models/interfaces";
import { calcularDistancia } from "./calcularDistancia";

export function calcularVehiculosCercanos(
  viajes: typeViaje[],
  userCoords: [number, number],
) {
  const viajesProcesados = viajes.map((viaje) => {
    const busesConDistancia = viaje.detalles.buses_asignados.map((bus) => ({
      ...bus,
      distancia: calcularDistancia(
        userCoords[0],
        userCoords[1],
        bus.ubicacion[0],
        bus.ubicacion[1],
      ),
    }));

    busesConDistancia.sort((a, b) => (a.distancia || 0) - (b.distancia || 0));

    return {
      ...viaje,
      detalles: { ...viaje.detalles, buses_asignados: busesConDistancia },
    };
  });

  viajesProcesados.sort((a, b) => {
    const minDistA = a.detalles.buses_asignados[0]?.distancia || Infinity;
    const minDistB = b.detalles.buses_asignados[0]?.distancia || Infinity;
    return minDistA - minDistB;
  });

  return viajesProcesados;
}