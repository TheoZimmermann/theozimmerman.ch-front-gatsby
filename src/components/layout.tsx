/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import tw from 'twin.macro';
import Header from './header';
import './layout.scss';
import './marquee-animation.css';

const SiteWrapper = tw.div`
text-text-main  w-screen h-screen
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
      }
    }
  `);

  return (
    <SiteWrapper className="theme-dark bg-background">
      <Header menuLinks={data.strapiGlobal.Header.link} />
      <main>{children}</main>
      <footer>
        ©
        {' '}
        {new Date().getFullYear()}
        , Built with
        {' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </SiteWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
