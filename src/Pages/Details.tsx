import { FooterCentered } from "../Components/FooterCentered/FooterCentered";
import { HeaderSimple } from "../Components/HeaderSimple/HeaderSimple";
import AchivementsList from "../data/Achivements/AchivementsList";
import EducationList from "../data/education/EducationList";
import ExperienceList from "../data/experience/experincelist";
import ProjectList from "../data/projects/projectList";

export default function () {
  return (
    <>
      <HeaderSimple />
      <ExperienceList />
      <EducationList />
      <AchivementsList />
      <ProjectList />
      <FooterCentered/>
    </>
  );
}
