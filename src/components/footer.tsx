import { Link } from 'gatsby';
import React from 'react';
import { useLocation } from '@reach/router';
import tw from 'twin.macro';

const LinkStyle = tw.styled(Link)`
text-primary block mt-2 lg:inline-block lg:mt-0 hover:underline font-medium text-base
`;

const StyledFooter = tw.footer`
z-20 max-w-7xl container mx-auto px-4 sm:px-6
`;

const FooterMenuWrapper = tw.div`
w-full justify-end flex flex-row space-x-6 font-bold
`;

interface FooterProps {
  menuLinks: Array<{ label: string, url: string }>,
}

const Footer = ({ menuLinks }: FooterProps) => {
  const location = useLocation();
  return (
    <StyledFooter className={`${location.pathname === '/' ? 'absolute inset-0 top-auto mb-6 mx-auto' : ''}`}>
      <FooterMenuWrapper>
        {menuLinks.map((res) => (
          <div key={res.label}>
            <LinkStyle
              to={res.url}
            >
              {res.label}
            </LinkStyle>
          </div>
        ))}
      </FooterMenuWrapper>
    </StyledFooter>
  );
};
export default Footer;
