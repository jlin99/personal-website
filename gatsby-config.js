module.exports = {
  siteMetadata: {
    title: "Personal",
  },
  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./src/projects`,
      name: `projects`,
    },
  },
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 700,
          }
        }
      ]
    }
  },
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  ],
}; 
