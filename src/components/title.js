// import { Typography } from '@material-ui/core'
import styled from "styled-components"

const Title = styled.span`
  font-weight: 700;
  padding: 3px;
  background: white;
  ${props => {
    const color = props.color
    return `color: ${color};`
  }}
`

export default Title
