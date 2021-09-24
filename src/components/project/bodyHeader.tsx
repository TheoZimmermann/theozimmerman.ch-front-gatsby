import React from 'react';
import tw from 'twin.macro';
import HeaderBlobbyBackground from '../../assets/images/BlobbyHeaderBackground.svg';

// Header styling
const HeaderWrapper = tw.div`
sticky inset-0 w-full bottom-auto h-24 flex justify-center items-center -mt-px pt-px
z-10 
`;

const BlobbyBackgroundHeaderWrapper = tw.div`
    absolute inset-0 w-full h-24 sm:h-32 md:h-40 z-10
`;

const StyledTitle = tw.h2`
text-4xl md:text-6xl md:pt-12 text-center text-text-main z-30
`;

interface BodyHeaderProps {
    title: string,
}

const BodyHeader = ({
  title,
}: BodyHeaderProps) => (
  <HeaderWrapper id="pinned-header">
    <BlobbyBackgroundHeaderWrapper>
      <HeaderBlobbyBackground />
    </BlobbyBackgroundHeaderWrapper>
    <StyledTitle>
      {title}
    </StyledTitle>
  </HeaderWrapper>
);

export default BodyHeader;
