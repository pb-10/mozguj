import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { Grid, GridList } from "@material-ui/core"

const FAQ = ({ data }) => (
  <Layout>
    <GridList cols={2} cellHeight={100}>
      {/* Mapping the fetched data to the Grid component */}
      {data.allFaqJson.edges.map(({ node }) => (
        <Grid item key={node.id}>
          {/* Make the changes here */}
          Ques: {node.ques} <br />
          Ans: {node.ans}
        </Grid>
      ))}
    </GridList>
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
