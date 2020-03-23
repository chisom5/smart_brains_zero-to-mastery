import React from "react";
import { FormStyle, Input, Button } from "../style";
import { Link } from "react-router-dom";
import { withMyContext } from "../../context/context";

const RegisterForm = props => {
  return (
    <FormStyle>
      <h2>Create an account</h2>

      <div>
        {props.myContextProps.error && (
          <p
            className={[props.myContextProps.error ? "block" : "hide"].join("")}
          >
            {props.myContextProps.error}
          </p>
        )}
        <label>Name</label>
        <Input
          type="text"
          name="name"
          onChange={e => props.myContextProps.handleInputChange(e)}
        />
      </div>
      <div>
        <label>Email</label>
        <Input
          type="text"
          name="email"
          onChange={e => props.myContextProps.handleInputChange(e)}
        />
      </div>
      <div>
        <label>Password</label>
        <Input
          type="password"
          name="password"
          onChange={e => props.myContextProps.handleInputChange(e)}
        />
      </div>
      <Button onClick={e => props.myContextProps.handleRegister(e)}>
        Register
      </Button>
      <p>
        already have an account? <Link to="/">sign in</Link>
      </p>
    </FormStyle>
  );
};

export default withMyContext(RegisterForm);
