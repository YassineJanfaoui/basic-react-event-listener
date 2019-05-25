import React, { Component } from "react";
import { brotliDecompress } from "zlib";



class Box extends Component {
    render() {
        if (this.props.gender === "male") {
            var border = {
                borderStyle: " solid",
                borderColor:"blue",
                fontSize:"1.5em",
                borderWidth:"3px"
            }

        }
        if (this.props.gender === "female") {
            var border = {
                borderStyle: " solid",
                borderColor:"yellow",
                fontSize:"1.5em",
                borderWidth:"3px"
            }
        }
        return (
            <div className="box">
                <p style={border}>{this.props.name}</p>
                <p style={this.props.style2}> {this.props.des}</p>
                <p style={this.props.style2}> {this.props.desc}</p>
                <p >{this.props.gender}</p>
            </div>);
    }
}

export default Box;