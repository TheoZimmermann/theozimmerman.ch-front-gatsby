import * as React from 'react';
import tw from 'twin.macro';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import {
  XIcon,
} from '@heroicons/react/outline';
import ThemeToggle from '../themeToggle';
import Logo from '../../assets/images/logo.svg';
import '../../assets/styling/dark-light-body.scss';

const LogoLink = tw.styled(AniLink)`
cursor-pointer  mt-2 md:mt-6 
`;
const CloseLink = tw.styled(AniLink)`
cursor-pointer rounded-full border border-2 border-text-main w-8 h-8  md:w-12 md:h-12 text-text-main flex justify-center items-center hover:bg-text-main hover:text-primary
`;

const StyledXIcon = tw.styled(XIcon)`
h-6 w-6 md:h-8 md:w-8
`;

const StyledWrapper = tw.div`
fixed inset-0 bottom-auto px-10 flex justify-between items-center z-40
`;

const HeaderActions = tw.div`
flex flex-row space-x-3 justify-center items-center
`;

const ToggleWrapper = tw.span`
hidden sm:flex
`;

const close = () => (
  <StyledWrapper>
    <LogoLink
      hex="#ffc701"
      paintDrip
      to="/"
    >
      <Logo />
    </LogoLink>
    <HeaderActions>
      <ToggleWrapper>
        <ThemeToggle />
      </ToggleWrapper>
      <CloseLink
        bg="#ffc701"
        cover
        direction="right"
        to="/projects"
      >
        <span className="sr-only">Close menu</span>
        <StyledXIcon aria-hidden="true" />
      </CloseLink>
    </HeaderActions>
  </StyledWrapper>
);
export default close;
