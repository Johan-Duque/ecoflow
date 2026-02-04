//import { NextResponse } from "next/server";
import { vehiculosData } from "@/src/data/data-vehiculos";

export function GET() {
  return new Response(JSON.stringify(vehiculosData, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
