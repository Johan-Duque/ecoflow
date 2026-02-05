import { fetchDataBase } from "@/src/database/fetchDataBase";

export async function GET() {
  return new Response(JSON.stringify(await fetchDataBase("vehiculos"), null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

