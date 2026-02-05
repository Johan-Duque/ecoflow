import { typeViaje, typeEstacion } from "../models/interfaces";
import { calcularDistancia } from "../core";

interface RutasProps {
  viajes: typeViaje[];
  coordenadasUsuario: [number, number];
  estaciones: typeEstacion[];
}

export function Rutas({ viajes, coordenadasUsuario, estaciones }: RutasProps) {
  function obtenerDistanciaEstacion(estacion: string) {
    for (const est of estaciones) {
      if (est.zona === estacion) {
        const dist = calcularDistancia(
          est.ubicacion[0],
          est.ubicacion[1],
          coordenadasUsuario[0],
          coordenadasUsuario[1],
        );
        return `A ${dist.toFixed(2)} KM`;
      }
    }

    return "A 60KM";
  }

  return (
    <div className="flex flex-col gap-6">
      {viajes.map((viaje) => (
        <div
          key={viaje.id_viaje}
          className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
        >
          <div className="flex justify-between mb-4 items-center border-b border-slate-50 pb-3">
            <span className="text-xs font-bold py-1 px-2 bg-emerald-50 text-emerald-700 rounded uppercase">
              {viaje.ruta_asignada}
            </span>
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <p className="text-sm font-semibold text-slate-700">
              Origen: {viaje.detalles.punto_inicio}
            </p>
            <p className="text-sm font-semibold text-slate-700">
              Destino: {viaje.detalles.punto_destino}
            </p>
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              BUSES MAS CERCANOS
            </p>

            <div className="space-y-2">
              {viaje.detalles.buses_asignados.map((bus) => (
                <div
                  key={bus.id}
                  className="flex justify-between items-center p-2 rounded-lg bg-slate-50 border border-slate-100 hover:bg-emerald-50 transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-emerald-900">
                      {bus.hora_de_salida}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Unidad: {bus.id}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {bus.placa}
                    </span>
                    {bus.distancia !== undefined && (
                      <span
                        className={`text-[10px] font-bold mt-1 ${bus.distancia < 2 ? "text-green-600 animate-pulse" : "text-blue-600"}`}
                      >
                        📍 a {bus.distancia.toFixed(2)} km{" "}
                        {bus.distancia < 1 && "(¡Muy cerca!)"}
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-xs font-bold ${bus.bateria < 20 ? "text-red-500" : "text-emerald-600"}`}
                    >
                      {bus.bateria}% Bat
                    </div>
                    <span
                      className={`text-[10px] italic ${bus.estado === "En ruta" ? "text-blue-500" : "text-slate-400"}`}
                    >
                      {bus.estado}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Seccion de scooters */}
            {viaje.detalles.scooters_asignados &&
              viaje.detalles.scooters_asignados.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Scooters Disponibles{" "}
                    {obtenerDistanciaEstacion(viaje.ruta_asignada)}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {viaje.detalles.scooters_asignados.map((scooter) => (
                      <div
                        key={scooter.id}
                        className={`p-2 rounded-lg border transition-colors ${
                          scooter.disponible
                            ? "bg-emerald-50 border-emerald-100 hover:border-emerald-300"
                            : "bg-red-50 border-red-100 hover:border-red-300"
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span
                            className={`text-[10px] font-bold ${scooter.disponible ? "text-emerald-800" : "text-red-800"}`}
                          >
                            {scooter.id}
                          </span>
                          <div
                            className={`text-[10px] font-bold ${scooter.bateria < 20 ? "text-red-500" : "text-emerald-600"}`}
                          >
                            {scooter.bateria}%
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-[9px] text-slate-400 font-mono">
                            {scooter.placa}
                          </div>
                          <div className="flex items-center gap-1">
                            <span
                              className={`text-[8px] font-bold uppercase ${scooter.disponible ? "text-emerald-600" : "text-red-500"}`}
                            >
                              {scooter.disponible
                                ? "Disponible"
                                : "No disponible"}
                            </span>
                            <div
                              className={`w-2 h-2 rounded-full ${scooter.disponible ? "bg-emerald-500 animate-pulse" : "bg-red-500"}`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      ))}
    </div>
  );
}
