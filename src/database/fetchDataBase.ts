import { turso } from "@/src/database/turso";

export type DataType = "vehiculos" | "viajes" | "estaciones";

export const fetchDataBase = async (type: DataType) => {
  try {
    const query = `SELECT ${type} FROM datos LIMIT 1`;
    
    const result = await turso.execute(query);
    
    if (result.rows.length === 0) return null;

    // Accedemos a la propiedad usando el string dinámico
    const jsonString = result.rows[0][type] as string;

    // Retornamos el objeto ya parseado
    return jsonString ? JSON.parse(jsonString) : null;
    
  } catch (error) {
    console.error(`Error al obtener ${type} de Turso:`, error);
    throw error;
  }
};