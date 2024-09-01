import * as React from "react";
import Buttons from "../SVG/Buttons";
import NavBar from '../SVG/NavBar';
import Nav1 from "../SVG/Nav1";
import Overlay3 from '../SVG/Overlay3';
import Buttons2 from '../SVG/Buttons2';


const Video = () => {
  const [isCSSInitiated, setIsCSSInitiated] = React.useState(false);

  const handleClick = () => {
    setIsCSSInitiated(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
     <Overlay3 />
     
      <video id="bg-video" style={{ width: "100%" }}>
        <source src="ZoePerfect.mp4" type="video/mp4" />
      </video>
      <Buttons2 onClick={handleClick} style={{ width: "100%" }}></Buttons2>
       
   

      {isCSSInitiated && (
        <style>
          {`
            path {
              stroke: black;
              stroke-width: 8px;
              stroke-dashoffset: -2226;
              stroke-dasharray: 2226;
              animation: draw 1s ease-in-out ;
            }

            @keyframes draw {
              0% {
                stroke-dasharray: -2226;
              }
              25% {
                stroke: red;
                fill: black;
              }
              50% {
                stroke: blue;
                fill: black;
              }
              100% {
                stroke-dashoffset: 0;
                stroke: yellow;
                fill: gold;
              }
            }
          `}
        </style>
       
      )}
    </div>
  );
};

export default Video;