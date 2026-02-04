import { zonas } from "../models/enums";

export const vehiculosData = {
  vehiculos: {
    autobuses: [
      // ZONA 1: Pueblo Nuevo
      {
        id: "BUS-01",
        placa: "70AA1AK",
        estado: "En ruta",
        ruta: zonas.zona_1,
        hora_de_salida: "07:00 AM",
        ubicacion: [7.756179, -72.229026],
        bateria: 80,
      },
      {
        id: "BUS-02",
        placa: "70AA2BK",
        estado: "En espera",
        ruta: zonas.zona_1,
        hora_de_salida: "07:30 AM",
        ubicacion: [7.755934, -72.232288],
        bateria: 92,
      },
      {
        id: "BUS-03",
        placa: "70AA3CK",
        estado: "En mantenimiento",
        ruta: zonas.zona_1,
        hora_de_salida: "08:00 AM",
        ubicacion: [7.758007, -72.229883],
        bateria: 15, // Patología: Carga crítica detectada [cite: 31, 33]
      },

      // ZONA 2: Barrio Obrero
      {
        id: "BUS-04",
        placa: "70AA4DK",
        estado: "En ruta",
        ruta: zonas.zona_2,
        hora_de_salida: "07:00 AM",
        ubicacion: [7.778, -72.224],
        bateria: 70,
      },
      {
        id: "BUS-05",
        placa: "70AA5EK",
        estado: "En espera",
        ruta: zonas.zona_2,
        hora_de_salida: "07:30 AM",
        ubicacion: [7.778, -72.224],
        bateria: 100,
      },
      {
        id: "BUS-06",
        placa: "70AA6FK",
        estado: "En espera",
        ruta: zonas.zona_2,
        hora_de_salida: "08:00 AM",
        ubicacion: [7.778, -72.224],
        bateria: 88,
      },

      // ZONA 3: La Machirí
      {
        id: "BUS-07",
        placa: "70AA7GK",
        estado: "En ruta",
        ruta: zonas.zona_3,
        hora_de_salida: "07:00 AM",
        ubicacion: [7.805, -72.195],
        bateria: 65,
      },
      {
        id: "BUS-08",
        placa: "70AA8HK",
        estado: "En espera",
        ruta: zonas.zona_3,
        hora_de_salida: "07:30 AM",
        ubicacion: [7.805, -72.195],
        bateria: 80,
      },
      {
        id: "BUS-09",
        placa: "70AA9IK",
        estado: "En espera",
        ruta: zonas.zona_3,
        hora_de_salida: "08:00 AM",
        ubicacion: [7.805, -72.195],
        bateria: 95,
      },

      // ZONA 4: La Concordia
      {
        id: "BUS-10",
        placa: "70AB1JK",
        estado: "En ruta",
        ruta: zonas.zona_4,
        hora_de_salida: "07:00 AM",
        ubicacion: [7.76, -72.234],
        bateria: 40,
      },
      {
        id: "BUS-11",
        placa: "70AB2KL",
        estado: "En espera",
        ruta: zonas.zona_4,
        hora_de_salida: "07:30 AM",
        ubicacion: [7.76, -72.234],
        bateria: 30,
      },
      {
        id: "BUS-12",
        placa: "70AB3MN",
        estado: "En espera",
        ruta: zonas.zona_4,
        hora_de_salida: "08:00 AM",
        ubicacion: [7.76, -72.234],
        bateria: 100,
      },

      // ZONA 5: El Centro
      {
        id: "BUS-13",
        placa: "70AC4OP",
        estado: "En ruta",
        ruta: zonas.zona_5,
        hora_de_salida: "07:00 AM",
        ubicacion: [7.768, -72.231],
        bateria: 55,
      },
      {
        id: "BUS-14",
        placa: "70AC5QR",
        estado: "En espera",
        ruta: zonas.zona_5,
        hora_de_salida: "07:30 AM",
        ubicacion: [7.768, -72.231],
        bateria: 90,
      },
      {
        id: "BUS-15",
        placa: "70AC6ST",
        estado: "En espera",
        ruta: zonas.zona_5,
        hora_de_salida: "08:00 AM",
        ubicacion: [7.768, -72.231],
        bateria: 85,
      },
    ],

    scooters: [
      {
        id: "SCT-01",
        placa: "SC-01",
        estacion: zonas.zona_1,
        bateria: 90,
        disponible: true,
      },
      {
        id: "SCT-02",
        placa: "SC-02",
        estacion: zonas.zona_1,
        bateria: 45,
        disponible: true,
      },
      {
        id: "SCT-03",
        placa: "SC-03",
        estacion: zonas.zona_1,
        bateria: 12,
        disponible: false,
      }, // Patología: Carga crítica
      {
        id: "SCT-04",
        placa: "SC-04",
        estacion: zonas.zona_1,
        bateria: 88,
        disponible: false,
      },
      {
        id: "SCT-05",
        placa: "SC-05",
        estacion: zonas.zona_1,
        bateria: 100,
        disponible: false,
      },

      // ESTACIÓN 2: Barrio Obrero
      {
        id: "SCT-06",
        placa: "SC-06",
        estacion: zonas.zona_2,
        bateria: 75,
        disponible: true,
      },
      {
        id: "SCT-07",
        placa: "SC-07",
        estacion: zonas.zona_2,
        bateria: 60,
        disponible: true,
      },
      {
        id: "SCT-08",
        placa: "SC-08",
        estacion: zonas.zona_2,
        bateria: 30,
        disponible: true,
      },
      {
        id: "SCT-09",
        placa: "SC-09",
        estacion: zonas.zona_2,
        bateria: 55,
        disponible: true,
      },
      {
        id: "SCT-10",
        placa: "SC-10",
        estacion: zonas.zona_2,
        bateria: 98,
        disponible: false,
      },

      // ESTACIÓN 3: La Machirí
      {
        id: "SCT-11",
        placa: "SC-11",
        estacion: zonas.zona_3,
        bateria: 82,
        disponible: true,
      },
      {
        id: "SCT-12",
        placa: "SC-12",
        estacion: zonas.zona_3,
        bateria: 40,
        disponible: true,
      },
      {
        id: "SCT-13",
        placa: "SC-13",
        estacion: zonas.zona_3,
        bateria: 15,
        disponible: false,
      },
      {
        id: "SCT-14",
        placa: "SC-14",
        estacion: zonas.zona_3,
        bateria: 90,
        disponible: false,
      },
      {
        id: "SCT-15",
        placa: "SC-15",
        estacion: zonas.zona_3,
        bateria: 66,
        disponible: false,
      },

      // ESTACIÓN 4: La Concordia
      {
        id: "SCT-16",
        placa: "SC-16",
        estacion: zonas.zona_4,
        bateria: 100,
        disponible: true,
      },
      {
        id: "SCT-17",
        placa: "SC-17",
        estacion: zonas.zona_4,
        bateria: 85,
        disponible: true,
      },
      {
        id: "SCT-18",
        placa: "SC-18",
        estacion: zonas.zona_4,
        bateria: 20,
        disponible: true,
      },
      {
        id: "SCT-19",
        placa: "SC-19",
        estacion: zonas.zona_4,
        bateria: 50,
        disponible: true,
      },
      {
        id: "SCT-20",
        placa: "SC-20",
        estacion: zonas.zona_4,
        bateria: 77,
        disponible: false,
      },

      // ESTACIÓN 5: El Centro
      {
        id: "SCT-21",
        placa: "SC-21",
        estacion: zonas.zona_5,
        bateria: 95,
        disponible: true,
      },
      {
        id: "SCT-22",
        placa: "SC-22",
        estacion: zonas.zona_5,
        bateria: 42,
        disponible: true,
      },
      {
        id: "SCT-23",
        placa: "SC-23",
        estacion: zonas.zona_5,
        bateria: 88,
        disponible: false,
      },
      {
        id: "SCT-24",
        placa: "SC-24",
        estacion: zonas.zona_5,
        bateria: 33,
        disponible: false,
      },
      {
        id: "SCT-25",
        placa: "SC-25",
        estacion: zonas.zona_5,
        bateria: 100,
        disponible: false,
      },
    ],
  },
};
