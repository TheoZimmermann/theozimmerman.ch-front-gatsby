import React from 'react';
import tw from 'twin.macro';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import {
  ArrowNarrowRightIcon,
} from '@heroicons/react/outline';

const StyledLink = tw.styled(AniLink)`
text-text-main hover:text-primary  text-center w-full my-20 text-2xl flex justify-center items-center
`;

const StyledIcon = tw.styled(ArrowNarrowRightIcon)`
ml-3 text-primary w-6 h-6
`;

interface NextProjectLinkProps {
    slug: string,
}

const NextProjectLink = ({
  slug,
}: NextProjectLinkProps) => (
  <StyledLink
    className="big-link"
    cover
    bg="#ffc701"
    direction="left"
    key={`linkTo${slug}`}
    to={`/projects/${slug}`}
  >
    {' '}
    Next Project
    <StyledIcon />
  </StyledLink>
);

export default NextProjectLink;
