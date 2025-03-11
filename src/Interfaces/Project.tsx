export interface Project {
  id: number;
  title: string;
  description: string;
  projectDate: string; // or Date if you'd like to store it as a Date object
  link: string;
  hasPublicLink: boolean;
  tags: string[];
}

export const createProjectModel = (
  id: number,
  title: string,
  description: string,
  projectDate: string, // or Date if you'd like to store it as a Date object
  link: string,
  hasPublicLink: boolean,
  tags: string[]
): Project => ({
  id,
  title,
  link,
  projectDate,
  hasPublicLink,
  description,
  tags,
});
