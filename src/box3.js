import React, { Component } from "react";
import { brotliDecompress } from "zlib";



class Box3 extends Component {
    third = () => {
        if (this.state.display === "none") {
            this.setState({ display: "block" });
        } else {
            this.setState({ display: "none" });
        }

    }
    state = {
        display: "none"
    }

    render() {
        const border = {
            width: "40%",
            height: "450px",
            marginLeft: "450px",
            marginTop: "50px",
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: "5px"
        }
        const text={
            marginLeft: "600px"
        }
        return (
            <div className="box3" >
                <button  onClick={this.third}>bureau</button>
                <div style={{ display: this.state.display, position:"absolute" }}>
                <img style={border} src={this.props.src} />
                <p style={text}> {this.props.name}</p>
                </div>
            </div>);
    }
}

export default Box3;