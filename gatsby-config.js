module.exports = {
  siteMetadata: {
    title: 'Kickoff GatsbyJs',
    author: 'Parminder Klair',
    description:
      'A starting point using ReactJs, bundled with awesome GatsbyJs.',
    siteUrl: 'https://www.mysite.com',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-feed',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
  ],
};
