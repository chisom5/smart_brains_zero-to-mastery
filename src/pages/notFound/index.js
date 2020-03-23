import React, { Component } from "react";
import { withMyContext, MyContext } from "../../context/context";
import {Container, ContainerInner} from '../style';
// import Navigation from '../../components/navigation';

class NotFound extends Component {
  render() {
    return (
      <MyContext.Provider>
        <Container>
            <ContainerInner>
                {/* <Navigation /> */}
                    <div>
                        <h2>Page not found</h2>
                        <h5>404 Error</h5>
                        <p>The page you are trying to access on this path is not available</p>
                    </div>
            </ContainerInner> 
        </Container>
      </MyContext.Provider>
    );
  }
}
export default withMyContext(NotFound);
