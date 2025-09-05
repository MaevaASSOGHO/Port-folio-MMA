import React, { Component } from "react";
import myImage from "../../assets/images/photo-pro.png";
class FeelingProud extends Component {
  render() {
    return (
      <div className="greeting-image-div">
        <img 
          src={myImage} 
          alt="Ma présentation" 
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    );
  }
}

export default FeelingProud;
