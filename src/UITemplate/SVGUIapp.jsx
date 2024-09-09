import React from 'react';
import SVGTOP from './SVGTOP';
import SVGUIBottom from './SVGUIBotton';
import SVGUIMiddle from './SVGUIMiddle';
import Layout from '../Layout';
import './Template.css';
import Video from '../Video/Video';
import SVG1 from '../SVG/SVG1';



function SVGUIapp(){




    return(

        <div>
            <SVG1 />
            {/* <SVGUIMiddle />
            <Layout />
            <SVGUIBottom /> */}
            <Video />



        </div>
     

    )
}

export default SVGUIapp;