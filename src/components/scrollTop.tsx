import React, { useState, useEffect } from 'react';
import tw from 'twin.macro';

import {
  ArrowNarrowUpIcon,
} from '@heroicons/react/outline';

const StyledButton = tw.button`
z-10 fixed bottom-[2vh] bg-primary hover:bg-text-main hover:text-primary sm:right-5 lg:right-8
`;

const StyledIcon = tw.styled(ArrowNarrowUpIcon)`
ml-3 text-text-main w-6 h-6
`;

const Scroll = ({
  showBelow,
}) => {
  const [show, setShow] = useState(!showBelow);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else if (show) setShow(false);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <>
      {show
                && (
                <StyledButton onClick={handleClick} type="button">
                  <StyledIcon />
                </StyledButton>
                )}
    </>
  );
};
export default Scroll;
