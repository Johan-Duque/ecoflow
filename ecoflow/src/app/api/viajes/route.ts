//import { NextResponse } from "next/server";
import { viajesData } from "@/src/data/data-viajes";

export function GET() {
  return new Response(JSON.stringify(viajesData, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
