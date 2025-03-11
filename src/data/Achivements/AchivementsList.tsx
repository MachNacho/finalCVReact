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
import { GetAllAchievements } from "../../endPoints/endPointList";
import { useFetch } from "@mantine/hooks";
import { Achievement } from "../../Interfaces/Achivement";

// function to return each object in JSON with formating to display on page
const AchivementsList: React.FC = () => {
  const { data, loading, error } = useFetch<Achievement[]>(GetAllAchievements);
  return (
    <Grid>
      {data?.map((ach, index) => (
        <Grid.Col span={3} key={ach.id}>
          <Card
            withBorder
            radius="md"
            p="md"
            className={classes.card}
            key={index}
          >
            <Card.Section className={classes.section}>
              <Text fz="lg" fw={500}>
                {ach.title}
              </Text>
            </Card.Section>
            <Card.Section className={classes.section} mt="md">
              <Group justify="apart">
                <Text fz="lg" fw={500}>
                  {ach.description}
                </Text>
              </Group>
            </Card.Section>
            <Card.Section className={classes.section}>
              <Text fz="sm" mt="xs">
                {ach.date}
              </Text>
            </Card.Section>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default AchivementsList;
