import { endpoints } from "../models/enums";

export const fetchData = async <T>(endpoint: endpoints): Promise<T | null> => {
  try {

    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } 

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error al obtener los datos de " + endpoint, error);
    return null;
  }
}