{
  /*
  This component allows for fetching and displaying of json file to fill details such as hobbies, experince .... Without the need to edit the react files  
  */
}

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
  const hobbies: Hobbies[] = data;
  return (
    <div className="HobbyBox">
      {hobbies.map((hob, index) => (
        <div key={index} className="HobbyText">
          <h1>{hob.title}</h1>
          <img src={hob.image_src} alt={hob.title}></img>
          <p>{hob.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HobbiesList;
