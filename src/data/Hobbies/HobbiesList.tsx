{
  /*
  This component allows for fetching and displaying of json file to fill details such as hobbies, experince .... Without the need to edit the react files  
  */
}
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Text,
} from "@mantine/core";
import classes from "../../Components/CardBadge/BadgeCard.module.css";
//Imports the json file
import data from "./Hobbies.json";

//Interface to validate JSON objects
interface Hobbies {
  title: string;
  description: string;
  image_src: string;
}

// function to return each object in JSON with formating to display on page
const HobbiesList: React.FC = () => {
  const hobbies: Hobbies[] = data; // adds JSON file to array

  return (
    <Grid>
      {hobbies.map((hob, index) => (
        <Card
          withBorder
          radius="md"
          p="md"
          className={classes.card}
          key={index}
        >
          <Card.Section>
            <Image src={hob.image_src} alt={hob.title} height={180} />
          </Card.Section>

          <Card.Section className={classes.section} mt="md">
            <Group justify="apart">
              <Text fz="lg" fw={500}>
                {hob.title}
              </Text>
              <Badge size="sm" variant="light">
                {"country"}
              </Badge>
            </Group>
            <Text fz="sm" mt="xs">
              {hob.description}
            </Text>
          </Card.Section>

          <Card.Section className={classes.section}>
            <Text mt="md" className={classes.label} c="dimmed">
              Perfect for you, if you enjoy
            </Text>
            <Group gap={7} mt={5}>
              {"features"}
            </Group>
          </Card.Section>
        </Card>
      ))}
    </Grid>
  );
};

export default HobbiesList;
