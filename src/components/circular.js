import styled from "styled-components"

const SemiCircle = styled.div`
  position: absolute;
  z-index: -1;

  ${props => {
    const color = props.color
    return `background-color: ${color}`
  }};
  @media (min-width: 960px) {
    width: 100vh;
    /* prettier stop */
    ${props => {
      if (props.left) {
        return `border-top-right-radius: 100%; border-bottom-right-radius: 100%; right:0;top: -5vh;height: 110vh;`
      } else {
        return `border-top-left-radius: 100%; border-bottom-left-radius: 100%; left:0;top: -5vh;height: 110vh;`
      }
    }};
  }
  @media (max-width: 960px) {
    top: 75px;
    width: 100vw;
    height: 30vh;
    right: 0;
    left: 0;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
  }
`

const SemiCircleContainer = styled.div`
  position: absolute;
  width: 30%;
  min-height: 100vh;
  top: 0px;
  overflow: hidden;
  ${props => {
    return props.left ? `left:0;` : `right: 0;`
  }};
  @media (max-width: 960px) {
    left: 0;
    right: 0;
    width: 100%;
  }
`
export { SemiCircle, SemiCircleContainer }
