import React, { Component } from "react";
import { brotliDecompress } from "zlib";
import yahya from "./yahyabouhlel.jpg"
import amine from "./aminebouhlel.jpg"
import bureau from './bureau.png';
import Box2 from "./box2";


class Box extends Component {
 content=[
     {
         name:"yahya",
         imgsrc: yahya,
         text:"yahya bouhlel"
     },
     {
        name:"bureau",
        imgsrc: bureau,
        text:"bureau"
    },
    {
        name:"amine",
        imgsrc: amine,
        text:"amine bouhlel"
    }
 ]
 getComponents(){
    const cpt=this.content.map(e=>(
      <Box2 name={e.name} imgsrc={e.imgsrc} text={e.text}/>
    ));
    return cpt;
    }

    render() {
        return (
            <span>{this.getComponents()}</span>);
    }
}

export default Box;