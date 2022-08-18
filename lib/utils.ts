export const formatFirebaseDate = (date: any): Date => {
  return new Date(date * 1000);
};
