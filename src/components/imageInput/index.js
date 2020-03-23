import React from "react";
import { ImageInputContainer } from "../style";
import {withMyContext} from '../../context/context';

const ImageInputLink = (props) => {
  return (
    <ImageInputContainer>
      <p>This magic brain will detect faces in your pictures, give it a try</p>

      <div className="center">
        <div>
          <input type="text" className='input' placeholder='Enter url' onChange={(e)=> props.myContextProps.onInputChange(e)}/>
          <button className='button' onClick={(e)=>props.myContextProps.onPictureSubmit(e)}>Detect</button>
        </div>
      </div>
    </ImageInputContainer>
  );
};

export default withMyContext(ImageInputLink);
