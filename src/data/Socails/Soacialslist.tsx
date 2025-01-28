{
  /*
  This component allows for fetching and displaying of json file to fill details such as hobbies, experince .... Without the need to edit the react files  
  */
}

//Imports the json file
import data from "./Socials.json";

//Interface to validate JSON objects
interface Socials {
  name: string;
  link: string;
  icon_src: string;
}

// function to return each object in JSON with formating to display on page
const SocialList: React.FC = () => {
  const socials: Socials[] = data;
  // TODO finish this code
  return (
    <>
      <div className="Container">
        {socials.map((pro, index) => (
          <a key={index} href={pro.link}>
            <div>{pro.icon_src}</div>
          </a>
        ))}
      </div>
    </>
  );
};
export default SocialList;
