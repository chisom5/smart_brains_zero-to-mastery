import React from "react";
import { RecongitionWrapper } from "../style";
import { withMyContext } from "../../context/context";

const FaceRecongition = props => {
  //   console.log(props.myContextProps.box, "kvkr");
  return (
    <RecongitionWrapper>
      <div className="wrapper">
        <div
          className="bounding_box"
          style={{
            top:`${props.myContextProps.box.topRow}px`,
            right:`${props.myContextProps.box.rightCol}px`,
            left: `${props.myContextProps.box.leftCol}px`,
            bottom: `${props.myContextProps.box.bottomRow}px`
          }}
        ></div>
        <img src={props.myContextProps.imageUrl} alt="" id="inputImage" />
      </div>
    </RecongitionWrapper>
  );
};

export default withMyContext(FaceRecongition);
