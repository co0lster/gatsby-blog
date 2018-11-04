module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
}

  