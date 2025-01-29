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
import React from "react";
import data from "./ACH.json";

//Interface to validate JSON objects
interface Achievement {
  name: string;
  dateAcquired: string;
  location: string;
}

// function to return each object in JSON with formating to display on page
const AchivementsList: React.FC = () => {
  const achievments: Achievement[] = data;

  return (
    <Grid>
        {achievments.map((ach, index) => (
          <Grid.Col span={3}>
          <Card
            withBorder
            radius="md"
            p="md"
            className={classes.card}
            key={index}
          >
            <Card.Section className={classes.section}>
            <Text fz="lg" fw={500}>
                  {ach.name}
                </Text>
            </Card.Section>
            <Card.Section className={classes.section} mt="md">
              <Group justify="apart">
                <Text fz="lg" fw={500}>
                  {ach.location}
                </Text>
              </Group>
            </Card.Section>
            <Card.Section className={classes.section}>
              <Text fz="sm" mt="xs">
                {ach.dateAcquired}
              </Text>
            </Card.Section>
          </Card>
        </Grid.Col>
        ))}
    </Grid>
  );
};

export default AchivementsList;
