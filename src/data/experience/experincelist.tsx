{
  /*
  This component allows for fetching and displaying of json file to fill details such as hobbies, experince .... Without the need to edit the react files  
  */
}

//Imports the json file
import data from "./exp.json";

//Interface to validate JSON objects
interface Experience {
  role: string;
  organisation: string;
  startDate: string;
  endDate: string;
  experiences: string[];
  imageSrc: string;
}

// function to return each object in JSON with formating to display on page
const ExperienceList: React.FC = () => {
  const experiences: Experience[] = data;

  return (
    <>
      <h1 className="DetailTopicHead">Experience:</h1>
      <div className="Container">
        {experiences.map((exp, index) => (
          <div key={index} className="DetBox">
            <h2 className="subHeadingDetails">{exp.role}</h2>
            <p>{exp.organisation}</p>
            <p>
              {exp.startDate} - {exp.endDate}
            </p>
            <ul>
              {exp.experiences.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
            <Iconpic value={exp.imageSrc} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ExperienceList;

function Iconpic({ value }: { value: string }) {
  return <img src={value} className="iconPic"></img>;
}
