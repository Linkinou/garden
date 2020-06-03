/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: "gatsby-plugin-react-svg",
        options: {
            rule: {
                include: /assets/
            }
        }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/blog/`
        }
    },
    'gatsby-transformer-remark'
  ],
  siteMetadata: {
      title: 'Cédric Merouani',
      author: 'Cédric Merouani'
  }
}
