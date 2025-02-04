export interface Achievement {
  name: string;
  dateAcquired: string;
  location: string;
}
export const createAchvievementModel = (
  name: string,
  dateAcquired: string,
  location: string
): Achievement => ({
  name,
  dateAcquired,
  location,
});
