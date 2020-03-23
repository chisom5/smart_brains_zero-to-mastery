import React from "react";
import { FormStyle, Input, Button } from "../style";
import { Link } from "react-router-dom";
import { withMyContext } from "../../context/context";

const SignInForm = props => {
  return (
    <FormStyle>
      <h2>Sign In</h2>
      <div>
        {props.myContextProps.error && (
          <p
            className={[props.myContextProps.error ? "block" : "hide"].join("")}
          >
            {props.myContextProps.error}
          </p>
        )}

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
      <Button onClick={e => props.myContextProps.handleSignIn(e)}>
        Sign in
      </Button>
      <p>
        Don't have an account? <Link to="/register">register</Link>
      </p>
    </FormStyle>
  );
};

export default withMyContext(SignInForm);
