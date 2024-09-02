import React from 'react';
import SVGTOP from './SVGTOP';
import SVGUIBottom from './SVGUIBotton';
import SVGUIMiddle from './SVGUIMiddle';
import Layout from '../Layout';
import './Template.css';
import Video from '../Video/Video';



function SVGUIapp(){




    return(

        <div>
            <SVGTOP />
            {/* <SVGUIMiddle />
            <Layout />
            <SVGUIBottom /> */}
            <Video />



        </div>
     

    )
}

export default SVGUIapp;