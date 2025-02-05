export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  grade: string;
  details: string[];
  imageSrc: string;
}

export const createEducationModel = (
  degree: string,
  institution: string,
  startDate: string,
  endDate: string,
  grade: string,
  details: string[],
  imageSrc: string
): Education => ({
  degree,
  institution,
  startDate,
  endDate,
  grade,
  details,
  imageSrc,
});
