import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeBanner from '../components/HomeBanner';
import ProductsList from '../components/ProductsList';
import HomeAbout from '../components/HomeAbout';

export const indexQuery = graphql`
  query Products {
    allContentfulProduct(
      filter: { status: { eq: "active" } }
      sort: { fields: [listingOrder], order: ASC }
    ) {
      edges {
        node {
          id
          title
          slug
          color
          originalPrice
          discountPrice
          featuredImage {
            title
            sizes(maxWidth: 550) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
    contentfulHome {
      homeSliderTitle
      homeSliderSubTitle
      homeSliderImage {
        title
        sizes(maxWidth: 550) {
          ...GatsbyContentfulSizes
        }
      }
      homeIntro {
        homeIntro
      }
    }
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Latest punjabi suits collection"
          description="Latest Punjabi Traditional Suits"
          url={config.siteUrl}
        />
        <StaticQuery
          query={indexQuery}
          render={data => {
            const {
              allContentfulProduct: products,
              contentfulHome: home,
            } = data;

            return (
              <>
                <HomeBanner data={home} />
                <ProductsList products={products.edges} />
                <HomeAbout data={home} />
              </>
            );
          }}
        />
      </Layout>
    );
  }
}
