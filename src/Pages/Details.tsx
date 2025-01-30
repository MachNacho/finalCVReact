import AchivementsList from "../data/Achivements/AchivementsList";
import EducationList from "../data/education/EducationList";
import ExperienceList from "../data/experience/experincelist";
import ProjectList from "../data/projects/projectList";

export default function () {
  return (
    <>
      <ExperienceList />
      <EducationList />
      <AchivementsList />
      <ProjectList />
    </>
  );
}
