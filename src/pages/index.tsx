import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import Helmet from "../components/helmet";

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
  }
`;

const IndexPage = ({ data }: any) => {
  console.log(data);
  return (
    <Layout>
      <Helmet />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>

      <h1>Blog posts</h1>
      {data.allSanityPost.edges.map(({ node }: any) => {
        return (
          <div key={node.id}>
            <h1>{node.title}</h1>
            <img src={node.author.image.asset.fixed.src} />
          </div>
        );
      })}
      <h2 />
    </Layout>
  );
};
export default IndexPage;
