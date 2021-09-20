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

const BodyWrapper = tw.div`
relative px-4 sm:px-6 lg:px-8 min-h-screen w-full py-6 lg:py-20 z-0
`;

const BodyContainer = tw.div`
text-lg max-w-prose mx-auto w-auto
`;

const HeaderWrapper = tw.div`
sticky inset-0 w-full bottom-auto h-24 flex justify-center items-center z-10
`;

const BlobbyBackgroundHeaderWrapper = tw.div`
    absolute inset-0 w-full h-24 z-10
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
    console.table(toc);
    return (
        <div id="body">
            <HeaderWrapper>
                <BlobbyBackgroundHeaderWrapper>
                    <HeaderBlobbyBackground />
                </BlobbyBackgroundHeaderWrapper>
                <h2 className="text-6xl pt-12 text-center text-text-main z-30">
                    {title}
                </h2>
            </HeaderWrapper>
            <BodyWrapper>
                <div className="sticky inset-0 right-auto bottom-0 w-1/4 p-6 mt-10 w-64">
                    {toc && <ContentsList items={toc} />}
                </div>
                <BodyContainer>
                    <Markdown
                        components={{
                            // Map `h1` (`# heading`) to use `h2`s.
                            h1: 'h2',
                            // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                            em: ({ node, ...props }) => <i style={{ color: 'red' }} {...props} />,
                        }}
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
            </BodyWrapper>
        </div>
    );
};
export default Body;
