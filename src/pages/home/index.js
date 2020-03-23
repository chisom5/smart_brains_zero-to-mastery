import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withMyContext, MyContext } from "../../context/context";
import { Container, ContainerInner } from "../style";
import Particles from "react-particles-js";
import SignInForm from "../../components/formInput/signIn";

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

class Home extends Component {
  state = {
    error: null
  };
  handleInputChange = e => {
    const { name, value } = e.target;
    // set state
    this.setState({
      [name]: value
    });
  };

  handleSignIn = e => {
    e.preventDefault();
    const { email, password } = this.state;

    fetch("http://localhost:3001/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({error: null})
          return res.json();
        } else {
          throw res.json().then(obj =>
            this.setState({
              error: obj.message
            })
          );
        }
      })
      .then(data => {
        if (data.id) {
          localStorage.setItem('ActiveUser-SB', JSON.stringify(data))
          this.props.myContextProps.setUser(data, this.props.location.pathname);
          this.props.history.push("/detect");
        }
      })
      .catch(err => {
        // network error
        console.log(err);
      });
  };

  render() {
    const { handleSignIn, handleInputChange } = this;
    const {error} = this.state;

    return (
      <MyContext.Provider value={{ handleInputChange, handleSignIn, error }}>
        <Container>
          <Particles className="particle" params={paramsOptions} />
          <ContainerInner
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "100vh"
            }}
          >
            <SignInForm />
          </ContainerInner>
        </Container>
      </MyContext.Provider>
    );
  }
}
export default withRouter(withMyContext(Home));
