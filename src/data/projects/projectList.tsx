{
  /*
  This component allows for fetching and displaying of json file to fill details such as hobbies, experince .... Without the need to edit the react files  
  */
}
import {
  Card,
  Grid,
  Group,
  Image,
  Text,
} from "@mantine/core";
import classes from "../../Components/CardBadge/BadgeCard.module.css";
//Imports the json file
import data from "./pro.json";

//Interface to validate (type-check) JSON objects
interface Project {
  name: string;
  link: string;
  date: string;
  picture: string;
  description: string;
  tags: string[];
}

// function to return each object in JSON with formating to display on page
const ProjectList: React.FC = () => {
  const project: Project[] = data;

  return (
    <Grid>
      {project.map((pro, index) => (
        <Grid.Col span={3}>
          <Card
            withBorder
            radius="md"
            p="md"
            className={classes.card}
            key={index}
          >
            <Card.Section className={classes.section}>
              <Image src={pro.picture} alt={pro.name} h="auto" fit="contain" />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
              <Group justify="apart">
                <Text fz="lg" fw={500}>
                  {pro.name}
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
                {pro.date}
              </Text>
            </Card.Section>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default ProjectList;
