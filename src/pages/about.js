import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { SemiCircle, SemiCircleContainer } from "../components/circular"
import { Grid, GridList, Typography } from "@material-ui/core"
import Title from "../components/title"
import TextMobileStepper from "../components/slider"

const About = ({ data }) => (
  <Layout>
    <SemiCircleContainer left>
      <SemiCircle color="#0f7aa8" left />
    </SemiCircleContainer>
    <Grid container>
      <Grid
        item
        md={4}
        style={{
          textAlign: "left",
          paddingTop: "5rem",
          color: "white",
          zIndex: 500,
        }}
      >
        <GridList cols={1} cellHeight={100}>
          <Grid item>
            <Typography variant="h5">
              <Title color="#0f7aa8">About</Title>
            </Typography>
            <Typography variant="h6" style={{ fontWeight: 1000 }}>
              Mozilla Gujarat
            </Typography>
            <Typography variant="h6">
              The most diverse Mozilla local community
            </Typography>
          </Grid>
          <Grid item></Grid>
          <Grid item>
            <Typography style={{ maxWidth: 250 }}>
              We get asked a lot of questions, here's an attempt to answering
              those.
            </Typography>
          </Grid>
        </GridList>
      </Grid>
      <Grid item md={8}>
        <GridList cols={2} cellHeight={200}>
          <TextMobileStepper></TextMobileStepper>
        </GridList>
      </Grid>
    </Grid>
  </Layout>
)

export default About
