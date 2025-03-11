export interface Experience {
  ID: number;
  role: string;
  company: string;
  startDate: Date;
  endDate?: Date | null;
  isCurrent: boolean;
  imageSrc: string;
}
export const createExperienceModel = (
  ID: number,
  role: string,
  company: string,
  startDate: Date,
  endDate: Date | null,
  isCurrent: boolean,
  imageSrc: string
): Experience => ({
  ID,
  role,
  company,
  startDate,
  endDate,
  isCurrent,
  imageSrc,
});
