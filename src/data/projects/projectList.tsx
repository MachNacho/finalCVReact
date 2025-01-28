{
  /*
  This component allows for fetching and displaying of json file to fill details such as hobbies, experince .... Without the need to edit the react files  
  */
}

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
    <>
      <h1 className="DetailTopicHead">Projects:</h1>
      <div className="Container">
        {project.map((pro, index) => (
          <div key={index} className="DetBox">
            <h2 className="subHeadingDetails">{pro.name}</h2>
            <p>
              <strong>Date:</strong> {pro.date}
            </p>
            <img
              src={pro.picture}
              alt={pro.name}
              style={{ width: "200px", height: "auto", marginBottom: "10px" }}
            />
            <p>{pro.description}</p>
            <p>
              <strong>Tags:</strong> {pro.tags.join(", ")}
            </p>
            <a href={pro.link} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectList;
