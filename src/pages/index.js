import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="mountain"
        src="../images/mountain.jpeg"
      />
    </Layout>
  )
}

export default IndexPage
