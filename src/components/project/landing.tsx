import * as React from 'react';
import tw, { css } from 'twin.macro';

const Wrapper = tw.div`
min-h-screen bg-cover bg-top flex items-center
`;

const Container = tw.div`
max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48 h-full w-full  flex-col justify-center 
`;

const MainTitle = tw.h1`
mt-2 text-5xl font-extrabold text-white tracking-tight sm:text-5xl
`;

const Paragraph = tw.p`
mt-2 text-xl font-medium text-white
`;

interface LandingProps {
    project: {
        body: string,
        title: string,
        slug: string,
        strapiId: number,
        shortDescription: string,
        featuredImage: {
            localFile: {
                childImageSharp: {
                    gatsbyImageData: string,
                }
            }
        }
    }
}

const Landing = ({ project }: LandingProps) => (
    <Wrapper
        css={[
            css`
        background-image: url("/landscape.jpg");
      `,
        ]}
    >
        <Container>
            <MainTitle>
                Hey, you seem lost
            </MainTitle>
            <Paragraph>
                Take a deep breath and chill
            </Paragraph>
        </Container>
    </Wrapper>
);
export default Landing;
