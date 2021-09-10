/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import tw from 'twin.macro';
import { StaticQuery, graphql } from 'gatsby';
import Marquee from 'react-fast-marquee';
import Layout from '../components/layout';
import SEO from '../components/seo.js';

const MovingTitle = tw.span`
inline-flex whitespace-nowrap text-8xl px-24
`;

const MarqueeWrapper = tw.div`
absolute inset-y-1/4 inset-x-0 z-10
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
        <Marquee gradient={false} className="fixed inset-0 w-screen h-screen flex justify-center items-center">
          <h1 className="marquee__inner text-primary" aria-hidden="true">
            <MovingTitle>
              {data.strapiHomepage.title}
            </MovingTitle>
          </h1>
        </Marquee>
        <p>
          {data.strapiHomepage.intro}
        </p>
      </Layout>
    )}
  />

);

export default IndexPage;
