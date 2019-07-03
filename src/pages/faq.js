import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { SemiCircle, SemiCircleContainer } from "../components/circular"
import { Grid, GridList, Typography } from "@material-ui/core"
import Title from "../components/title"

const FAQ = ({ data }) => (
  <Layout>
    <SemiCircleContainer left>
      <SemiCircle color="#992c03" left />
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
              <Title color="#992c03">FAQ</Title>
            </Typography>
          </Grid>
          <Grid item>
            <Typography style={{ maxWidth: 250 }}>
              We get asked a lot of questions, here's an attempt to answering
              those.
            </Typography>
          </Grid>
        </GridList>
      </Grid>
      <Grid item md={8}>
        <GridList cols={2} cellHeight={100}>
          {/* Mapping the fetched data to the Grid component */}
          {data.allFaqJson.edges.map(({ node }) => (
            <Grid item key={node.id}>
              {/* Make the changes here */}> {node.ques} <br />- {node.ans}
            </Grid>
          ))}
        </GridList>
      </Grid>
    </Grid>
  </Layout>
)

// Fetches the ques and the answers from ./data/faq.json
export const query = graphql`
  query faqQuery {
    allFaqJson {
      edges {
        node {
          id
          ques
          ans
        }
      }
    }
  }
`

export default FAQ
