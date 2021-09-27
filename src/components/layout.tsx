/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import tw from 'twin.macro';
import Header from './header';
import Footer from './footer';
import '../assets/styling/layout.scss';
import '../assets/styling/fonts.scss';

const SiteWrapper = tw.div`
text-text-main  w-screen h-screen
`;

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const data: any = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
    strapiGlobal {
      Header {
        link {
          label
          url
        }
      }
      Footer {
        link {
          label
          url
        }
      }
    }
  }
`);

  const HeaderLinks: Array<{ label: string, url: string }> = data.strapiGlobal.Header.link || [];
  const FooterLinks: Array<{ label: string, url: string }> = data.strapiGlobal.Footer.link || [];

  return (
    <>
      <SiteWrapper className="theme-dark bg-background">
        <Header menuLinks={HeaderLinks} footerLinks={FooterLinks} />
        <main>{children}</main>
        <Footer menuLinks={FooterLinks} />
      </SiteWrapper>
    </>
  );
};

export default Layout;
