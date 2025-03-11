{
  /*
  This component allows for fetching and displaying of json file to fill details such as hobbies, experince .... Without the need to edit the react files  
  */
}
import { Card, Grid, Group, Image, Text } from "@mantine/core";
import classes from "../../Components/CardBadge/BadgeCard.module.css";
//Imports the json file
import { Hobby } from "../../Interfaces/Hobby";
import { useFetch } from "@mantine/hooks";
import { GetAllHobbies } from "../../endPoints/endPointList";

// function to return each object in JSON with formating to display on page
const HobbiesList: React.FC = () => {
  const { data, loading, error } = useFetch<Hobby[]>(GetAllHobbies);
  return (
    <Grid justify="center" align="flex-start">
      {data?.map((hob, index) => (
        <Grid.Col span={5} key={hob.id}>
          <Card
            withBorder
            radius="md"
            p="md"
            className={classes.card}
            key={index}
          >
            <Card.Section>
              <Image src={hob.imageSrc} alt={hob.title} height={180} />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
              <Group justify="apart">
                <Text fz="lg" fw={500}>
                  {hob.title}
                </Text>
              </Group>
              <Text fz="sm" mt="xs">
                {hob.description}
              </Text>
            </Card.Section>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default HobbiesList;
