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
inline-flex whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl px-24 text-primary mix-blend-difference
`;

const MarqueeWrapper = tw.div`
w-screen flex justify-center items-center h-screen inset-0 absolute overflow-hidden
`;

const BlobWrapper = tw.div`
w-screen h-screen inset-0 absolute left-auto flex justify-center md:justify-end items-center px-10 md:pl-0 md:pr-20 z-20 dark:mix-blend-difference mix-blend-screen z-30 pointer-events-none
`;

const IntroWrapper = tw.div`
 h-auto absolute inset-0 top-auto 
text-text-main z-40 whitespace-pre-wrap
pointer-events-none
w-full mb-8 pb-6
 md:mb-10
 lg:mb-0
`;

const IntroMarkdown = tw.div`
w-full px-4 lg:px-6 text-base text-text-main
max-w-7xl mx-auto flex flex-col
 sm:text-lg 
md:text-2xl 
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
        <IntroMarkdown className="intro-markdown">
          <Markdown>
            {Intro}
          </Markdown>
        </IntroMarkdown>
      </IntroWrapper>
    </Layout>
  );
};
export default IndexPage;
