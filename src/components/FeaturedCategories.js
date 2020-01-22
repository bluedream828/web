import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { find } from 'lodash';
import Img from 'gatsby-image';

import DummyImage from './DummyImage';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 0;
  p {
    color: ${props => props.theme.textColorDark} !important;
  }
  @media only screen and (max-width: 1024px) {
    margin-top: 0;
    margin-bottom: 3rem;
  }
`;

const ItemContainer = styled.article`
  cursor: pointer;
`;

const ImgContainer = styled.div`
  float: right;
  height: auto;
  width: ${props => props.width};
`;

const FeaturedCategoriesItem = ({ title, subtitle, link, image, imgWidth }) => (
  <ItemContainer
    className="tile is-child notification"
    // eslint-disable-next-line prettier/prettier
    onClick={() => navigate(link)}
  >
    <p className="title">{title}</p>
    <p className="subtitle">{subtitle}</p>
    <ImgContainer width={imgWidth}>
      {image ? <Img fluid={image.asset.fluid} /> : <DummyImage />}
    </ImgContainer>
  </ItemContainer>
);

const FeaturedCategories = ({ categories }) => {
  const straps = find(categories, o => o.node.slug.current === 'straps');
  const cases = find(categories, o => o.node.slug.current === 'cases');
  const accessories = find(
    categories,
    o => o.node.slug.current === 'accessories',
  );

  return (
    <Container className="container is-hidden-mobile">
      <section className="section">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-12">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <FeaturedCategoriesItem
                  title="iPhone"
                  subtitle={cases.node.title}
                  imgWidth="400px"
                  link="/cases"
                  image={cases.node.image}
                />
              </div>
              <div className="tile is-parent">
                <FeaturedCategoriesItem
                  title="Apple Watch"
                  subtitle={straps.node.title}
                  imgWidth="400px"
                  link="/straps"
                  image={straps.node.image}
                />
              </div>
            </div>
            <div className="tile is-parent">
              <FeaturedCategoriesItem
                title="Premium Accessories"
                subtitle={accessories.node.title}
                imgWidth="500px"
                link="/accessories"
                image={accessories.node.image}
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default FeaturedCategories;
