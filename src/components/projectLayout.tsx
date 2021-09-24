import React, { ReactNode } from 'react';
import tw from 'twin.macro';
import '../assets/styling/layout.scss';
import Header from './project/landingHeader';

const SiteWrapper = tw.div`
 text-text-main min-h-full
 `;

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <SiteWrapper className="theme-dark bg-background">
      <Header />
      <main>{children}</main>
    </SiteWrapper>
  </>
);

export default Layout;
