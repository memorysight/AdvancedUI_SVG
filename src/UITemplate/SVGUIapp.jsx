import React from 'react';
import SVGTOP from './SVGTOP';
import SVGUIBottom from './SVGUIBotton';
import SVGUIMiddle from './SVGUIMiddle';
import Layout from '../Layout';
import './Template.css';



function SVGUIapp(){




    return(

        <div>
            <SVGTOP />
            <SVGUIMiddle />
            <Layout />
            <SVGUIBottom />



        </div>
     

    )
}

export default SVGUIapp;