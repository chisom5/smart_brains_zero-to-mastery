import React, { Component } from "react";
import { withMyContext, MyContext } from "../../context/context";
import { Container, ContainerInner } from "../style";
import {withRouter} from 'react-router-dom'
import Particles from "react-particles-js";
import Navigation from "../../components/navigation";
import ImageInputLink from "../../components/imageInput";
import FaceRecongition from "../../components/faceRecongition";

const paramsOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class Detection extends Component {
  state = {
    input: "",
    imageUrl: "",
    box: {},
    storageUser: null
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("ActiveUser-SB"));
    if(Object.keys(user).length === 0){
      this.props.history.push("/");
    }else{
      this.setState({ storageUser: user });
    }

  }
  calculateFaceLocation = data => {
    const clarifai = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");

    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifai.left_col * width,
      topRow: clarifai.top_row * height,
      rightCol: width - clarifai.right_col * width,
      bottomRow: height - clarifai.bottom_row * height
    };
  };

  displayBox = box => {
    this.setState({ box });
  };
  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  onPictureSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    // use clarifai api for image recongition
    fetch("https://stormy-lake-56704.herokuapp.com/imageurl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response) {
          fetch("https://stormy-lake-56704.herokuapp.com/image", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              id: this.state.storageUser.id
            })
          })
            .then(res => {
              if (res.status === 200) {
                return res.json();
              }
            })
            .then(data => {
              this.props.myContextProps.setUser(
                data,
                this.props.location.pathname
              );
            })
            .catch(err => console.log(err));
        }
        this.displayBox(this.calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  };

  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/");
  };

  render() {
    const { imageUrl, box } = this.state;
    const { onInputChange, onPictureSubmit, handleLogout } = this;
    return (
      <MyContext.Provider
        value={{
          onInputChange,
          onPictureSubmit,
          imageUrl,
          box,
          handleLogout
        }}
      >
        <Container style={{ height: "100%" }}>
          <Particles className="particle" params={paramsOptions} />
          <ContainerInner>
            <Navigation />

            {/* logo */}
            <div className="logo">
              <img
                src={require("../../asset/brain_logo.png")}
                alt="brain_logo"
              />
            </div>

            <div id="align-center">
              {/* Rank status */}
              <div id="rank">
                <p>
                  {(this.props.myContextProps.user &&
                    this.props.myContextProps.user.name) ||
                    (this.state.storageUser && this.state.storageUser.name)}
                  , your current entry count is...
                </p>
                <span style={{ fontSize: "20px" }}>
                  {(this.props.myContextProps.user &&
                    this.props.myContextProps.user.entries) ||
                    (this.state.storageUser && this.state.storageUser.entries)}
                </span>
              </div>

              {/* image input form */}
              <ImageInputLink />
            </div>

            <FaceRecongition />
          </ContainerInner>
        </Container>
      </MyContext.Provider>
    );
  }
}
export default withRouter(withMyContext(Detection));
