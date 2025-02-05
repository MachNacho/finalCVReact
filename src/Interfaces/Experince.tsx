export interface Experience {
  role: string;
  organisation: string;
  startDate: string;
  endDate: string;
  experiences: string[];
  imageSrc: string;
}

export const createExperienceModel = (
  role: string,
  organisation: string,
  startDate: string,
  endDate: string,
  experiences: string[],
  imageSrc: string
): Experience => ({
  role,
  organisation,
  startDate,
  endDate,
  experiences,
  imageSrc,
});
