# 🌿 EcoFlow - Dashboard de Movilidad Inteligente

**EcoFlow** es una plataforma diseñada para optimizar la movilidad urbana en la ciudad de San Cristóbal, Táchira. El proyecto permite a los ciudadanos visualizar en tiempo real la disponibilidad de transporte eco-amigable, como buses eléctricos y scooters, además de monitorear estaciones de carga solar.

## 🚀 ¿Cómo funciona el proyecto?

La aplicación funciona como un centro de control personal para el usuario, basándose en tres pilares fundamentales:

### 1. Ubicación y Tiempo Real//import { NextResponse } from "next/server";
import { vehiculosData } from "@/src/data/data-vehiculos";

function filtrarVehiculoPorId(id: string) {
  const { autobuses, scooters } = vehiculosData.vehiculos;

  const vehiculo =
    autobuses.find((autobus) => autobus.id === id) ||
    scooters.find((scooter) => scooter.id === id);
  return vehiculo || null;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;
  const info = filtrarVehiculoPorId(id);

  if (info === null) {
    return new Response(
      JSON.stringify({ message: "Vehículo no encontrado! | error 404" }, null, 2),
      {
        status: 404,
      },
    );
  } else {
    return new Response(JSON.stringify(info, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

El sistema utiliza coordenadas predefinidas del usuario y la hora actual para calcular qué opciones de transporte están más cerca. En la parte superior (**Navigator**), siempre verás:
- Tu ubicación actual (simulada).
- El **Bus más cercano** con su hora de salida y nivel de batería.
- La **Estación de carga más cercana** con los scooters disponibles en ese momento.

### 2. Modos de Visualización
Puedes alternar entre dos vistas principales:
- **Ver Rutas**: Muestra los viajes programados, puntos de inicio/destino, y una lista detallada de los buses asignados. También incluye scooters disponibles para tramos cortos (micromovilidad).
- **Ver Estaciones**: Muestra las estaciones de carga de la ciudad, indicando su nivel de **energía solar** y si tienen reservas bajas.

### 3. Sincronización de Datos
El proyecto utiliza una API interna construida con Next.js que simula el flujo de datos de la ciudad. La lógica de cálculo de distancias y filtrado de vehículos se encuentra centralizada en la carpeta `core`, asegurando que el dashboard siempre muestre la información más relevante primero.

## 🛠️ Estructura Técnica Simplificada

- **Frontend**: Construido con **Next.js** y **React**, utilizando **Tailwind CSS** para un diseño moderno y responsive.
- **Componentes**: El código está dividido en piezas pequeñas (Navigator, Rutas, Estaciones) para que sea fácil de mantener.
- **Lógica Central (Core)**: Todas las operaciones matemáticas y de obtención de datos están separadas de la interfaz visual.
- **Modelos**: Definiciones claras de qué es un "Bus", una "Estación" o un "Viaje" para evitar errores en el código.

## 🏁 Cómo empezar

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---
*Desarrollado para una San Cristóbal más inteligente y sostenible.*
