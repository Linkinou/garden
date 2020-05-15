/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
      {
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: /assets/
          }
        }
    },
    'gatsby-plugin-sass',
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/blog/`
        }
    },
    `gatsby-transformer-remark`
  ],
  siteMetadata: {
      title: 'Cédric Merouani',
      author: 'Cédric Merouani'
  }
}
