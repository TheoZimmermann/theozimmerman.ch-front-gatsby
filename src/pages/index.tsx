/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import tw from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';
import Marquee from 'react-fast-marquee';
import Markdown from 'react-markdown';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HomeBlob from '../assets/images/homeBlob.svg';

const MovingTitle = tw.h1`
inline-flex whitespace-nowrap text-9xl px-24 text-primary mix-blend-difference
`;

const MarqueeWrapper = tw.div`
w-screen flex justify-center items-center h-screen inset-0 absolute overflow-hidden
`;

const BlobWrapper = tw.div`
w-screen  h-screen inset-0 absolute left-auto flex justify-end items-center pr-20 z-20 dark:mix-blend-difference mix-blend-soft-light
`;

const IntroWrapper = tw.div`
 h-auto absolute inset-0 top-auto 
text-text-main text-lg text-2xl z-40 whitespace-pre
container mx-auto px-4 sm:px-6 w-full py-6 mb-10
`;

const IndexPage = () => {
  const data: any = useStaticQuery(graphql`
  query homeQuery {
    strapiHomepage {
      url
      intro
      title
    }
  }
`);

  const MovingTitleString: string = data.strapiHomepage.title || 'yoyo';
  const Intro: string = data.strapiHomepage.intro || '';

  return (
    <Layout>
      <SEO title="Home" />
      <BlobWrapper>
        <HomeBlob />
      </BlobWrapper>
      <MarqueeWrapper>
        <Marquee speed={100} gradient={false} className="z-1 w-full h-full ">
          <MovingTitle>
            {MovingTitleString}
          </MovingTitle>
        </Marquee>
      </MarqueeWrapper>
      <IntroWrapper>
        <Markdown>
          {Intro}
        </Markdown>
      </IntroWrapper>
    </Layout>
  );
};
export default IndexPage;
