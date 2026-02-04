//import { NextResponse } from "next/server";
import { estacionesData } from "@/src/data/data-estaciones";

function filtrarEstacionPorId(id: string) {
  const { estaciones } = estacionesData;

  const estacion = estaciones.find(est => est.id === id);
  return estacion || "No Existe una estación con ese ID.";
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  const json = {
    estacion: filtrarEstacionPorId(id),
  };

  return new Response(JSON.stringify(json, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
