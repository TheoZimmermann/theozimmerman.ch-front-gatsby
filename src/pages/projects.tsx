import React from 'react';
import tw from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../assets/styling/blobyCircleImage.scss';

const ProjectsContainer = tw.div`
max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-3xl lg:px-8  z-30
`;

const StyledProjectLink = tw.styled(AniLink)`
flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center hover:no-underline 
`;

const ProjectItemContainer = ({ projectIdx: number }) => `
lg:col-start-1 flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8 z-30
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
        edges {
          node {
          body
          title
          slug
          strapiId
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
  }
`);

  const Projects: Array<
  {node:
    {
      body: string;
      title: string;
      slug: string, shortDescription: string;
      featuredImage: any;
    }
  }
  > = data.allStrapiProject.edges || [];
  return (
    <Layout>
      <SEO title="my projects" />
      <h1 className="invisible">
        Projects
      </h1>
      <ProjectsContainer>
        <div className="mt-16 space-y-16 lg:space-y-32">
          {Projects.map((res, projectIdx) => (
            <StyledProjectLink
              cover
              bg="#ffc701"
              direction="left"
              to={`${res.node.slug}`}
              key={res.node.title + projectIdx.toString()}
              className="project-link group"
            >
              <div
                className={classNames(
                  projectIdx % 2 === 0 ? 'lg:col-start-1  lg:justify-end lg:text-right' : 'lg:text-left lg:justify-start lg:col-start-8 xl:col-start-9',
                  ' flex flex-col justify-center mt-6 text-center lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4 z-20',
                )}
              >
                <h2 className="group-hover:underline text-6xl text-primary">
                  {res.node.title}
                </h2>
                <p className="mt-2 text-lg text-text-main">
                  {res.node.shortDescription}
                  <span aria-hidden="true"> &rarr;</span>
                </p>
              </div>
              <div
                className={classNames(
                  projectIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5 lg:justify-start' : 'lg:justify-end lg:col-start-1',
                  'flex flex-auto justify-center lg:row-start-1 lg:col-span-7 xl:col-span-8 z-10 mx-10',
                )}
              >
                <div className="circle group-hover:transform group-hover:scale-105 group-hover:filter-none">
                  <GatsbyImage
                    image={getImage(res.node.featuredImage.localFile)}
                    alt={res.node.title}
                    className="object-center object-cover"
                  />
                </div>
              </div>
            </StyledProjectLink>
          ))}
        </div>
      </ProjectsContainer>
    </Layout>
  );
}

export default ProjectsPage;
