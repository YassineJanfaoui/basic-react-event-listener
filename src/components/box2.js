import React, { Component } from "react";
import { brotliDecompress } from "zlib";



class Box2 extends Component {
    render() {
        return (
            <div className="box2">
                <p>{this.props.name}<br />
                    {this.props.desc}</p>
            </div>);
    }
}

export default Box2;