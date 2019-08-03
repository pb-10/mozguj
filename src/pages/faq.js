import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { SemiCircle, SemiCircleContainer } from "../components/circular"
import { Grid, GridList } from "@material-ui/core"
import PageHeadings from "../components/pageheadings"

const desc =
  "We get asked a lot of questions, here's an attempt to answering those."

const FAQ = ({ data }) => (
  <Layout>
    <SemiCircleContainer left>
      <SemiCircle color="#992c03" left />
    </SemiCircleContainer>
    <Grid container>
      <PageHeadings title="FAQ" description={desc} color="#992c03" />
      <Grid item md={8} sm={12}>
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
