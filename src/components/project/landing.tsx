import * as React from 'react';
import tw from 'twin.macro';
import {
  ArrowNarrowDownIcon,
} from '@heroicons/react/outline';
import scrollTo from 'gatsby-plugin-smoothscroll';
import TopRightBlob from '../../assets/images/ProjectTopRightBlob.svg';
import BottomLeftBlob from '../../assets/images/ProjectBottomLeftBlob.svg';

const Wrapper = tw.div`
relative h-screen w-screen bg-cover  flex justify-center items-center flex-col space-y-20 
`;

const LandingTitle = tw.h1`
text-center text-text-main text-[10vw] z-10 px-[2vw]
`;
const TopRightBlobWrapper = tw.div`
absolute inset-0 left-auto bottom-auto w-[60vw] h-1/2 z-0 flex justify-end items-end
`;

const TagsWrapper = tw.div`
text-center flex justify-center items-center space-x-3 text-sm md:text-base md:space-x-10 font-medium
`;

const BottomLeftBlobWrapper = tw.div`
absolute inset-0 right-auto top-auto w-[35vw] h-64 md:h-1/2 z-20
`;

const BottomLink = tw.button`
mt-[5vh] w-full flex justify-center items-center pb-20 animate-bounce z-10 text-text-main hover:text-primary
`;
interface LandingProps {
    title: string,
    tags: {
        label: string,
    }
}

const Landing = ({ title, tags }: LandingProps) => (
  <Wrapper>
    <TopRightBlobWrapper>
      <TopRightBlob />
    </TopRightBlobWrapper>
    <BottomLeftBlobWrapper>
      <BottomLeftBlob />
    </BottomLeftBlobWrapper>
    <LandingTitle>
      {' '}
      {title}
      {' '}
    </LandingTitle>
    <TagsWrapper>
      {tags.map((tag: {label:string}) => (
        <span key={tag.label}>
          #
          {tag.label}
        </span>
      ))}
    </TagsWrapper>
    <BottomLink onClick={() => scrollTo('#body')}>
      <ArrowNarrowDownIcon className="h-8 w-8" aria-hidden="true" />
    </BottomLink>
  </Wrapper>
);
export default Landing;
