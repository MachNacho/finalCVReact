export interface Hobby {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}
export const createHobbyModel = (
  id: number,
  title: string,
  description: string,
  imageSrc: string
): Hobby => ({
  id,
  title,
  description,
  imageSrc,
});
