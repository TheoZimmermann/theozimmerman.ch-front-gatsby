import React from 'react';
import tw from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';
import {
  ArrowNarrowRightIcon,
} from '@heroicons/react/outline';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../assets/styling/about-accordion.scss';
import BottomLeftBlob from '../assets/images/bottomLeftBlob.svg';
import MyCv from '../assets/downloads/cv-ZimmermannTheo.pdf';
import RenderedMarkdown from '../components/markdown';

const AccordionTitle = tw.h1`
cursor-pointer w-auto border border-transparent  
 transition-all duration-200 ease-in-out 
ml-2
 text-5xl
 sm:text-6xl
 md:text-7xl md:ml-6
 lg:text-8xl
 xl:text-9xl xl:ml-10
 hover:ml-0
 transform translate-y-4 hover:translate-y-0
`;

const AboutContainer = tw.div`
max-w-4xl mx-auto px-4 sm:px-6 mt-16 lg:mt-24 pb-40
`;

const BottomLeftBlobWrapper = tw.div`
fixed left-0 bottom-0 w-auto h-24
sm:h-32
md:h-48
lg:h-52
xl:w-64 xl:h-48 
`;

const AccordionBody = tw.div`
border-l-2 border-primary  pl-6  prose prose-lg text-text-main
`;
const StyledDetails = tw.details`
  py-6 sm:py-8 lg:py-10
`;

const CvLink = tw.a`
  p-4 text-text-main absolute inset-0 top-auto w-full
`;

const StyledArrowIcon = tw.styled(ArrowNarrowRightIcon)`
ml-3 text-primary w-6 h-6
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
        {AboutTiles.map((res) => (
          <div key={res.title}>
            <StyledDetails>
              <summary>
                <AccordionTitle className="accordion-toggle">
                  {res.title}
                </AccordionTitle>
              </summary>
              <AccordionBody className="accordion-body">
                <RenderedMarkdown body={res.body} />
              </AccordionBody>
            </StyledDetails>
          </div>
        ))}
        <BottomLeftBlobWrapper>
          <BottomLeftBlob />

          <CvLink href={MyCv} download className="big-link">
            {' '}
            download my cv
            {' '}
            <StyledArrowIcon />
            {' '}
          </CvLink>

        </BottomLeftBlobWrapper>
      </AboutContainer>
    </Layout>
  );
};

export default AboutPage;
