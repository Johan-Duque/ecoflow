import { fetchDataBase } from "@/src/database/fetchDataBase";
import { typeEstacion } from "@/src/models/interfaces";

async function filtrarEstacionPorId(id: string) {
  const data: typeEstacion[] = await fetchDataBase("estaciones"); 

  if (!data) return null;

  const estacion = data.find((est) => est.id === id);
  return estacion || null;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  const info = await filtrarEstacionPorId(id);

  if (info === null) {
    return new Response(
      JSON.stringify(
        { message: "Estación no encontrada! | error 404" },
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
