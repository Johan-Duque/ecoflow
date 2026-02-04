import { typeViaje } from "@/src/models/interfaces";
import { estacionesData } from "../data/data-estaciones";
import { calcularDistancia } from "../core";

interface NavigatorProps {
  loading: boolean;
  userCoords: [number, number];
  clientTime: string;
  viajes: typeViaje[];
}

export function Navigator({
  loading,
  userCoords,
  clientTime,
  viajes,
}: NavigatorProps) {
  const busMasCercano =
    viajes.length > 0 && viajes[0].detalles.buses_asignados.length > 0
      ? viajes[0].detalles.buses_asignados[0]
      : null;

  const estacionesConDistancia = estacionesData.estaciones
    .map((estacion) => ({
      ...estacion,
      distancia: calcularDistancia(
        userCoords[0],
        userCoords[1],
        estacion.ubicacion[0],
        estacion.ubicacion[1],
      ),
    }))
    .sort((a, b) => a.distancia - b.distancia);

  const estacionMasCercana = estacionesConDistancia[0];

  const scootersEstacionCercana =
    viajes
      .find((v) => v.ruta_asignada === estacionMasCercana?.zona)
      ?.detalles.scooters_asignados.filter((s) => s.disponible) || [];

  return (
    <div className="sticky top-0 z-50 bg-slate-50/95 backdrop-blur-md border-b border-slate-200 shadow-sm px-4 pt-4 pb-3">
      <header className="text-center py-3 border border-slate-100 bg-white rounded-2xl shadow-sm mb-3">
        <h1 className="text-2xl font-extrabold text-emerald-800 tracking-tight">
          EcoFlow
        </h1>
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-1">
          San Cristobal • Tachira
        </p>
      </header>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center px-1">
          <h2 className="text-lg font-bold text-slate-800">Próximas Salidas</h2>
          {loading && (
            <span className="text-xs text-emerald-600 font-medium animate-pulse">
              Actualizando...
            </span>
          )}
        </div>

        {/* Sección de mejor Opción */}
        {!loading && (
          <div className="bg-white border-l-4 border-emerald-500 rounded-lg shadow-sm p-3 animate-fade-in-up border border-slate-100">
            {/* Header con ubicacion y hora */}
            <div className="mb-2 border-b border-slate-100 pb-2 flex gap-2">
              <div className="w-[60%] flex items-center justify-between bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                <span className="text-[9px] font-bold text-slate-500">
                  📍 Ubicación
                </span>
                <span className="text-[9px] font-mono text-slate-700 font-bold">
                  [{userCoords[0].toFixed(3)}, {userCoords[1].toFixed(3)}]
                </span>
              </div>
              <div className="w-[40%] flex items-center justify-between bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                <span className="text-[9px] font-bold text-slate-500">
                  🕒 Hora
                </span>
                <span className="text-[9px] font-mono text-slate-700 font-bold">
                  {clientTime}
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-2 items-stretch">
              {/* Bus mas cercano */}
              <div className="w-1/2">
                {busMasCercano ? (
                  <div className="h-full bg-blue-50/50 p-2 rounded-lg border border-blue-100 flex flex-col justify-between">
                    <div>
                      <span className="text-blue-700 font-bold text-[9px] uppercase tracking-wider block mb-1">
                        🚌 Bus MAS CERCANO: [ {busMasCercano.id} ]
                      </span>

                      {busMasCercano.distancia !== undefined && (
                        <span className="text-blue-900 font-bold text-[10px] mt-1">
                          ✔️ Está a {busMasCercano.distancia.toFixed(2)} km
                        </span>
                      )}

                      <div className="flex justify-between items-center">
                        <div
                          className={`text-[9px] font-bold ${
                            busMasCercano.bateria < 20
                              ? "text-red-500"
                              : "text-blue-900"
                          }`}
                        >
                          ✔️ {busMasCercano.bateria}% de energía
                        </div>

                        <span className="font-bold text-emerald-600 text-sm leading-tight">
                          {busMasCercano.hora_de_salida}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center bg-slate-50 rounded-lg border border-dashed border-slate-200 p-2">
                    <span className="text-slate-400 italic text-[9px]">
                      Buscando bus...
                    </span>
                  </div>
                )}
              </div>

              {/* Estacion y scooters mas cercanos */}
              <div className="w-1/2">
                {estacionMasCercana ? (
                  <div className="h-full bg-blue-50/50 p-2 rounded-lg border border-blue-100 flex flex-col justify-between">
                    <div className="mb-1">
                      <span className="text-blue-700 font-bold text-[9px] uppercase tracking-wider block truncate">
                        🛴 Estación - {estacionMasCercana.zona}
                      </span>
                      <span className="font-bold text-blue-900 text-[10px] leading-tight block truncate mt-2">
                        ✔️ {estacionMasCercana.nombre}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {scootersEstacionCercana.length > 0 ? (
                        scootersEstacionCercana.slice(0, 4).map((scooter) => (
                          <div
                            key={scooter.id}
                            className="flex items-center gap-1 bg-white border border-blue-100 rounded px-1 py-0.5"
                          >
                            <span className="text-[7px] font-bold text-blue-800">
                              {scooter.id.split("-")[1]}
                            </span>
                            <span
                              className={`text-[8px] font-bold ${scooter.bateria < 20 ? "text-red-500" : "text-emerald-600"}`}
                            >
                              {scooter.bateria}%
                            </span>
                          </div>
                        ))
                      ) : (
                        <span className="text-[8px] text-red-500 font-bold">
                          Sin unidades
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center bg-slate-50 rounded-lg border border-dashed border-slate-200 p-2">
                    <span className="text-slate-400 italic text-[9px]">
                      Buscando estación...
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
