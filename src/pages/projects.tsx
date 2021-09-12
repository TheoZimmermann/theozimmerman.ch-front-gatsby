import React from 'react';
import tw from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BlobbyBackgroundPattern from '../assets/images/BlobbyBackgroundPattern.svg';

const ProjectsContainer = tw.div`
max-w-7xl container mx-auto px-4 sm:px-6 mt-16 lg:mt-24 mb-40
`;

const BlobbyBackground = tw.span`
w-full h-full absolute bg-repeat-y bg-cover z-0`;

const ProjectsPage = () => {
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

    const Projects: Array<{ body: string, title: string, shortDescription: string, featuredImage: any }> = data.allStrapiProject.nodes || [];
    return (
        <Layout>
            <BlobbyBackground style={{ backgroundImage: `url(${BlobbyBackgroundPattern})` }} />
            <SEO title="my projects" />
            <h1 className="invisible">
                Projects
            </h1>
            <ProjectsContainer>
                {Projects.map((res) => (
                    <div key={res.title}>
                        <GatsbyImage image={getImage(res.featuredImage.localFile)} alt={res.title} />
                    </div>
                ))}
            </ProjectsContainer>
        </Layout>
    );
};

export default ProjectsPage;
