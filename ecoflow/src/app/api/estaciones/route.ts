//import { NextResponse } from "next/server";
import { estacionesData } from "@/src/data/data-estaciones";

export function GET() {
  return new Response(JSON.stringify(estacionesData, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
