//import { NextResponse } from "next/server";
import { vehiculosData } from "@/src/data/data-vehiculos";

function filtrarVehiculoPorId(id: string) {
  const { autobuses, scooters } = vehiculosData.vehiculos;

  const vehiculo = autobuses.find(autobus => autobus.id === id) || scooters.find(scooter => scooter.id === id);
  return vehiculo || "No Existe un vehículo con ese ID.";
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  const json = {
    vehiculo: filtrarVehiculoPorId(id),
  };

  return new Response(JSON.stringify(json, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
