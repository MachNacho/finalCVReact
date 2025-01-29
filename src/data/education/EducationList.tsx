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
import data from "./Edu.json";

//Interface to validate JSON objects
interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  grade: string;
  details: string[];
  imageSrc: string;
}

// function to return each object in JSON with formating to display on page
const EducationList: React.FC = () => {
  const education: Education[] = data;

  return (
    <Grid>
      {education.map((edu, index) => (
        <Grid.Col span={3}>
          <Card
            withBorder
            radius="md"
            p="md"
            className={classes.card}
            key={index}
          >
            <Card.Section className={classes.section}>
              <Image
                src={edu.imageSrc}
                alt={edu.institution}
                h="auto"
                fit="contain"
              />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
              <Group justify="apart">
                <Text fz="lg" fw={500}>
                  {edu.degree}
                </Text>
              </Group>
              <Text fz="lg" fw={500}>
                {edu.institution}
              </Text>
              <Text fz="sm" mt="xs">
                {edu.details}
              </Text>
            </Card.Section>
            <Card.Section className={classes.section}>
              <Text fz="sm" mt="xs">
                {edu.startDate} - {edu.endDate}
              </Text>
            </Card.Section>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};
//TODO Fix objects
export default EducationList;
