import "server-only"; 
import { createClient } from "@libsql/client";

export const turso = createClient({
  url: process.env.TURSO_URL_DATABASE as string,
  authToken: process.env.TURSO_TOKEN_DATABASE as string, 
});