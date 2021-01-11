require('dotenv').config();

const path = require('path')

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
  {
    resolve: 'gatsby-source-cloudinary',
    options: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      resourceType: 'image',
      prefix: 'fashionshowGallery/',
      maxResults: 25
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: path.join(__dirname, 'src', 'images'),
    },
  },
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'gallery',
      path: path.join(__dirname, 'src', 'images', 'gallery'),
    }
  },
  ],
}; 
