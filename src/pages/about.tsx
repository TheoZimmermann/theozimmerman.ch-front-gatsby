import React from 'react';
import tw from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';
import Markdown from 'react-markdown';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../assets/styling/about-accordion.scss';
import BottomLeftBlob from '../assets/images/bottomLeftBlob.svg';

const AccordionTitle = tw.h1`
 text-9xl cursor-pointer w-auto border border-transparent  
 transition-all duration-200 ease-in-out 
 ml-10
 hover:ml-0
 transform translate-y-4 hover:translate-y-0
`;

const AboutContainer = tw.div`
max-w-7xl container mx-auto px-4 sm:px-6 mt-16 lg:mt-24 mb-40
`;

const BottomLeftBlobWrapper = tw.div`
fixed left-0 bottom-0 w-32 h-32 
`;

const AccordionBody = tw.div`
border-l-2 border-primary  pl-6  prose prose-lg
`;
const StyledDetails = tw.details`
  py-6 sm:py-8 lg:py-10
`;

const AboutPage = () => {
  const data: any = useStaticQuery(graphql`
  query aboutQuery {
    strapiAboutPage {
      accordion {
        body
        title
      }
      title
    }
  }
`);

  const AboutTiles: Array<{ body: string, title: string }> = data.strapiAboutPage.accordion || [];
  const PageTitle: string = data.strapiAboutPage.title || '';

  return (
    <Layout>
      <SEO title="About me" />
      <h1 className="invisible">
        {PageTitle}
      </h1>

      <AboutContainer>
        <h4>
          in a hurry ?
          {' '}
          <a href="../assets/downloads/cv-ZimmermannTheo.pdf" download> here is my cv </a>
          {' '}
        </h4>
        {AboutTiles.map((res) => (
          <div key={res.title}>
            <StyledDetails>
              <summary>
                <AccordionTitle className="accordion-toggle">
                  {res.title}
                </AccordionTitle>
              </summary>
              <AccordionBody>
                <Markdown transformImageUri={(uri) => (uri.startsWith('http') ? uri : `${process.env.REACT_IMAGE_BASE_URL}${uri}`)}>
                  {res.body}
                </Markdown>
              </AccordionBody>
            </StyledDetails>
          </div>
        ))}
        <BottomLeftBlobWrapper>
          <BottomLeftBlob />
        </BottomLeftBlobWrapper>
      </AboutContainer>
    </Layout>
  );
};

export default AboutPage;
