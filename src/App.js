import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import yahya from "./yahyabouhlel.jpg"
import amine from "./aminebouhlel.jpg"
import Box from './components/box';
import Box2 from './components/box2';
import bureau from './bureau.png';

class App extends Component {


  render() {
    const x =document.getElementsByClassName("yahyabouhlel")
     const first = () => {
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    return (

      <div>

        <div className="buttons">
          <button onClick={this.first}>yahya</button>
          <button /*onClick={()=>}*/>amine</button>
          <button /*onClick={()=>}*/>bureau</button>
        </div>
        <div>
          <div className="amine" style={{ display: "none", position: "absolute" }}>
            <img style={{ width: "30%", height: "450px", marginLeft: "450px", marginTop: "50px", borderStyle: "solid", borderColor: "black", borderWidth: "5px" }} src={amine} />
            <p style={{ marginLeft: "600px" }}>lorem ipsum.</p>
          </div>
          <div className="yahyabouhlel" style={{ display: "none", position: "absolute" }}>
            <img style={{ width: "30%", height: "450px", marginLeft: "450px", marginTop: "50px", borderStyle: "solid", borderColor: "black", borderWidth: "5px" }} src={yahya} />
            <p style={{ marginLeft: "600px" }}>lorem ipsum.</p>
          </div>
          <div className="bureau" style={{ display: "none", position: "absolute" }}>
            <img style={{ width: "30%", height: "450px", marginLeft: "450px", marginTop: "50px", borderStyle: "solid", borderColor: "black", borderWidth: "5px" }} src={bureau} />
            <p style={{ marginLeft: "600px" }}>lorem ipsum.</p>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
