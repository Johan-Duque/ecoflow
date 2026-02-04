import { zonas, nombresEstaciones } from "./enums";

export interface typeBus {
  id: string;
  placa: string;
  estado: string;
  ruta: string;
  hora_de_salida: string;
  ubicacion: [number, number];
  bateria: number;
  distancia?: number;
}

export interface typeScooter {
  id: string;
  placa: string;
  estacion: string;
  bateria: number;
  disponible: boolean;
}

export interface typeViaje {
  id_viaje: string;
  ruta_asignada: string;
  detalles: {
    punto_inicio: string;
    punto_destino: string;
    buses_asignados: typeBus[];
    scooters_asignados: typeScooter[];
  };
}

export interface typeEstacion {
  id: string; 
  nombre: nombresEstaciones; 
  zona: zonas;
  ubicacion: [number, number];
  
  energia: number; 
  estado: "operativa" | "mantenimiento" | "fuera de servicio"; 
  servicios: string[]; 
  vehiculos_actuales: number; 
}