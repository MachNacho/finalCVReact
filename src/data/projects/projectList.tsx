{
  /*
  This component allows for fetching and displaying of json file to fill details such as hobbies, experince .... Without the need to edit the react files  
  */
}
import { Card, Grid, Group, Image, Text } from "@mantine/core";
import classes from "../../Components/CardBadge/BadgeCard.module.css";
//Imports the json file
import data from "./pro.json";
import { GetAllProjects } from "../../endPoints/endPointList";
import { Project } from "../../Interfaces/Project";
import { useFetch } from "@mantine/hooks";

// function to return each object in JSON with formating to display on page
const ProjectList: React.FC = () => {
  const { data, loading, error } = useFetch<Project[]>(GetAllProjects);
  return (
    <Grid>
      {data?.map((pro, index) => (
        <Grid.Col span={3} key={pro.id}>
          <Card
            withBorder
            radius="md"
            p="md"
            className={classes.card}
            key={index}
          >
            <Card.Section className={classes.section}>
              <Image src={pro.hasPublicLink} alt={pro.title} h="auto" fit="contain" />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
              <Group justify="apart">
                <Text fz="lg" fw={500}>
                  {pro.title}
                </Text>
              </Group>
              <Text fz="lg" fw={500}>
                {pro.description}
              </Text>
              <Text fz="sm" mt="xs">
                {pro.tags}
                {pro.link}
              </Text>
            </Card.Section>
            <Card.Section className={classes.section}>
              <Text fz="sm" mt="xs">
                {pro.projectDate}
              </Text>
            </Card.Section>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default ProjectList;
