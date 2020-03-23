import React from "react";

export const MyContext = React.createContext();

export const withMyContext = Component=> {
  return props => (
    <MyContext.Consumer>
      {value => <Component myContextProps={value} {...props} />}
    </MyContext.Consumer>
  );
};
