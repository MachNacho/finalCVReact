{
  /*
  This component allows for fetching and displaying of json file to fill details such as hobbies, experince .... Without the need to edit the react files  
  */
}

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
    <>
      <h1 className="DetailTopicHead">Achivments:</h1>
      <div className="Container">
        {achievments.map((ach, index) => (
          <div key={index} className="DetBox">
            <h3 className="subHeadingDetails">{ach.name}</h3>
            <p>
              Acquired: {ach.dateAcquired} <br />
              Location: {ach.location}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AchivementsList;
