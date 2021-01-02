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
  `gatsby-transformer-remark`,],
};
