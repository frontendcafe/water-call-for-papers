export const formatFirebaseDate = (date: number): Date => {
  return new Date(date * 1000);
};
