import { zonas } from "../models/enums";
import { vehiculosData } from "./data-vehiculos";

function obtenerBuses(zona: string) {
  const busesEnZona = [];

  for (const bus of vehiculosData.vehiculos.autobuses) {
    if (bus.ruta === zona) {
      busesEnZona.push(bus);
    }
  }

  return busesEnZona;
}

function obtenerScooters(zona: string) {
  const scootersEnZona = [];

  for (const scooter of vehiculosData.vehiculos.scooters) {
    if (scooter.estacion === zona) {
      scootersEnZona.push(scooter);
    }
  }

  return scootersEnZona;
}

export const viajesData = {
  viajes: [
    {
      id_viaje: "VIAJE-01",
      ruta_asignada: zonas.zona_1,
      detalles: {
        punto_inicio: "Polideportivo de Pueblo Nuevo",
        punto_destino: "Obelisco de los Italianos",
        buses_asignados: [...obtenerBuses(zonas.zona_1)],
        scooters_asignados: [...obtenerScooters(zonas.zona_1)],
      },
    },
    {
      id_viaje: "VIAJE-02",
      ruta_asignada: zonas.zona_2,
      detalles: {
        punto_inicio: "Obelisco de los Italianos",
        punto_destino: "El Terminal de Pasajeros",
        buses_asignados: [...obtenerBuses(zonas.zona_2)],
        scooters_asignados: [...obtenerScooters(zonas.zona_2)],
      },
    },
    {
      id_viaje: "VIAJE-03",
      ruta_asignada: zonas.zona_3,
      detalles: {
        punto_inicio: "La Machirí",
        punto_destino: "La Universidad Nacional Experimental del Táchira",
        buses_asignados: [...obtenerBuses(zonas.zona_3)],
        scooters_asignados: [...obtenerScooters(zonas.zona_3)],
      },
    },
    {
      id_viaje: "VIAJE-04",
      ruta_asignada: zonas.zona_4,
      detalles: {
        punto_inicio: "Super ahorro La Concordia",
        punto_destino: "La Carabobo",
        buses_asignados: [...obtenerBuses(zonas.zona_4)],
        scooters_asignados: [...obtenerScooters(zonas.zona_4)],
      },
    },
    {
      id_viaje: "VIAJE-05",
      ruta_asignada: zonas.zona_5,
      detalles: {
        punto_inicio: "Centro Civico",
        punto_destino: "Estadio cubierto de San Cristóbal",
        buses_asignados: [...obtenerBuses(zonas.zona_5)],
        scooters_asignados: [...obtenerScooters(zonas.zona_5)],
      },
    },
  ],
};
