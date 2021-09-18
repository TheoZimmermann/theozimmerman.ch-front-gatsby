import React, { ReactNode } from 'react';
import tw from 'twin.macro';
import '../assets/styling/layout.scss';
import CloseProject from './project/close';

const SiteWrapper = tw.div`
 text-text-main  w-screen h-screen
 `;

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
    <>
        <SiteWrapper className="theme-dark bg-background">
            <CloseProject />
            <main>{children}</main>
        </SiteWrapper>
    </>
);

export default Layout;
