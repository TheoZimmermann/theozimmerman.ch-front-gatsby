/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import tw from 'twin.macro';
import { StaticQuery, graphql } from 'gatsby';
import Marquee from 'react-fast-marquee';
import Layout from '../components/layout';
import SEO from '../components/seo.js';

const MovingTitle = tw.h1`
inline-flex whitespace-nowrap text-9xl px-24 text-primary
`;

const MarqueeWrapper = tw.div`
w-screen flex justify-center items-center h-screen inset-0 absolute z-10 overflow-hidden
`;

const IndexPage = () => (
  <StaticQuery
    query={graphql` 
  query homeQuery {
    strapiHomepage {
      url
      intro
      title
    }
  }
  `}
    render={(data) => (
      <Layout>
        <SEO title="Home" />
        <MarqueeWrapper>
          <Marquee speed={150} gradient={false} className="z-1 w-full h-full flex justify-center items-center">
            <MovingTitle>
              {data.strapiHomepage.title}
            </MovingTitle>
          </Marquee>
        </MarqueeWrapper>
        <p>
          {data.strapiHomepage.intro}
        </p>
      </Layout>
    )}
  />

);

export default IndexPage;
