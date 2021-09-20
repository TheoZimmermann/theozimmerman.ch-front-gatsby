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
  }
}
`;

export const Project = ({ data }) => {
  const project = data.strapiProject;

  return (
    <ProjectLayout>
      <ProjectLanding project={project} />
      <ProjectBody project={project} />
    </ProjectLayout>
  );
};

export default Project;
