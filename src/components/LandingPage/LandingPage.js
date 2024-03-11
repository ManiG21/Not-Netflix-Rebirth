// import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Home from "./Home.jpg"
import {
  faPersonRunning,
  faHeart,
  faPeopleRoof,
  faFlaskVial,
  faBomb,
  faBookOpen,
  faCouch,
  faCrow,
  faDragon,
  faDungeon,
  faExplosion,
  faHorse,
  faLaughWink,
  faMagnifyingGlass,
  faMasksTheater,
  faMusic,
  faSkull,
  faVideoCamera,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../LandingPage/LandingPage.css";

const genreData = {
  Action: {
    background:  "#8AF3FF",
    color: "#090446",
    icon: faExplosion,
    fontFamily: "'Josefin Sans', sans-serif",
  },
  Adventure: {
    background: "#E94F37" ,
    color: "#F6F7EB",
    icon: faDungeon,
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  },
  Animation: {
    background: "#70163C",
    color: "#95B2B8",
    icon: faWandMagicSparkles,
    fontFamily: "'Comic Neue', cursive",
  },
  Comedy: {
    background: "#7F6A93",
    color:  "#FFE14D",
    icon: faLaughWink,
    fontFamily: "fantasy"
  },
  Crime: {
    background:"#F9C22E" ,
    color:  "#000000",
    icon: faCrow,
    fontFamily: "'Caveat', cursive;"
  },
  Documentary: {
    background: "#cd853f",
    color: "#861388",
    icon: faVideoCamera,
    fontFamily: "Cambria, Cochin, Georgia, 'Times New Roman', serif"
  },
  Drama: {
    background: "#86BBD8",
    color: "#6B0504",
    icon: faMasksTheater,
    fontFamily: "'Rubik Dirt', cursive"

  },
  Family: {
    background: "#C9E4CA",
    color: "#55828B",
    icon: faPeopleRoof,
  },
  Fantasy: {
    background: "#2D7DD2",
    color: "#97CC04",
    icon: faDragon,
  },
  History: {
    background:  "#9F7833" ,
    color: "#2D3142",
    icon: faBookOpen,
  },
  Horror: {
    background: "#A3320B",
    color: "#23231A",
    icon: faSkull,
    fontFamily: "'Permanent Marker', cursive"
  },
  Music: {
    background: "#8B95C9",
    color:  "#16F4D0",
    icon: faMusic,
  },
  Mystery: {
    background:  "#472836",
    color: "#A69658",
    icon: faMagnifyingGlass,
  },
  Romance: {
    background: "#C2AFF0",
    color: "#A30015",
    icon: faHeart,
  },
  "Science Fiction": {
    background: "#00650c",
    color: "#91C499",
    icon: faFlaskVial,
    fontSize: "47px",
  },
  "TV Movie": {
    background: "#8C8C8C",
    color: "#32021F",
    icon: faCouch,
  },
  Thriller: {
    background: "#320E3B",
    color: "green",
    icon: faPersonRunning,
    
  },
  War: {
    background: "#6B0504",
    color: "#4A5859",
    icon: faBomb
  },
  Western: {
    background: "#B89685",
    color: "#754043" ,
    icon: faHorse,
  },
};

export default function LandingPage(props) {
  console.log("landingPage.", props.genres);
  return (
    <div>
    <div>
      <header>Movies & More</header>
      <img className="home" src= {Home}></img>
    </div>
    <div className="genreGrid">
      {props.genres?.map((genre) => (
        <Link style={genreData[genre.name]} to={`/genre/${genre.id}`}>
          <div className="container" key={genre.id}>
            {genreData[genre.name]?.icon && (
              <FontAwesomeIcon
                icon={genreData[genre.name].icon}
                className="icon"
              />
            )}
            <div className="genre">{genre.name}</div>
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
}