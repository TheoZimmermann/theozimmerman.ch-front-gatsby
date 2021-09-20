import React from 'react';
import { graphql } from 'gatsby';

import ProjectLayout from '../components/projectLayout';
import ProjectLanding from '../components/project/landing';
import ProjectBody from '../components/project/body';

export const query = graphql`
query projectQuery($slug: String!) {
  strapiProject(slug: { eq: $slug }) {
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
      tags {
        label
      }
  }
}
`;

export const Project = ({ data, pageContext }) => {
  const project = data.strapiProject;

  return (
    <ProjectLayout>
      <ProjectLanding tags={project.tags} title={project.title} />
      <ProjectBody title={project.title} body={project.body} next={pageContext.next} />
    </ProjectLayout>
  );
};

export default Project;
