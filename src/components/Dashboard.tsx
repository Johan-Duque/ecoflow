"use client";

import { Navigator, Rutas, Estaciones } from "@/src/components/";
import { estacionesData } from "@/src/data/data-estaciones";
import { typeViaje } from "@/src/models/interfaces";
import { useState, useEffect } from "react";
import { fetchData, calcularVehiculosCercanos } from "../core";
import { endpoints, datosUsuario } from "../models/enums";

// Datos iniciales del usuario
const USER_COORDS = datosUsuario.coordenadas.split(",").map(Number) as [number, number];
const CLIENT_TIME = datosUsuario.hora;

function Dashboard() {
  const [viajes, setViajes] = useState<typeViaje[]>([]);
  const [modoVista, setModoVista] = useState<"rutas" | "estaciones">("rutas");
  const [loading, setLoading] = useState(true);

  // Obtener datos de la API al cargar el componente
  useEffect(() => {

    const fetchViajes = async () => {
      setLoading(true);
      const response = await fetchData<{ viajes: typeViaje[] }>(
        endpoints.viajes,
      );

      if (response && response.viajes) {
        const viajesConDistancia = calcularVehiculosCercanos(
          response.viajes,
          USER_COORDS,
        );
        setViajes(viajesConDistancia);
      }

      setLoading(false);
    };

    fetchViajes();
    
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center font-sans">
      <div className="w-full max-w-md bg-slate-50 min-h-screen shadow-2xl relative">
       
        <Navigator
          loading={loading}
          userCoords={USER_COORDS}
          clientTime={CLIENT_TIME}
          viajes={viajes}
        />

        <div className="p-4 pt-4 space-y-4 pb-20">
         
          <div className="flex w-full bg-slate-100 p-1 rounded-xl shadow-sm border border-slate-200">

             {/* Opcion de modo "Ver rutas" o "Ver estaciones" */}
            <button
              onClick={() => setModoVista("rutas")}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all cursor-pointer ${
                modoVista === "rutas"
                  ? "bg-white text-emerald-700 shadow-sm"
                  : "text-slate-500"
              }`}
            >
              Ver rutas
            </button>

            <button
              onClick={() => setModoVista("estaciones")}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all cursor-pointer ${
                modoVista === "estaciones"
                  ? "bg-white text-emerald-700 shadow-sm"
                  : "text-slate-500"
              }`}
            >
              Ver estaciones
            </button>

          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-4 text-slate-400">
              <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
              <p className="text-sm font-medium">Sincronizando flujo...</p>
            </div>
          ) : (
            <>
              {modoVista === "rutas" ? (
                <Rutas viajes={viajes} coordenadasUsuario={USER_COORDS} />
              ) : (
                <Estaciones estaciones={estacionesData.estaciones} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export { Dashboard };
