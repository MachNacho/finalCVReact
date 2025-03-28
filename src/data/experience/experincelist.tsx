{
  /*
  This component allows for fetching and displaying of json file to fill details such as hobbies, experince .... Without the need to edit the react files  
  */
}
import { Card, Grid, Group, Image, Text } from "@mantine/core";
import classes from "../../Components/CardBadge/BadgeCard.module.css";
//Imports the json file
import { useFetch } from "@mantine/hooks";
import { Experience } from "../../Interfaces/Experince";
import { GetAllExperience } from "../../endPoints/endPointList";

// function to return each object in JSON with formating to display on page
const ExperienceList: React.FC = () => {
  const { data, loading, error } = useFetch<Experience[]>(GetAllExperience);
  return (
    <Grid align="flex-start">
      {data?.map((exp, index) => (
        <Grid.Col span={3} key={exp.ID}>
          <Card
            withBorder
            radius="md"
            p="md"
            className={classes.card}
            key={index}
          >
            <Card.Section className={classes.section}>
              <Image
                src={exp.imageSrc}
                alt={exp.imageSrc}
                h="auto"
                fit="contain"
              />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
              <Group justify="apart">
                <Text fz="lg" fw={500}>
                  {exp.role}
                </Text>
                <Text fz="lg" fw={500}>
                  {exp.company}
                </Text>
              </Group>
              <Text fz="sm" mt="xs">
                {exp.isCurrent}
              </Text>
            </Card.Section>
            <Card.Section className={classes.section}>
              <Text fz="sm" mt="xs">
                {exp.startDate?.getDate()} - {exp.endDate?.getDate()}
              </Text>
            </Card.Section>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default ExperienceList;

function Iconpic({ value }: { value: string }) {
  return <img src={value} className="iconPic"></img>;
}
