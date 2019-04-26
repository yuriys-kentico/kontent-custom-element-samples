import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const siteDescription = data.site.siteMetadata.description;
    const elements = data.allElementsJson.edges;

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        description={siteDescription}
      >
        <SEO
          title="Custom element list"
          keywords={[
            `Kentico Cloud`,
            `caas`,
            `javascript`,
            `extensions`,
            `custom elements`,
          ]}
        />
        <h2>Marketplace</h2>
        {elements.map(({ node }) => {
          return (
            <div key={node.id}>
              <a href={node.readmeUrl}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  {node.title}
                </h3>
              </a>
              <p>{node.description}</p>
              <img
                src={node.thumbnailUrl}
                alt={`${node.title} custom element`}
              />
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }

    allElementsJson {
      edges {
        node {
          id
          title
          description
          thumbnailUrl
          readmeUrl
        }
      }
    }
  }
`;
