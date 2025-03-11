export interface Education {
  id: number;
  title: string;
  educationLevel: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
  imageSrc: string;
}

export const createEducationModel = (
  id: number,
  title: string,
  educationLevel: string,
  institution: string,
  startDate: string,
  endDate: string,
  description: string,
  imageSrc: string
): Education => ({
  id,
  title,
  educationLevel,
  institution,
  startDate,
  endDate,
  description,
  imageSrc,
});
