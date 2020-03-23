import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  padding: 1rem;
  height: 48px;

  div {
    position: absolute;
    right: 0px;
    margin-right: 1rem;
  }

  .link{
    cursor: pointer;
    text-decoration: underline;
    color: rgb(85, 26, 139);
    text-decoration-color: rgb(0, 0, 238);
  }
`;
export const RecongitionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: auto;
  }

  img {
    max-width: 100%;
    height: 250px;
  }

  .bounding_box {
    position: absolute;
    box-shadow: 0 0 0 3px #149df2 inset;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;
  }
  @media (max-width: 350px) {
    img {
      max-width: 50%;
      height: 250px;
    }
  }
`;
export const ImageInputContainer = styled.div`
  .center {
    display: flex;
    justify-content: center;

    .input {
      width: 60%;
      height: 25px;
      padding: 0px 10px;
    }
    .button {
      background: #1890ff;
      border: none;
      height: 28px;
      color: #fff;
      padding: 2px 3px;
      width: 25%;
    }
    div {
      box-shadow: 1px 1px 2px;
      width: 400px;
      height: 65px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(
            circle farthest-side at 0% 50%,
            #fb1 23.5%,
            rgba(240, 166, 17, 0) 0
          )
          21px 30px,
        radial-gradient(
            circle farthest-side at 0% 50%,
            #b71 24%,
            rgba(240, 166, 17, 0) 0
          )
          19px 30px,
        linear-gradient(
            #fb1 14%,
            rgba(240, 166, 17, 0) 0,
            rgba(240, 166, 17, 0) 85%,
            #fb1 0
          )
          0 0,
        linear-gradient(
            150deg,
            #fb1 24%,
            #b71 0,
            #b71 26%,
            rgba(240, 166, 17, 0) 0,
            rgba(240, 166, 17, 0) 74%,
            #b71 0,
            #b71 76%,
            #fb1 0
          )
          0 0,
        linear-gradient(
            30deg,
            #fb1 24%,
            #b71 0,
            #b71 26%,
            rgba(240, 166, 17, 0) 0,
            rgba(240, 166, 17, 0) 74%,
            #b71 0,
            #b71 76%,
            #fb1 0
          )
          0 0,
        linear-gradient(90deg, #b71 2%, #fb1 0, #fb1 98%, #b71 0%) 0 0 #fb1;
      background-size: 40px 60px;
    }
  }
`;

export const FormStyle = styled.div`
  width: 360px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1.5rem;
  box-shadow: 1px 0px 2px;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;

    label{
      margin-bottom: 0.5rem;
    }
  }

  .block{
    display: block;
    color: red;
    margin-top: 0px;
  }
  .hide{
    display: none;
  }
`;
export const Input = styled.input`
  // width: 100%;
  margin-bottom: 1rem;
  border: none;
  height: 48px;
  padding: 5px 10px;
  background: transparent;
  border: 1px solid #111;

  &:focus{
    outline: none;
  }
`;

export const Button = styled.button`
  border: none;
  color: #111;
  background: transparent;
  border: 1px solid #111;
  width: 100px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
