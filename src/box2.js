import React, { Component } from "react";
import { brotliDecompress } from "zlib";



class Box2 extends Component {
    constructor(props){
        super(props);
        this.state={};
        this.state.typeStyle={display:"none"}

    }
    
    showContent=()=>{
        this.setState({
            typeStyle:{display:this.state.typeStyle.display==="block"?"none":"block"}
        })
    }
    showContent2=()=>{
        this.setState({
            typeStyle:{display:this.state.typeStyle.display==="block"?"block":"none"}
        })
    }
    render(){
        return(
            <div >
                <button className="button" onClick={this.showContent} >{this.props.name}</button>
                <div  style={this.state.typeStyle}>
                <img src={this.props.imgsrc}></img>
                <h1>{this.props.text}</h1>
                </div>
            </div>
        )
    }

}
export default Box2;