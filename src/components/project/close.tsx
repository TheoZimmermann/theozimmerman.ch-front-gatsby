import * as React from 'react';
import tw from 'twin.macro';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import {
  XIcon,
} from '@heroicons/react/outline';
import ThemeToggle from '../themeToggle';
import Logo from '../../assets/images/logo.svg';

const LogoLink = tw.styled(AniLink)`
cursor-pointer  mt-2 md:mt-6 
`;
const CloseLink = tw.styled(AniLink)`
cursor-pointer rounded-full border border-2 border-text-main w-8 h-8  md:w-12 md:h-12 text-text-main flex justify-center items-center hover:bg-text-main hover:text-primary
`;

const CloseWrapper = tw.div`
fixed inset-0 bottom-auto px-10 flex justify-between items-center z-30
`;

const close = () => (
  <CloseWrapper>
    <LogoLink
      hex="#ffc701"
      paintDrip
      to="/"
    >
      <Logo />
    </LogoLink>
    <div className="flex flex-row space-x-3 justify-center items-center">
      <span className="hidden sm:flex">
        <ThemeToggle />
      </span>
      <CloseLink
        bg="#ffc701"
        cover
        direction="right"
        to="/projects"
      >
        <span className="sr-only">Close menu</span>
        <XIcon className="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
      </CloseLink>
    </div>
  </CloseWrapper>
);
export default close;
