import { EventId, EventData } from "../types/events-types";

interface Response {
  data?: unknown;
  error?: Error;
}

/**
 * Función para realizar las request a la API
 *
 * @param  {string} url
 * @param  {RequestInit} options?
 * @returns {Response}
 */
export default async function fetcher(
  url: string,
  options?: RequestInit
): Promise<Response> {
  try {
    // Ejecutamos el fetch para hacer una request a la API, si options es
    // undefined se realiza un GET, de lo contrario tomará el valor de la
    // propiedad method
    const responseFetch = await fetch(url, options);
    if (!responseFetch.ok) {
      throw new Error("Hubo un error en la respuesta de la API.");
    }
    const { data } = await responseFetch.json();
    return { data };
  } catch (error) {
    return { error: error as Error };
  }
}

/**
 * Función para retornar todos los eventos de la API
 *
 * @returns {EventData[]}
 */
export async function getAllEvents() {
  return await fetcher("/api/events");
}

/**
 * Función para retornar un evento de la API en base a un id dado
 *
 * @param  {EventId} id
 * @returns {EventData}
 */
export async function getEventById(id: EventId) {
  return await fetcher(`/api/events/${id}`);
}

/**
 * Función para crear un evento en la API
 *
 * @param  {Partial<EventData>} event
 * @returns {EventData}
 */
export async function createEvent(event: Partial<EventData>) {
  return await fetcher(`/api/events`, {
    method: "POST",
    body: JSON.stringify(event),
  });
}
