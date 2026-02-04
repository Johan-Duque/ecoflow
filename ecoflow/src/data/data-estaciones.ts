import { zonas, nombresEstaciones, coordenadasEstaciones } from "../models/enums"

export const estacionesData = {
  "estaciones": [
    {
      "id": "EST-01",
      "nombre": nombresEstaciones.estacion_1, 
      "zona" : zonas.zona_1,
      "ubicacion": coordenadasEstaciones.estacion_1.split(",").map(Number) as [number, number],
      "energia": 80,
      "estado": "operativa",
      "servicios": ["Carga Eléctrica", "Mantenimiento Express", "Zona Wifi"],
      "vehiculos_actuales": 5
    },
    {
      "id": "EST-02",
      "nombre": nombresEstaciones.estacion_2,
      "zona": zonas.zona_2,
      "ubicacion": coordenadasEstaciones.estacion_2.split(",").map(Number) as [number, number],
      "energia": 75,
      "estado": "operativa",
      "servicios": ["Carga Eléctrica", "Alquiler Directo"]
    },
    {
      "id": "EST-03",
      "nombre": nombresEstaciones.estacion_3, 
      "zona": zonas.zona_3,
      "ubicacion": coordenadasEstaciones.estacion_3.split(",").map(Number) as [number, number],
      "energia": 90,
      "estado": "operativa",
      "servicios": ["Carga Eléctrica", "Mantenimiento Express", "Zona Wifi"]
    },
    {
      "id": "EST-04",
      "nombre": nombresEstaciones.estacion_4, 
      "zona": zonas.zona_4,
      "ubicacion": coordenadasEstaciones.estacion_4.split(",").map(Number) as [number, number],
      "energia": 85,
      "estado": "operativa",
      "servicios": ["Carga Eléctrica", "Punto de Información"]
    },
    {
      "id": "EST-05",
      "nombre": nombresEstaciones.estacion_5,
      "zona": zonas.zona_5,
      "ubicacion": coordenadasEstaciones.estacion_5.split(",").map(Number) as [number, number],
      "energia": 85,
      "estado": "operativa",
      "servicios": ["Carga Eléctrica", "Punto de Información"]
    }
  ]
}