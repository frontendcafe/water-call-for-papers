import { EventStatus, EventType } from "../types/events-types";

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

export function checkInputValue<Type>(
  value: Type,
  setValue: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (!value) {
    setValue(Boolean(value));
  } else {
    setValue(Boolean(value));
  }
}

export const getTime = (date: Date) =>
  new Date(date).toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });

/**
 * It takes a date and calculate how many dates are left to today.
 *
 * Credits to @yolitzr: https://github.com/yolitzr
 *
 * @param {Date} date
 * @returns The number of days left to today
 */

export const calculateDaysLeft = (date: Date) => {
  const dayStart = new Date();
  const dayEnd = new Date(date);

  const remainingDays = dayStart.getTime() - dayEnd.getTime();
  const result = Math.floor(remainingDays / (-1000 * 60 * 60 * 24) + 1);

  if (result === 0) {
    return "Hoy";
  }

  if (result < 0) {
    return "Finalizado";
  }

  return result;
};

export const isString = (param: string): boolean => {
  return typeof param === "string";
};
export const isArray = (params: unknown): boolean => {
  return params instanceof Array;
};
export const isDate = (param: string): boolean => {
  return Boolean(Date.parse(param));
};
export const isStatus = (params: EventStatus): boolean => {
  return Object.values(EventStatus).includes(params);
};
export const isType = (params: EventType): boolean => {
  return Object.values(EventType).includes(params);
};

/**
 * Generates an integer between @min and @max, both are included.
 * @param min Number, minimum
 * @param max Number, maximum
 * @returns Random integer
 */
export const randomIntegerBetween = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);
