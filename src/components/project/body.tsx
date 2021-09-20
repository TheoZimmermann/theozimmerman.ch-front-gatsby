import * as React from 'react';
import Markdown from 'react-markdown';
import tw from 'twin.macro';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import {
    ArrowNarrowRightIcon,
} from '@heroicons/react/outline';
import HeaderBlobbyBackground from '../../assets/images/BlobbyHeaderBackground.svg';

const BodyWrapper = tw.div`
relative px-4 sm:px-6 lg:px-8 min-h-screen w-full py-6 lg:py-20 z-0
`;

const BodyContainer = tw.div`
text-lg max-w-prose mx-auto
`;

const HeaderWrapper = tw.div`
sticky inset-0 w-full bottom-auto h-24 -mt-px flex justify-center items-center z-10
`;

const BlobbyBackgroundHeaderWrapper = tw.div`
    absolute inset-0 w-full h-24 z-10
`;

interface BodyProps {
    title: string,
    body: string,
    next: string,
}

const Body = ({ body, next, title }: BodyProps) => (
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
            <BodyContainer>
                <Markdown transformImageUri={(uri) => (uri.startsWith('http') ? uri : `${process.env.API_URL}${uri}`)}>
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

export default Body;
