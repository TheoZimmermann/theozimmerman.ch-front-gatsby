import React from 'react';
import tw from 'twin.macro';
import { ContentsList } from './tocList';

// Sidebar styling
const SidebarContainer = tw.div`
hidden xl:text-sm xl:block absolute inset-auto -left-64 flex-none w-64 pl-8 mr-8
`;

const StyledSidebar = tw.div`
w-52 flex-col justify-between pt-4 pb-6 text-base px-4 bg-primary bg-opacity-10 
`;

const StyledTocTitle = tw.span`
text-text-main uppercase font-bold mb-2 text-sm
`;

interface SidebarProps {
    tocItems: Array<{ url: string, title: string, items?: Array<{ url: string, title: string }> }>
}

const Sidebar = ({
  tocItems,
}: SidebarProps) => (
  <SidebarContainer id="pinned-sidebar">
    <StyledSidebar className="project-sidebar ">
      <StyledTocTitle> Table of contents </StyledTocTitle>
      {tocItems && <ContentsList items={tocItems} />}
    </StyledSidebar>
  </SidebarContainer>
);

export default Sidebar;
