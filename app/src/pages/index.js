import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const elements = data.allElementsJson.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Custom element list"
          keywords={[`Kentico Cloud`, `caas`, `javascript`, `extensions`, `custom elements`]}
        />
        {elements.map(({ node }) => {
          return (
            <div key={node.id}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                {node.title}
              </h3>
              <p>
                {node.description}
              </p>
              <img src={node.thumbnailUrl} alt={`${node.title} custom element`} />
            </div>
          )
        })}
        <Bio />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
        siteMetadata {
          title
        }
        }

    allElementsJson {
          edges {
        node {
          id
          title
          description
        thumbnailUrl
      }
    }
  }
}
`;
