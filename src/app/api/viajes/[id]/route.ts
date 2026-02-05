import { fetchDataBase } from "@/src/database/fetchDataBase";
import { typeViaje } from "@/src/models/interfaces";

async function filtrarViajePorId(id: string) {
  const data: typeViaje[] = await fetchDataBase("viajes");

  const viaje = data.find(viaje => viaje.id_viaje === id);
  return viaje || null;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  const info = await filtrarViajePorId(id);

  if (info === null) {
    return new Response(
      JSON.stringify(
        { message: "Viaje no encontrado! | error 404" },
        null,
        2,
      ),
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
