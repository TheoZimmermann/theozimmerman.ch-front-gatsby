import React from 'react';
import tw, { css } from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../assets/styling/blobyCircleImage.scss';
import BlobbyBackgroundPattern from '../assets/images/BlobbyBackgroundPattern.svg';

const ProjectsContainer = tw.div`
max-w-5xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8  z-20
`;

const BlobbyBackgroundWrapper = tw.div`
absolute w-screen h-screen inset-0 z-0 bg-repeat
`;

const ProjectItemContainer = ({ projectIdx: number }) => `
lg:col-start-1 flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8
${projectIdx % 2 === 0`
   lg:col-start-6 xl:col-start-5
  `}
`;

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

function ProjectsPage() {
  const data: any = useStaticQuery(graphql`
  query projectsQuery {
    allStrapiProject {
        nodes {
          body
          title
          shortDescription
          featuredImage {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
  }
`);

  const Projects: Array<{ body: string; title: string; shortDescription: string; featuredImage: any; }> = data.allStrapiProject.nodes || [];
  return (
    <Layout>
      <BlobbyBackgroundWrapper css={[
        css`
        background-image: url(../assets/images/BlobbyBackgroundPattern.svg);
      `,
      ]}
      >
        {/* {{ <BlobbyBackgroundPattern /> }}  */}
      </BlobbyBackgroundWrapper>
      <SEO title="my projects" />
      <h1 className="invisible">
        Projects
      </h1>
      <ProjectsContainer>
        <div className="mt-16 space-y-16">
          {Projects.map((res, projectIdx) => (
            <a key={res.title} href="/about" className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center project-link">
              <div
                className={classNames(
                  projectIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                  ' mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4',
                )}
              >
                <h2 className="text-4xl text-primary">
                  {res.title}
                </h2>
                <p className="mt-2 text-sm text-text-main">
                  {res.shortDescription}
                  <span aria-hidden="true"> &rarr;</span>
                </p>
              </div>
              <div
                className={classNames(
                  projectIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                  'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8',
                )}
              >
                <div className="circle">
                  <GatsbyImage image={getImage(res.featuredImage.localFile)} alt={res.title} className="object-center object-cover" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </ProjectsContainer>
    </Layout>
  );
}

export default ProjectsPage;
