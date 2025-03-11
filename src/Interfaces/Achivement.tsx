export interface Achievement {
  id: number;
  title: string;
  date: string;
  description: string;
}
export const createAchvievementModel = (
  id: number,
  title: string,
  date: string,
  description: string,
): Achievement => ({
  id,
  title,
  date,
  description
});
