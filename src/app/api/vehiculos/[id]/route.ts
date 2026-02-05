import { fetchDataBase } from "@/src/database/fetchDataBase";
import { typeBus, typeScooter } from "@/src/models/interfaces";

interface typeVehiculos {
    autobuses: [typeBus],
    scooters: [typeScooter]
}

async function filtrarVehiculoPorId(id: string) {

  const data: typeVehiculos = await fetchDataBase("vehiculos");

  const { autobuses, scooters } = data;

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
  const info = await filtrarVehiculoPorId(id);

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
