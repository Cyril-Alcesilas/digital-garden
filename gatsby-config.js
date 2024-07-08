/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `digital garden`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // ...other plugins
    // Transform Markdown files into HTML
    'gatsby-transformer-remark',
    // Optimize and manipulate images
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // Source files from your project directory
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
