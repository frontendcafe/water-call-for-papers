import fetcher from "./fetcher";
import { EventId, NewEventData } from "../types/events-types";
import { NewTopic } from "../types/talk-types";

/**
 * Función para retornar todos los eventos de la API
 *
 * @returns {EventData[]}
 */
export async function getAllEvents(searchParams = "/") {
  return await fetcher(`/api/events${searchParams}`);
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
 * @param  {NewEventData} event
 * @returns {EventData}
 */
export async function createEvent(event: NewEventData) {
  return await fetcher(`/api/events`, {
    method: "POST",
    body: JSON.stringify(event),
  });
}

/**
 * Función para retornar todos los topics de la API
 *
 * @returns {Topic[]}
 */
export async function getAllTopics() {
  return await fetcher("/api/topics");
}

/**
 * Función para crear un topic
 *
 * @param  {NewTopic[]} topic
 * @returns {Topic[]}
 */
export async function createTopic(topic: NewTopic[]) {
  return await fetcher("/api/topics", {
    method: "POST",
    body: JSON.stringify(topic),
  });
}
