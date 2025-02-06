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

// function to return each object in JSON with formating to display on page
const ExperienceList: React.FC = () => {
  const { data, loading, error } = useFetch<Experience[]>(""); //FIXME fix url
  return (
    <Grid align="flex-start">
      {data?.map((exp, index) => (
        <Grid.Col span={3}>
          <Card
            withBorder
            radius="md"
            p="md"
            className={classes.card}
            key={index}
          >
            <Card.Section className={classes.section}>
              <Image src={exp.imageSrc} alt={exp.role} h="auto" fit="contain" />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
              <Group justify="apart">
                <Text fz="lg" fw={500}>
                  {exp.role}
                </Text>
                <Text fz="lg" fw={500}>
                  {exp.organisation}
                </Text>
              </Group>
              <Text fz="sm" mt="xs">
                {exp.experiences}
              </Text>
            </Card.Section>
            <Card.Section className={classes.section}>
              <Text fz="sm" mt="xs">
                {exp.startDate} - {exp.endDate}
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
