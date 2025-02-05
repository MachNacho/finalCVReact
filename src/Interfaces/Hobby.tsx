export interface Hobby {
  title: string;
  description: string;
  image_src: string;
}
export const createHobbyModel = (
  title: string,
  description: string,
  image_src: string
): Hobby => ({
  title,
  description,
  image_src,
});
