import React, { Fragment } from 'react';
import tw from 'twin.macro';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Popover, Transition } from '@headlessui/react';
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import Logo from '../assets/images/logo.svg';
import ThemeToggle from './themeToggle';

const LinkStyle = tw.styled(AniLink)`
text-base font-medium text-primary block mt-2 
md:text-xl
lg:inline-block md:mt-0 
hover:underline active:text-text-main
`;

const LogoLink = tw.styled(AniLink)`
cursor-pointer 
`;

const StyledContainer = tw.nav`
py-4 z-30 flex flex-row items-center justify-between mx-auto px-4 sm:px-6 mx-auto bg-transparent fixed inset-0 bottom-auto w-full  max-w-7xl
`;

const LinksWrapper = tw.div`
 flex-row space-x-6 sm:space-x-10 mix-blend-difference hidden md:flex
`;

interface HeaderProps {
  menuLinks: Array<{ label: string, url: string }>
  footerLinks: Array<{ label: string, url: string }>
}

const Header = ({ menuLinks, footerLinks }: HeaderProps) => (

  <Popover className="relative w-full">
    <StyledContainer>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <LogoLink
            hex="#ffc701"
            paintDrip
            to="/"
          >
            <Logo />
          </LogoLink>
        </div>
        <LinksWrapper>
          {menuLinks.map((res) => (
            <div key={res.label}>
              <LinkStyle
                activeClassName="active"
                cover
                bg="#ffc701"
                direction="bottom"
                to={res.url}
              >
                {res.label}
              </LinkStyle>
            </div>
          ))}
          <ThemeToggle />
        </LinksWrapper>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-primary hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-8 w-8" aria-hidden="true" />
          </Popover.Button>
        </div>
      </div>
    </StyledContainer>

    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel focus className="absolute top-0 inset-x-0 transition transform origin-top md:hidden z-30">
        <div className="ring-2 ring-primary ring-opacity-5 dark:bg-darkBg bg-white divide-y-2 divide-gray-50 z-20">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <LogoLink
                hex="#ffc701"
                paintDrip
                to="/"
              >
                <Logo />
              </LogoLink>
              <div className="-mr-2">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-primary hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-8 w-8" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-4">
                {menuLinks.map((item) => (
                  <LinkStyle
                    activeClassName="active"
                    cover
                    bg="#ffc701"
                    direction="bottom"
                    to={item.url}
                    key={item.label}
                  >
                    {item.label}
                  </LinkStyle>
                ))}
              </nav>

              <div className="mt-6 px-1 flex justify-start">
                <ThemeToggle />
              </div>
            </div>
          </div>
          <div className="py-6 px-5 flex justify-between w-full flex-row items-center">
            {footerLinks.map((item) => (
              <LinkStyle
                activeClassName="active"
                cover
                bg="#ffc701"
                direction="bottom"
                to={item.url}
                key={item.label}
              >
                <span className="text-sm">
                  {item.label}
                </span>
              </LinkStyle>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
);

export default Header;
