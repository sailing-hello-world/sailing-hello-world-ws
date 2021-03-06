import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PageWideSection from "../ui/PageWideSection";
import ColumnSection from "../ui/ColumnSection";

export const query = graphql`
  query BlogPostQuery {
    allSanityPost {
      totalCount
      edges {
        node {
          title
          publishedAt
          id
          author {
            name
            image {
              asset {
                fixed(width: 200) {
                  src
                }
              }
            }
          }
        }
      }
    }
    file(relativePath: { eq: "bobby-burch-319840-unsplash.jpg" }) {
      childImageSharp {
        fluid(rotate: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = ({ data }: any) => {
  return (
    <Layout>
      <ColumnSection>
        <h1>Blog posts</h1>
        {data.allSanityPost.edges.map(({ node }: any) => {
          return (
            <div key={node.id}>
              <h1>{node.title}</h1>
              <img src={node.author.image.asset.fixed.src} />
            </div>
          );
        })}
      </ColumnSection>
      <PageWideSection height={400}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </PageWideSection>
    </Layout>
  );
};
export default IndexPage;
