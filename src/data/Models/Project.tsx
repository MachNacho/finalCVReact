export interface Project {
  name: string;
  link: string;
  date: string;
  picture: string;
  description: string;
  tags: string[];
}

export const createProjectModel = (
  name: string,
  link: string,
  date: string,
  picture: string,
  description: string,
  tags: string[]
): Project => ({
  name,
  link,
  date,
  picture,
  description,
  tags,
});
