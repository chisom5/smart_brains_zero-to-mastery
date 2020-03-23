import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(89deg, #ff5edf 0%, #04c8de 100%);
  position: relative;
  z-index: 1;

  .particle {
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    z-index: -1;
  }
`;
export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem;

  .logo {
    width: 120px;
    height: auto;
    padding: 1rem 0.4rem;
    background: transparent;
    box-shadow: 1px 0px 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #align-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 2rem;

    #rank{
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #ffffff;
      margin-bottom:0.5rem;

      p{
        margin: 0px;
        letter-spacing: 2px;
      }
    }
  }
`;
