import React, { useEffect } from 'react';
import tw from 'twin.macro';
import ScrollMagic from 'scrollmagic';
import Sidebar from '../sidebar';
import NextProjectLink from './next';
import RenderedMarkdown from '../markdown';
import BodyHeader from './bodyHeader';

const BodyWrapper = tw.div`
flex min-h-screen flex-col
`;

const ContentWrapper = tw.div`
w-full  flex-auto flex justify-center h-auto min-h-screen
`;

const BodyContainer = tw.div`
min-w-0 flex-auto relative px-4 sm:px-6 xl:px-8 py-24 lg:pb-16 max-w-prose mx-auto prose lg:prose-xl text-text-main
`;

function initScrollMagicScenes() {
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
    if (typeof window !== 'undefined') {
      initScrollMagicScenes();
    }
  }, []);
  return (
    <BodyWrapper id="body">
      <BodyHeader title={title} />
      <ContentWrapper>
        <BodyContainer className="markdown-container">
          <Sidebar tocItems={toc} />
          <RenderedMarkdown body={body} />
          {next && (
          <NextProjectLink slug={next} />
          )}
        </BodyContainer>
      </ContentWrapper>
    </BodyWrapper>
  );
};
export default Body;
