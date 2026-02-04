//import { NextResponse } from "next/server";
import { viajesData } from "@/src/data/data-viajes";

function filtrarViajePorId(id: string) {
  const { viajes } = viajesData;

  const viaje = viajes.find(viaje => viaje.id_viaje === id);
  return viaje || "No Existe un viaje con ese ID.";
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  const json = {
    viaje: filtrarViajePorId(id),
  };

  return new Response(JSON.stringify(json, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
