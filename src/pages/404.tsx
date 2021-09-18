import { Link } from 'gatsby';
import * as React from 'react';
import tw, { css, theme } from 'twin.macro';
import Layout from '../components/layout';
import '../assets/styling/not-found.scss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Wrapper = tw.div`
min-h-screen bg-cover bg-top
`;

const Container = tw.div`
max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48 h-full w-full flex flex-col justify-center items-center
`;

const MainTitle = tw.h1`
mt-2 text-5xl font-extrabold text-white tracking-tight sm:text-5xl
`;

const Paragraph = tw.p`
mt-2 text-xl font-medium text-white
`;

const LinkContainer = tw.div`
mt-6
`;

const BackLink = tw.styled(AniLink)`
inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md 
          text-black bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50
`;

const NotFoundPage = () => (
  <Layout>
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
        <LinkContainer>
          <BackLink
            to="/"
            hex="#fefaec"
            paintDrip
          >
            Go back home
          </BackLink>
        </LinkContainer>
      </Container>
    </Wrapper>
  </Layout>
);
export default NotFoundPage;
