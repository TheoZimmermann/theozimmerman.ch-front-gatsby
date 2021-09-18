import * as React from 'react';
import tw from 'twin.macro';

const Wrapper = tw.p`
mt-2 text-xl font-medium text-white
`;

interface NextProjectLinkProps {
    next: any
}

const NextProjectLink = ({ next }: NextProjectLinkProps) => (
    <Wrapper>
        {next && (
            <Link to={next.fields.slug}>
                <span>
                    {next.frontmatter.title}
                    {' '}
                    →
                </span>
            </Link>
        )}
    </Wrapper>
);
export default NextProjectLink;
