export const formatFirebaseDate = (date: number): Date => {
  return new Date(date * 1000);
};

/**
 * It takes a list of strings, filters out the falsy values, and joins the rest with a space
 * @param {string[]} classes - Tailwind's utility classes as an array of strings.
 * @returns A function that takes in strings and returns a string.
 */
export function tw(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const getDate = (date: Date) => new Date(date).toLocaleDateString();
export const getTime = (date: Date) => new Date(date).toLocaleTimeString();
