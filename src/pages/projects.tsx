import React from 'react';
import tw from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BlobbyBackgroundPattern from '../assets/images/BlobbyBackgroundPattern.svg';

const ProjectsContainer = tw.div`
max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8
`;

const BlobbyBackground = tw.span`
w-full h-full absolute bg-repeat-y bg-cover z-0`;

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
      <BlobbyBackground style={{ backgroundImage: `url(${BlobbyBackgroundPattern})` }} />
      <SEO title="my projects" />
      <h1 className="invisible">
        Projects
      </h1>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Protect your device</h2>
        <p className="mt-4 text-gray-500">
          As a digital creative, your laptop or tablet is at the center of your work. Keep your device safe with a
          fabric sleeve that matches in quality and looks.
        </p>
      </div>
      <ProjectsContainer>
        <div className="mt-16 space-y-16">
          {Projects.map((res, projectIdx) => (
            <div key={res.title} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">
              <div
                className={classNames(
                  projectIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                  'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4',
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">{res.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{res.shortDescription}</p>
              </div>
              <div
                className={classNames(
                  projectIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                  'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8',
                )}
              >
                <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                  <GatsbyImage image={getImage(res.featuredImage.localFile)} alt={res.title} className="object-center object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </ProjectsContainer>
    </Layout>
  );
}

export default ProjectsPage;
