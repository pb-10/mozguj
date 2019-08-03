import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { SemiCircle, SemiCircleContainer } from "../components/circular"
import { Grid, GridList, Typography } from "@material-ui/core"
import Title from "../components/title"
import Img from "gatsby-image"
import PageHeadings from "../components/pageheadings"

const Clubs = ({ data }) => (
  <Layout>
    <SemiCircleContainer left>
      <SemiCircle color="#998b04" left />
    </SemiCircleContainer>
    <Grid container>
      <PageHeadings
        title="Clubs"
        description="We have a lot of clubs find yours"
        color="#998b04"
      />
      <Grid item md={8} style={{ textAlign: "center" }}>
        <GridList cols={5} cellHeight={150}>
          {data.allClubsJson.edges.map(({ node }) => (
            <Grid key={node.image.id}>
              <Typography>
                {" "}
                <Title
                  style={{
                    background: "black",
                    color: "white",
                    fontSize: "60%",
                  }}
                >
                  {node.college}
                </Title>
              </Typography>
              <Img
                fixed={node.image.childImageSharp.fixed}
                style={{ borderRadius: "50%", height: 70 }}
              />
              <Typography style={{ fontSize: "80%" }}> {node.name}</Typography>
              <Typography variant="h6">
                <Title
                  style={{
                    background: "black",
                    color: "white",
                    fontSize: "50%",
                  }}
                >
                  {node.socials}
                </Title>
              </Typography>
            </Grid>
          ))}
        </GridList>
      </Grid>
    </Grid>
  </Layout>
)

export const query = graphql`
  query Clubs {
    allClubsJson {
      edges {
        node {
          id
          college
          image {
            id
            childImageSharp {
              fixed(height: 70, width: 70) {
                src
                ...GatsbyImageSharpFixed
              }
            }
          }
          name
          socials
        }
      }
    }
  }
`

export default Clubs
