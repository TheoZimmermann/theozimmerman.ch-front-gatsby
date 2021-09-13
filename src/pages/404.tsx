import { Link } from 'gatsby';
import * as React from 'react';
import tw from 'twin.macro';
import Layout from '../components/layout';

const Wrapper = tw.div`
min-h-screen bg-cover bg-top sm:bg-top
`;

const Container = tw.div`
max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48
`;

const SmallTitle = tw.p`
text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide
`;

const MainTitle = tw.h1`
mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl
`;

const Paragraph = tw.p`
mt-2 text-lg font-medium text-black text-opacity-50
`;

const LinkContainer = tw.div`
mt-6
`;

const BackLink = tw.styled(Link)`
inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md 
          text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50
`;

const NotFoundPage = () => (
  <Layout>
    <Wrapper className=" notfoundWrapper ">
      <Container>
        <SmallTitle>404 error</SmallTitle>
        <MainTitle>
          Uh oh! I think you’re lost.
        </MainTitle>
        <Paragraph>
          It looks like the page you’re looking for doesn't exist.
        </Paragraph>
        <LinkContainer>
          <BackLink
            to="/"
          >
            Go back home
          </BackLink>
        </LinkContainer>
      </Container>
    </Wrapper>
  </Layout>
);
export default NotFoundPage;
