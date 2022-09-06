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
