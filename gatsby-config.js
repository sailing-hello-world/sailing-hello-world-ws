const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: "Sailing Hello World"
  },
  plugins: [
    "gatsby-plugin-typescript",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "mg9bcl14",
        dataset: "production",
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"
  ]
};
