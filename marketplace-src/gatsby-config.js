module.exports = {
  siteMetadata: {
    author: `Ondřej Chrastina`,
    title: `Custom Elements`,
    description: `Samples of the HTML web pages that can be used as Custom Element (BETA) Extensions in Kentico Cloud. Custom elements help you with extending the basic functionality of Kentico Cloud UI and thus improving the content editing experience. Custom element is essentially a small HTML application that exists in a sandboxed <iframe> and interacts with the Kentico Cloud app via the Custom Elements API.`,
    siteUrl: `https://kentico.github.io/custom-element-samples/marketplace`,
    social: {
      twitter: `Simply007`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-transformer-json`,
      options: {
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/elements`,
        name: `elements`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-128307780-3`, // Ask https://github.com/Simply007 for access
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/kenticocloud-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
