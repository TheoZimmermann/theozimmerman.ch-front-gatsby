import React, { useEffect } from 'react';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeFigure from 'rehype-figure';
import tw from 'twin.macro';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import ScrollMagic from 'scrollmagic';
import {
  ArrowNarrowRightIcon,
} from '@heroicons/react/outline';
import { ContentsList } from './tocList';
import HeaderBlobbyBackground from '../../assets/images/BlobbyHeaderBackground.svg';

const ContentWrapper = tw.div`
w-full  flex-auto flex justify-center h-auto min-h-screen
`;

const BodyContainer = tw.div`
min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16 max-w-prose ml-12 mr-auto prose lg:prose-xl text-text-main
`;

const HeaderWrapper = tw.div`
sticky inset-0 w-full bottom-auto h-24 flex justify-center items-center -mt-px pt-px
z-10 
`;

const BlobbyBackgroundHeaderWrapper = tw.div`
    absolute inset-0 w-full h-24 sm:h-32 md:h-40 z-10
`;

interface BodyProps {
    title: string,
    body: string,
    next: string,
    toc: Array<{ url: string, title: string, items?: Array<{ url: string, title: string }> }>
}

const Body = ({
  body, next, title, toc,
}: BodyProps) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const controller = new ScrollMagic.Controller();
      const element = document.querySelector('#body');
      const height = element.clientHeight;
      const headerScene = new ScrollMagic.Scene({ triggerElement: '#body', duration: height, triggerHook: 'onLeave' })
        .setPin('#pinned-header', {
          pushFollowers: false,
        })
        .addTo(controller);

      const sidebarScene = new ScrollMagic.Scene({ triggerElement: '#body', duration: height, triggerHook: 'onLeave' })
        .setPin('#pinned-sidebar', {
          pushFollowers: false,
        })
        .addTo(controller);
    }
  }, []);
  return (
    <div id="body" className="flex min-h-screen flex-col">
      <HeaderWrapper id="pinned-header">
        <BlobbyBackgroundHeaderWrapper>
          <HeaderBlobbyBackground />
        </BlobbyBackgroundHeaderWrapper>
        <h2 className="text-4xl md:text-6xl md:pt-12 text-center text-text-main z-30">
          {title}
        </h2>
      </HeaderWrapper>
      <ContentWrapper id="content-wrapper">
        <div
          id="pinned-sidebar"
          className="hidden xl:text-sm xl:block flex-none w-64 pl-8 mr-8"
        >
          <div
            className="w-40 flex-col justify-between pt-24 pb-6 top-20 project-sidebar text-base "
          >
            <span className="text-text-main uppercase font-bold mb-2 text-sm"> Table of contents </span>
            {toc && <ContentsList items={toc} />}
          </div>
        </div>
        <BodyContainer className="markdown-container">
          <Markdown
            rehypePlugins={[rehypeHighlight, rehypeSlug, rehypeFigure]}
            transformImageUri={(uri) => (uri.startsWith('http') ? uri : `${process.env.API_URL}${uri}`)}
          >
            {body}
          </Markdown>

          {next && (
          <AniLink
            class="big-link text-text-main  text-center w-full my-20 text-2xl flex justify-center items-center"
            cover
            bg="#ffc701"
            direction="left"
            key={`linkTo${next}`}
            to={`/projects/${next}`}
          >
            {' '}
            Next Project
            <ArrowNarrowRightIcon className="ml-3 text-primary w-6 h-6" />
          </AniLink>
          )}
        </BodyContainer>
      </ContentWrapper>

    </div>
  );
};
export default Body;
