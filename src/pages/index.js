import React from "react"
import { Link } from "gatsby"
// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


import Navigation from "../components/Navigation/Navigation";

const langs = ['ru', 'by', 'en'];

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <Navigation />
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <p>{data.contentfulLongText.by.content[0].content[0].value}</p>
      <Link to="/page-2/">Go to page 2</Link>
      <br />
      <Link to="/team-page/">Go to Team</Link>
    </Layout>
  )
}

export const data = graphql`query TextQuery{
         contentfulLongText {
          ru {
            content {
              content {
                value
              }
            }
          }
          en {
            content {
              content {
                value
              }
            }
          }
          by {
            content {
              content {
                value
              }
            }
          }
        }
      }`;

export default IndexPage
