import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import tw from 'twin.macro';

const StyledLi = tw.li`
whitespace-pre-wrap overflow-ellipsis overflow-hidden
`;

const StyledButton = tw.button`
cursor-pointer text-primary focus:underline 
`;

export const ContentsList = ({ items }) => (
  <ul>
    {items.map((item: {url: string, title: string}) => <ContentsItem key={`${item.url}-item`} item={item} />)}
  </ul>
);

const ContentsItem = ({ item }) => (
  <StyledLi>
    <StyledButton onClick={() => scrollTo(item.url)}>{item.title}</StyledButton>
    {item.items && item.items.length && (
    <ContentsList key={`${item.url}-list`} items={item.items} />
    )}
  </StyledLi>
);
