import { typeEstacion } from "../models/interfaces";

interface EstacionesProps {
  estaciones: typeEstacion[];
}

export function Estaciones({ estaciones }: EstacionesProps) {
  return (
    <div className="space-y-4 pb-20">
      {estaciones.map((est) => (
        <div key={est.id} className="p-5 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-slate-800 text-lg">{est.nombre}</h3>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{est.zona}</p>
            </div>
            <span className={`text-xs px-3 py-1 rounded-full font-bold ${est.energia > 50 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
              {est.energia}% Solar
            </span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 mt-2 overflow-hidden">
            <div 
              className={`h-full rounded-full ${est.energia > 50 ? 'bg-green-500' : 'bg-orange-500'}`} 
              style={{ width: `${est.energia}%` }}
            ></div>
          </div>
          {est.energia < 30 && (
            <p className="mt-3 text-[10px] text-red-500 font-bold uppercase animate-pulse flex items-center gap-1">
              ⚠️ Baja reserva energética
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
