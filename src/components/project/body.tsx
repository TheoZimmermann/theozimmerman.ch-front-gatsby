import * as React from 'react';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import tw from 'twin.macro';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import {
  ArrowNarrowRightIcon,
} from '@heroicons/react/outline';
import { ContentsList } from './tocList';
import HeaderBlobbyBackground from '../../assets/images/BlobbyHeaderBackground.svg';

const ContentWrapper = tw.div`
min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible flex justify-center
`;

const BodyContainer = tw.div`
min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16 max-w-prose mr-auto prose lg:prose-xl text-text-main
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
}: BodyProps) => (
  <div id="body" className="flex flex-col">
    <HeaderWrapper>
      <BlobbyBackgroundHeaderWrapper>
        <HeaderBlobbyBackground />
      </BlobbyBackgroundHeaderWrapper>
      <h2 className="text-4xl md:text-6xl md:pt-12 text-center text-text-main z-30">
        {title}
      </h2>
    </HeaderWrapper>
    <ContentWrapper>
      <div className="flex">
        <div className="hidden md:text-base md:block flex-none w-40 -ml-32">
          <div className="project-sidebar flex flex-col justify-between overflow-y-auto sticky max-h-(screen-18) pt-24 pb-6 top-20">
            <span className="text-text-main uppercase font-bold mb-2 text-sm"> Table of contents </span>
            {toc && <ContentsList items={toc} />}
          </div>
        </div>
        <BodyContainer className="markdown-container">
          <Markdown
            rehypePlugins={[rehypeHighlight, rehypeSlug]}
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

      </div>

    </ContentWrapper>

  </div>
);
export default Body;
