// import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Home from "./Home.jpg"
import {
  // Ask Abe about importing new Icon for Thriller (running) Why it needs Camel Case
  faPersonRunning,
  faHeart,
  faSkullCrossbones,
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
    // background: "#090446",
    // color: "#8AF3FF",
    background:  "#8AF3FF",
    color: "#090446",
    icon: faExplosion,
    fontFamily: "'Josefin Sans', sans-serif",
  },
  Adventure: {
    // background: "#00650c",
    background: "#E94F37" ,
    color: "#F6F7EB",
    icon: faDungeon,
    // color: "#BCD4DE",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
  },
  Animation: {
    background: "#70163C",
    color: "#95B2B8",
    icon: faWandMagicSparkles,
    fontFamily: "'Comic Neue', cursive",
  },
  Comedy: {
    // background: "#FFE14D",
    // color: "#7F6A93",
    background: "#7F6A93",
    color:  "#FFE14D",
    icon: faLaughWink,
    fontFamily: "fantasy"
  },
  Crime: {
    // background: "#000000",
    // color: "#F9C22E",
    background:"#F9C22E" ,
    color:  "#000000",
    icon: faCrow,
    fontFamily: "'Caveat', cursive;"
  },
  Documentary: {
    background: "#cd853f",
    // color: "#412234",
    // color: "#F5E5FC",
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
    // background: "#35605A",
    // color: "#DF2935",
    background: "#2D7DD2",
    color: "#97CC04",
    icon: faDragon,
  },
  History: {
    // background: "#2D3142",
    // color: "#9F7833" ,
    background:  "#9F7833" ,
    // color: "#2D3142",
    color: "#2D3142",
    // color: "#05668D",
    // background: "#05668D",
    icon: faBookOpen,
  },
  Horror: {
    background: "#A3320B",
    color: "#23231A",
    icon: faSkull,
    // icon: faSkullCrossbones,
    // fontSize: "65px",
    fontFamily: "'Permanent Marker', cursive"
  },
  Music: {
    // background: "#16F4D0",
    // color: "black",
    background: "#8B95C9",
    color:  "#16F4D0",
    icon: faMusic,
  },
  Mystery: {
    // background: "#6A5D7B",
    // color: "#F9ADA0",
    // background: "#A69658",
    // color: "#795C5F",
    // background:  "#795C5F",
    background:  "#472836",
    color: "#A69658",
    icon: faMagnifyingGlass,
  },
  Romance: {
    // background: "#A30015",
    // color: "#C2AFF0",
    background: "#C2AFF0",
    color: "#A30015",
    icon: faHeart,
  },
  "Science Fiction": {
    // background: "#FFF689",
    // color: "#58355E",
    background: "#00650c",
    // color: "#b11eeb",
    // color: "black",
    color: "#91C499",
    icon: faFlaskVial,
    fontSize: "47px",
  },
  "TV Movie": {
    background: "#8C8C8C",
    // color: "white",
    // color: "#A53860",
    // color: "#071E22",
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
    // background:  "#4A5859",
    // color: "#6B0504",
    // color: "#FFFBFC",
    icon: faBomb
  },
  Western: {
    // background: "#FFFBFC",
    // color: "#754043",
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