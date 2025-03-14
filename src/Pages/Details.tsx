import { Grid } from "@mantine/core";
import AchivementsList from "../data/Achivements/AchivementsList";
import EducationList from "../data/education/EducationList";
import ExperienceList from "../data/experience/experincelist";
import ProjectList from "../data/projects/projectList";
import HobbiesList from "../data/Hobbies/HobbiesList";

export default function () {
  return (
    <Grid>
      <Grid.Col span={1}></Grid.Col>
      <Grid.Col span={11}>
        <h1>Experience</h1>
        <ExperienceList />
        <h1>Achivements</h1>
        <AchivementsList />
        <h1>Education</h1>
        <EducationList />
        <h1>Project</h1>
        <ProjectList />
      </Grid.Col>
    </Grid>
  );
}
