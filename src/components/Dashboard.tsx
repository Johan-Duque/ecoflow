"use client";

import { Navigator, Rutas, Estaciones } from "@/src/components/";
import { typeViaje, typeEstacion } from "@/src/models/interfaces";
import { useState, useEffect } from "react";
import { fetchData, calcularVehiculosCercanos } from "../core";
import { endpoints, datosUsuario } from "../models/enums";

// Datos iniciales del usuario
const USER_COORDS = datosUsuario.coordenadas.split(",").map(Number) as [number, number];
const CLIENT_TIME = datosUsuario.hora;

function Dashboard() {
  const [viajes, setViajes] = useState<typeViaje[]>([]);
  const [estaciones, setEstaciones] = useState<typeEstacion[]>([]);
  const [modoVista, setModoVista] = useState<"rutas" | "estaciones">("rutas");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Obtener datos de la API al cargar el componente
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [viajesRes, estacionesRes] = await Promise.all([
          fetchData<any>(endpoints.viajes),
          fetchData<any>(endpoints.estaciones),
        ]);

        if (!viajesRes && !estacionesRes) {
          throw new Error("No se pudo obtener respuesta de la API");
        }

        console.log("Viajes API Response:", viajesRes);
        console.log("Estaciones API Response:", estacionesRes);

        // Manejar viajes: puede venir como { viajes: [...] } o [...] directamente
        let viajesData: typeViaje[] = [];
        if (viajesRes) {
          if (Array.isArray(viajesRes)) {
            viajesData = viajesRes;
          } else if (viajesRes && typeof viajesRes === 'object' && 'viajes' in viajesRes && Array.isArray(viajesRes.viajes)) {
            viajesData = viajesRes.viajes;
          }
        }

        if (viajesData.length > 0) {
          const viajesConDistancia = calcularVehiculosCercanos(
            viajesData,
            USER_COORDS
          );
          setViajes(viajesConDistancia);
        } else if (viajesRes) {
          console.warn("La respuesta de viajes no contiene datos válidos:", viajesRes);
        }

        // Manejar estaciones: puede venir como { estaciones: [...] } o [...] directamente
        let estacionesData: typeEstacion[] = [];
        if (estacionesRes) {
          if (Array.isArray(estacionesRes)) {
            estacionesData = estacionesRes;
          } else if (estacionesRes && typeof estacionesRes === 'object' && 'estaciones' in estacionesRes && Array.isArray(estacionesRes.estaciones)) {
            estacionesData = estacionesRes.estaciones;
          }
        }

        if (estacionesData.length > 0) {
          setEstaciones(estacionesData);
        } else if (estacionesRes) {
          console.warn("La respuesta de estaciones no contiene datos válidos:", estacionesRes);
        }

      } catch (err) {
        console.error("Error cargando datos:", err);
        setError("Error al sincronizar con el servidor. Por favor, intente más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center font-sans">
      <div className="w-full max-w-md bg-slate-50 min-h-screen shadow-2xl relative">
        <Navigator
          loading={loading}
          userCoords={USER_COORDS}
          clientTime={CLIENT_TIME}
          viajes={viajes}
          estaciones={estaciones}
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
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20 px-6 text-center space-y-4">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-xl">⚠️</div>
              <p className="text-sm font-medium text-slate-600">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors uppercase tracking-wider"
              >
                Reintentar
              </button>
            </div>
          ) : (
            <>
              {modoVista === "rutas" ? (
                <Rutas
                  viajes={viajes}
                  coordenadasUsuario={USER_COORDS}
                  estaciones={estaciones}
                />
              ) : (
                <Estaciones estaciones={estaciones} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export { Dashboard };
