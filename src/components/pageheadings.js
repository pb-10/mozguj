import React from "react"
import styled from "styled-components"
import { Grid, GridList, Typography } from "@material-ui/core"
import withWidth, { isWidthDown } from "@material-ui/core/withWidth"

const GridTitle = styled(({ ...props }) => <Grid {...props} />)`
  padding-top: 5rem;
  color: white;
  z-index: 500;
  @media (max-width: 960px) {
    padding-top: 0;
    text-align: center;
  }
`

const Title = styled.span`
  font-weight: 700;
  padding: 3px;
  background: white;
  color: ${props => props.color};
`

const TypoResp = styled(Typography)`
  max-width: 250px;
  @media (max-width: 960px) {
    max-width: 100%;
  }
`

const PageHeadings = props => {
  const getGridListHeight = () => {
    if (isWidthDown("md", props.width)) {
      return 75
    } else {
      return 100
    }
  }

  return (
    <GridTitle item md={4} sm={12}>
      <GridList cols={1} cellHeight={getGridListHeight()}>
        <Grid item>
          <Typography variant="h5">
            <Title color={props.color}>{props.title}</Title>
          </Typography>
        </Grid>
        <Grid item>
          <TypoResp>{props.description}</TypoResp>
        </Grid>
      </GridList>
    </GridTitle>
  )
}

export default PageHeadings
