import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import img from '../../static/images/home/hero.jpeg';
// import Button from './Button';

const Wrapper = styled.div`
  height: 35rem;
  @media only screen and (max-width: 768px) {
    height: 26rem;
  }
  .is-4 {
    background-color: #384aeb;
    background-image: url('/images/home/hero.jpeg');
  }
  .content {
    background-color: #f1f6f7;
  }
`;

const Content = styled.div`
  margin: 9% 10% 0 21%;
  @media only screen and (max-width: 768px) {
    margin: 8% 4% 0 9%;
  }
  h1 {
    margin-right: 6rem;
    margin-top: 1rem;
    font-size: 3rem;
    @media only screen and (max-width: 768px) {
      font-size: 1.5rem;
      margin-right: 0rem;
      margin-top: 1rem;
    }
  }
  p {
    margin-right: 9rem;
    margin-bottom: 2rem;
    @media only screen and (max-width: 768px) {
      margin-right: 0rem;
    }
  }
`;

const heroQuery = graphql`
  {
    allContentfulHomePageTopSection {
      edges {
        node {
          subtitle
          title
          description {
            description
          }
        }
      }
    }
  }
`;

const Hero = () => (
  <Wrapper className="columns">
    <div className="column is-4 is-hidden-mobile">
      {/* <ImageWrapper>
        <img src={img} alt="Cart With Things" />
      </ImageWrapper> */}
    </div>
    <StaticQuery
      query={heroQuery}
      render={data => {
        const heroData = data.allContentfulHomePageTopSection.edges[0];
        return (
          <div className="column content">
            <Content>
              <h2 className="is-size-3">{heroData.node.title}</h2>
              <h1 className="title has-text-dark has-text-weight-bold is-uppercase">
                {heroData.node.subtitle}
              </h1>
              <p className="has-text-weight-semibold">
                {heroData.node.description.description}
              </p>
            </Content>
          </div>
        );
      }}
    />
  </Wrapper>
);

export default Hero;
